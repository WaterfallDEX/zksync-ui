var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { scales } from "./types";
var scaleKeyValues = {
    sm: {
        pancakeSize: "16px",
        travelDistance: "16px",
        toggleHeight: "20px",
        toggleWidth: "36px",
        pancakeThickness: "1px",
        pancakeTwoOffset: "0px",
        pancakeThreeOffset: "-3px",
        butterTop: "3px",
        butterLeft: "10px",
        butterWidth: "6px",
        butterHeight: "5px",
        butterThickness: "0.5px",
        butterRadius: "2px",
        butterSmearOneTop: "10px",
        butterSmearOneLeft: "2.5px",
        butterSmearTwoTop: "11px",
        butterSmearTwoRight: "2.5px", // these values adjust the position of it
    },
    md: {
        pancakeSize: "32px",
        travelDistance: "34px",
        toggleHeight: "40px",
        toggleWidth: "72px",
        pancakeThickness: "2px",
        pancakeTwoOffset: "-3px",
        pancakeThreeOffset: "-8px",
        butterTop: "3px",
        butterLeft: "16px",
        butterWidth: "12px",
        butterHeight: "11px",
        butterThickness: "1px",
        butterRadius: "4px",
        butterSmearOneTop: "20px",
        butterSmearOneLeft: "5px",
        butterSmearTwoTop: "22px",
        butterSmearTwoRight: "5px",
    },
};
var getScale = function (property) {
    return function (_a) {
        var _b = _a.scale, scale = _b === void 0 ? scales.MD : _b;
        return scaleKeyValues[scale][property];
    };
};
export var PancakeStack = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: #e27c31;\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 2px;\n    left: 4px;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n  }\n\n  .pancake:nth-child(1) {\n    background: ", ";\n    box-shadow: 0 ", " 0 ", "\n      ", ";\n  }\n\n  .pancake:nth-child(2) {\n    left: 0;\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: \"\";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ", ";\n    left: ", ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ", ";\n    right: ", ";\n  }\n\n  .butter {\n    width: ", ";\n    height: ", ";\n    background: #fbdb60;\n    top: ", ";\n    left: ", ";\n    position: absolute;\n    border-radius: ", ";\n    box-shadow: 0 ", " 0 ", " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: #e27c31;\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 2px;\n    left: 4px;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n  }\n\n  .pancake:nth-child(1) {\n    background: ", ";\n    box-shadow: 0 ", " 0 ", "\n      ", ";\n  }\n\n  .pancake:nth-child(2) {\n    left: 0;\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: \"\";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ", ";\n    left: ", ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ", ";\n    right: ", ";\n  }\n\n  .butter {\n    width: ", ";\n    height: ", ";\n    background: #fbdb60;\n    top: ", ";\n    left: ", ";\n    position: absolute;\n    border-radius: ", ";\n    box-shadow: 0 ", " 0 ", " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  }\n"])), getScale("pancakeSize"), getScale("pancakeSize"), getScale("pancakeThickness"), getScale("pancakeThickness"), function (_a) {
    var theme = _a.theme;
    return theme.pancakeToggle.handleBackground;
}, getScale("pancakeThickness"), getScale("pancakeThickness"), function (_a) {
    var theme = _a.theme;
    return theme.pancakeToggle.handleShadow;
}, getScale("pancakeTwoOffset"), getScale("pancakeThreeOffset"), getScale("butterSmearOneTop"), getScale("butterSmearOneLeft"), getScale("butterSmearTwoTop"), getScale("butterSmearTwoRight"), getScale("butterWidth"), getScale("butterHeight"), getScale("butterTop"), getScale("butterLeft"), getScale("butterRadius"), getScale("butterThickness"), getScale("butterThickness"));
export var PancakeInput = styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ", ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(", ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  }\n"], ["\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ", ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(", ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, getScale("travelDistance"), getScale("pancakeThickness"), getScale("pancakeThickness"));
export var PancakeLabel = styled.label(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n"], ["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n"])), getScale("toggleWidth"), getScale("toggleHeight"), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1, templateObject_2, templateObject_3;
