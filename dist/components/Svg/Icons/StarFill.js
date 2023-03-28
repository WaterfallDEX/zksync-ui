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
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8382 2.20573L16.12 6.82916L21.2222 7.57057C22.9037 7.81489 23.5751 9.88123 22.3584 11.0672L18.6663 14.6661L19.5379 19.7477C19.8251 21.4224 18.0674 22.6995 16.5635 21.9088L11.9998 19.5096L7.43624 21.9088C5.93232 22.6995 4.17457 21.4224 4.4618 19.7477L5.33337 14.6661L1.64134 11.0672C0.424631 9.88125 1.09601 7.8149 2.77747 7.57057L7.87974 6.82916L10.1615 2.20573C10.9135 0.682081 13.0862 0.682068 13.8382 2.20573Z" })));
};
export default Icon;
