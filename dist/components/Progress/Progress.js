import React from "react";
import StyledProgress, { Bar } from "./StyledProgress";
import ProgressBunnyWrapper from "./ProgressBunnyWrapper";
import { ProgressBunny } from "../Svg";
import { variants, scales } from "./types";
var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? variants.ROUND : _b, _c = _a.scale, scale = _c === void 0 ? scales.MD : _c, _d = _a.primaryStep, primaryStep = _d === void 0 ? 0 : _d, _e = _a.secondaryStep, secondaryStep = _e === void 0 ? null : _e, _f = _a.showProgressBunny, showProgressBunny = _f === void 0 ? false : _f;
    return (React.createElement(StyledProgress, { variant: variant, scale: scale },
        showProgressBunny && (React.createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React.createElement(ProgressBunny, null))),
        React.createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React.createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};
export default Progress;
