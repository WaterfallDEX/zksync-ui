var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { useMemo, useReducer, useEffect, useCallback } from "react";
import noop from "lodash/noop";
import { byTextAscending, byTextDescending } from "./utils";
var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArray([], data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () {
    return function (state, action) {
        var rows = [];
        var nextPage = 0;
        var prevPage = 0;
        var isAscending = null;
        var sortedRows = [];
        var columnCopy = [];
        var filteredRows = [];
        var selectedRowsById = {};
        var stateCopy = __assign({}, state);
        var rowIds = {};
        switch (action.type) {
            case "SET_ROWS":
                rows = __spreadArray([], action.data);
                // preserve sorting if a sort is already enabled when data changes
                if (state.sortColumn) {
                    rows = sortByColumn(action.data, state.sortColumn, state.columns);
                }
                if (state.paginationEnabled === true) {
                    rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
                }
                if (state.paginationEnabled === true) {
                    rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
                }
                columnCopy = state.columns.map(function (column) {
                    if (state.sortColumn === column.name) {
                        return __assign(__assign({}, column), { sorted: {
                                on: true,
                                asc: column.sorted.asc,
                            } });
                    }
                    return column;
                });
                return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
            case "NEXT_PAGE":
                nextPage = state.pagination.page + 1;
                return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
            case "PREV_PAGE":
                prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
                return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
            case "TOGGLE_SORT":
                if (!(action.columnName in state.columnsByName)) {
                    throw new Error("Invalid column, " + action.columnName + " not found");
                }
                // loop through all columns and set the sort parameter to off unless
                // it's the specified column (only one column at a time for )
                columnCopy = state.columns.map(function (column) {
                    // if the row was found
                    if (action.columnName === column.name) {
                        if (action.isAscOverride !== undefined) {
                            // force the sort order
                            isAscending = action.isAscOverride;
                        }
                        else {
                            // if it's undefined, start by setting to ascending, otherwise toggle
                            isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                        }
                        if (column.sort) {
                            sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                            // default to sort by string
                        }
                        else {
                            sortedRows = isAscending
                                ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                                : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                        }
                        return __assign(__assign({}, column), { sorted: {
                                on: true,
                                asc: isAscending,
                            } });
                    }
                    // set sorting to false for all other columns
                    return __assign(__assign({}, column), { sorted: {
                            on: false,
                            asc: false,
                        } });
                });
                return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
            case "GLOBAL_FILTER":
                filteredRows = action.filter(state.originalRows);
                selectedRowsById = {};
                state.selectedRows.forEach(function (row) {
                    var _a;
                    selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
                });
                return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                        return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                    }), filterOn: true });
            case "SELECT_ROW":
                stateCopy = __assign({}, state);
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    var newRow = __assign({}, row);
                    if (newRow.id === action.rowId) {
                        newRow.selected = !newRow.selected;
                    }
                    return newRow;
                });
                stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                    var newRow = __assign({}, row);
                    if (newRow.id === action.rowId) {
                        newRow.selected = !newRow.selected;
                    }
                    return newRow;
                });
                stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
                stateCopy.toggleAllState =
                    stateCopy.selectedRows.length === stateCopy.rows.length
                        ? (stateCopy.toggleAllState = true)
                        : (stateCopy.toggleAllState = false);
                return stateCopy;
            case "SEARCH_STRING":
                stateCopy = __assign({}, state);
                stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                    return (row.cells.filter(function (cell) {
                        if (cell.value.includes(action.searchString)) {
                            return true;
                        }
                        return false;
                    }).length > 0);
                });
                return stateCopy;
            case "TOGGLE_ALL":
                if (state.selectedRows.length < state.rows.length) {
                    stateCopy.rows = stateCopy.rows.map(function (row) {
                        rowIds[row.id] = true;
                        return __assign(__assign({}, row), { selected: true });
                    });
                    stateCopy.toggleAllState = true;
                }
                else {
                    stateCopy.rows = stateCopy.rows.map(function (row) {
                        rowIds[row.id] = false;
                        return __assign(__assign({}, row), { selected: false });
                    });
                    stateCopy.toggleAllState = false;
                }
                stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                    return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
                });
                stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
                return stateCopy;
            default:
                throw new Error("Invalid reducer action");
        }
    };
};
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
export var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
export var useTable = function (columns, data, options) {
    var columnsWithSorting = useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop,
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = useMemo(function () {
        return __spreadArray([], state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};
