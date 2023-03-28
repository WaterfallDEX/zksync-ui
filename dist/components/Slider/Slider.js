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
import React from "react";
import { Box } from "../Box";
import { BunnySlider, BarBackground, BarProgress, BunnyButt, StyledInput, SliderLabel, SliderLabelContainer, } from "./styles";
var Slider = function (_a) {
    var name = _a.name, min = _a.min, max = _a.max, value = _a.value, onValueChanged = _a.onValueChanged, valueLabel = _a.valueLabel, _b = _a.step, step = _b === void 0 ? "any" : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, props = __rest(_a, ["name", "min", "max", "value", "onValueChanged", "valueLabel", "step", "disabled"]);
    var handleChange = function (_a) {
        var target = _a.target;
        onValueChanged(parseFloat(target.value));
    };
    var progressPercentage = (value / max) * 100;
    var isMax = value === max;
    var progressWidth;
    if (progressPercentage <= 10) {
        progressWidth = progressPercentage + 0.5 + "%";
    }
    else if (progressPercentage >= 90) {
        progressWidth = progressPercentage - 4 + "%";
    }
    else if (progressPercentage >= 60) {
        progressWidth = progressPercentage - 2.5 + "%";
    }
    else {
        progressWidth = progressPercentage + "%";
    }
    var labelProgress = isMax ? "calc(100% - 12px)" : progressPercentage + "%";
    var displayValueLabel = isMax ? "MAX" : valueLabel;
    return (React.createElement(Box, __assign({ position: "relative", height: "48px" }, props),
        React.createElement(BunnyButt, { disabled: disabled }),
        React.createElement(BunnySlider, null,
            React.createElement(BarBackground, { disabled: disabled }),
            React.createElement(BarProgress, { style: { width: progressWidth }, disabled: disabled }),
            React.createElement(StyledInput, { name: name, type: "range", min: min, max: max, value: value, step: step, onChange: handleChange, isMax: isMax, disabled: disabled })),
        valueLabel && (React.createElement(SliderLabelContainer, null,
            React.createElement(SliderLabel, { progress: labelProgress }, displayValueLabel)))));
};
export default Slider;
