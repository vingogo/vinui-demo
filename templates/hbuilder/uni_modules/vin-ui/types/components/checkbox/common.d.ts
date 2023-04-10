import type { ExtractPropTypes } from 'vue';
export declare const checkboxProps: {
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    textPosition: {
        type: StringConstructor;
        default: string;
    };
    iconSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    iconName: {
        type: StringConstructor;
        default: string;
    };
    iconActiveName: {
        type: StringConstructor;
        default: string;
    };
    iconClassPrefix: {
        type: StringConstructor;
        default: string;
    };
    iconFontClassName: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
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
export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
