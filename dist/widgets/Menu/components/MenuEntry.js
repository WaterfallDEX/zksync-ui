var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled, { keyframes } from "styled-components";
import { Text } from "../../../components/Text";
import { MENU_ENTRY_HEIGHT } from "../config";
var rainbowAnimation = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
};
var LinkStatus = styled(Text)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"], ["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.radii.default;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var LinkLabelMemo = React.memo(LinkLabel, function (prev, next) { return prev.isPushed === next.isPushed; });
export { MenuEntry, LinkStatus, LinkLabelMemo as LinkLabel };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
