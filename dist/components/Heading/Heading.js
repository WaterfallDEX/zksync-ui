var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var _a;
import styled from "styled-components";
import Text from "../Text/Text";
import { tags, scales } from "./types";
var style = (_a = {},
    _a[scales.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a[scales.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a[scales.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a[scales.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a);
var Heading = styled(Text).attrs({ bold: true })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var scale = _a.scale;
    return style[scale || scales.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var scale = _a.scale;
    return style[scale || scales.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
};
export default Heading;
var templateObject_1;
