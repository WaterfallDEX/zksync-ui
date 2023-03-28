var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { space, variant as StyledSystemVariant } from "styled-system";
import { styleVariants, styleScales } from "./themes";
import { variants } from "./types";
export var Bar = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 100%;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 100%;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, Bar, function (_a) {
    var variant = _a.variant;
    return (variant === variants.FLAT ? "0" : "32px");
}, function (_a) {
    var variant = _a.variant;
    return (variant === variants.FLAT ? "0" : "32px");
}, StyledSystemVariant({
    variants: styleVariants,
}), StyledSystemVariant({
    prop: "scale",
    variants: styleScales,
}), space);
export default StyledProgress;
var templateObject_1, templateObject_2;
