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
import React from "react";
import Svg from "../../../components/Svg/Svg";
var Icon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 5H17C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5H5C3.9 5 3 5.9 3 7V8C3 10.55 4.92 12.63 7.39 12.94C8.02 14.44 9.37 15.57 11 15.9V19H8C7.44772 19 7 19.4477 7 20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19H13V15.9C14.63 15.57 15.98 14.44 16.61 12.94C19.08 12.63 21 10.55 21 8V7C21 5.9 20.1 5 19 5ZM5 8V7H7V10.82C5.84 10.4 5 9.3 5 8ZM12 14C10.35 14 9 12.65 9 11V5H15V11C15 12.65 13.65 14 12 14ZM19 8C19 9.3 18.16 10.4 17 10.82V7H19V8Z" })));
};
export default Icon;
