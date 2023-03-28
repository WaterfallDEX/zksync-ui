var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var _a, _b;
import styled from "styled-components";
import { variant as StyledSystemVariant } from "styled-system";
import { variants } from "./types";
import TokenImage from "./TokenImage";
export var StyledPrimaryImage = styled(TokenImage)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  width: ", "; // 92, 82 are arbitrary numbers to fit the variant\n\n  ", "\n"], ["\n  position: absolute;\n  width: ", "; // 92, 82 are arbitrary numbers to fit the variant\n\n  ", "\n"])), function (_a) {
    var variant = _a.variant;
    return variant === variants.DEFAULT ? "92%" : "82%";
}, StyledSystemVariant({
    variants: (_a = {},
        _a[variants.DEFAULT] = {
            bottom: "auto",
            left: 0,
            right: "auto",
            top: 0,
            zIndex: 5,
        },
        _a[variants.INVERTED] = {
            bottom: 0,
            left: "auto",
            right: 0,
            top: "auto",
            zIndex: 6,
        },
        _a),
}));
export var StyledSecondaryImage = styled(TokenImage)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  width: 50%;\n\n  ", "\n"], ["\n  position: absolute;\n  width: 50%;\n\n  ", "\n"])), StyledSystemVariant({
    variants: (_b = {},
        _b[variants.DEFAULT] = {
            bottom: 0,
            left: "auto",
            right: 0,
            top: "auto",
            zIndex: 6,
        },
        _b[variants.INVERTED] = {
            bottom: "auto",
            left: 0,
            right: "auto",
            top: 0,
            zIndex: 5,
        },
        _b),
}));
var templateObject_1, templateObject_2;
