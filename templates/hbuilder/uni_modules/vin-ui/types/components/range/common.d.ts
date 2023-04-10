import type { ExtractPropTypes, PropType } from 'vue';
export type SliderValue = number | number[];
export declare const rangeProps: {
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: BooleanConstructor;
    activeColor: StringConstructor;
    inactiveColor: StringConstructor;
    buttonColor: StringConstructor;
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    marks: {
        type: ObjectConstructor;
        default: {};
    };
    hiddenRange: {
        type: BooleanConstructor;
        default: boolean;
    };
    hiddenTag: {
        type: BooleanConstructor;
        default: boolean;
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
    modelValue: {
        type: PropType<SliderValue>;
        default: number;
    };
    customClass: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    customStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: string;
    };
};
export type RangeProps = ExtractPropTypes<typeof rangeProps>;
