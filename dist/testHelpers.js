import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { light } from "./theme";
/* eslint-disable import/prefer-default-export */
export var renderWithTheme = function (component, theme) {
    if (theme === void 0) { theme = light; }
    return render(React.createElement(ThemeProvider, { theme: theme }, component));
};
export var setupMockIntersectionObserver = function () {
    /* eslint-disable class-methods-use-this */
    var MockIntersectionObserver = /** @class */ (function () {
        function MockIntersectionObserver() {
            this.root = null;
            this.rootMargin = "";
            this.thresholds = [];
        }
        MockIntersectionObserver.prototype.disconnect = function () {
            return jest.fn;
        };
        MockIntersectionObserver.prototype.observe = function () {
            return jest.fn;
        };
        MockIntersectionObserver.prototype.takeRecords = function () {
            return [];
        };
        MockIntersectionObserver.prototype.unobserve = function () {
            return jest.fn;
        };
        return MockIntersectionObserver;
    }());
    Object.defineProperty(window, "IntersectionObserver", {
        writable: true,
        configurable: true,
        value: MockIntersectionObserver,
    });
};
