import type { ExtractPropTypes } from 'vue';
export declare const rateProps: {
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    count: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    iconSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    voidColor: {
        type: StringConstructor;
        default: string;
    };
    uncheckedIcon: {
        type: StringConstructor;
        default: string;
    };
    checkedIcon: {
        type: StringConstructor;
        default: string;
    };
    fontClassName: {
        type: StringConstructor;
        default: string;
    };
    classPrefix: {
        type: StringConstructor;
        default: string;
    };
    allowHalf: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    spacing: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
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
export type RateProps = ExtractPropTypes<typeof rateProps>;
