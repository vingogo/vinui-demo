import type { ExtractPropTypes } from 'vue';
export declare const inputNumberProps: {
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    inputWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    buttonSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    min: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    step: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    decimalPlaces: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
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
export type InputNumberProps = ExtractPropTypes<typeof inputNumberProps>;
