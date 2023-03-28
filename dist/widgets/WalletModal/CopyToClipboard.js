var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from "react";
import styled from "styled-components";
import Text from "../../components/Text/Text";
import { CopyIcon } from "../../components/Svg";
var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    var copyToClipboardWithCommand = function (content) {
        var el = document.createElement("textarea");
        el.value = content;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
    };
    function displayTooltip() {
        setIsTooltipDisplayed(true);
        setTimeout(function () {
            setIsTooltipDisplayed(false);
        }, 1000);
    }
    return (React.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard && navigator.permissions) {
                navigator.clipboard.writeText(toCopy).then(function () { return displayTooltip(); });
            }
            else if (document.queryCommandSupported("copy")) {
                copyToClipboardWithCommand(toCopy);
                displayTooltip();
            }
        } }, props),
        children,
        React.createElement(CopyIcon, { width: "20px", color: "primary", ml: "4px" }),
        React.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
export default CopyToClipboard;
var templateObject_1, templateObject_2;
