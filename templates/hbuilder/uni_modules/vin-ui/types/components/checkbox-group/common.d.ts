import type { ExtractPropTypes } from 'vue';
export declare const checkboxGroupProps: {
    modelValue: {
        type: ArrayConstructor;
        default: () => never[];
    };
    disabled: {
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
export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;
