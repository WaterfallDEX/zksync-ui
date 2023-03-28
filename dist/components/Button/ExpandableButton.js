import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "../Svg";
import Button from "./Button";
import IconButton from "./IconButton";
export var ExpandableButton = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React.createElement(IconButton, { "aria-label": "Hide or show expandable content", onClick: onClick },
        children,
        expanded ? React.createElement(ChevronUpIcon, { color: "invertedContrast" }) : React.createElement(ChevronDownIcon, { color: "invertedContrast" })));
};
ExpandableButton.defaultProps = {
    expanded: false,
};
export var ExpandableLabel = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React.createElement(Button, { variant: "text", "aria-label": "Hide or show expandable content", onClick: onClick, endIcon: expanded ? React.createElement(ChevronUpIcon, { color: "primary" }) : React.createElement(ChevronDownIcon, { color: "primary" }) }, children));
};
ExpandableLabel.defaultProps = {
    expanded: false,
};
