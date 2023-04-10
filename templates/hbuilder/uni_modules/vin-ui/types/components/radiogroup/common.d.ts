import type { ExtractPropTypes } from 'vue';
export declare const radioGroupProps: {
    modelValue: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: string;
    };
    textPosition: {
        type: StringConstructor;
        default: string;
    };
    direction: {
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
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;
