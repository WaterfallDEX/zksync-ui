import React from "react";
interface Props {
    isPushed: boolean;
    isDark: boolean;
    togglePush: () => void;
    href: string;
    as?: React.ElementType | keyof JSX.IntrinsicElements;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
