import type { ExtractPropTypes } from 'vue';
export declare const tabbarProps: {
    visible: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    bottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    unactiveColor: {
        type: StringConstructor;
        default: string;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    customStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: string;
    };
};
export type TabbarProps = ExtractPropTypes<typeof tabbarProps>;
