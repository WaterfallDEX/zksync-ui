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
import { light as lightAlert } from "../components/Alert/theme";
import { light as lightCard } from "../components/Card/theme";
import { light as lightPancakeToggle } from "../components/PancakeToggle/theme";
import { light as lightRadio } from "../components/Radio/theme";
import { light as lightToggle } from "../components/Toggle/theme";
import { light as lightTooltip } from "../components/Tooltip/theme";
import { light as lightNav } from "../widgets/Menu/theme";
import { light as lightModal } from "../widgets/Modal/theme";
import base from "./base";
import { lightColors } from "./colors";
var lightTheme = __assign(__assign({}, base), { isDark: false, alert: lightAlert, colors: lightColors, card: lightCard, toggle: lightToggle, nav: lightNav, modal: lightModal, pancakeToggle: lightPancakeToggle, radio: lightRadio, tooltip: lightTooltip });
export default lightTheme;
