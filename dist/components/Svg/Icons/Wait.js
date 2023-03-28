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
import Svg from "../Svg";
var Icon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z" })));
};
export default Icon;
