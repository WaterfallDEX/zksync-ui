import React from "react";
import Text from "../../../components/Text/Text";
import Flex from "../../../components/Box/Flex";
import Button from "../../../components/Button/Button";
import * as IconModule from "../icons";
var Icons = IconModule;
var MoonIcon = Icons.MoonIcon, SunIcon = Icons.SunIcon;
var ThemeSwitcher = function (_a) {
    var isDark = _a.isDark, toggleTheme = _a.toggleTheme;
    return (React.createElement(Button, { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
        React.createElement(Flex, { alignItems: "center" },
            React.createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
            React.createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
            React.createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))));
};
export default React.memo(ThemeSwitcher, function (prev, next) { return prev.isDark === next.isDark; });
