var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import Flex from "../../components/Box/Flex";
import { Box } from "../../components/Box";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
export var ModalHeader = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"], ["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"])), function (_a) {
    var background = _a.background;
    return background || "transparent";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
});
export var ModalTitle = styled(Flex)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
export var ModalBody = styled(Flex)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex-direction: column;\n  max-height: 90vh;\n  overflow-y: auto;\n"], ["\n  flex-direction: column;\n  max-height: 90vh;\n  overflow-y: auto;\n"])));
export var ModalCloseButton = function (_a) {
    var onDismiss = _a.onDismiss;
    return (React.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
        React.createElement(CloseIcon, { color: "primary" })));
};
export var ModalBackButton = function (_a) {
    var onBack = _a.onBack;
    return (React.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
        React.createElement(ArrowBackIcon, { color: "primary" })));
};
export var ModalContainer = styled(Box)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  overflow: hidden;\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  max-height: 100vh;\n  z-index: ", ";\n\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"], ["\n  overflow: hidden;\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  max-height: 100vh;\n  z-index: ", ";\n\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var minWidth = _a.minWidth;
    return minWidth;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
