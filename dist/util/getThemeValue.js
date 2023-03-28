import get from "lodash/get";
var getThemeValue = function (path, fallback) {
    return function (theme) {
        return get(theme, path, fallback);
    };
};
export default getThemeValue;
