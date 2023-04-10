import type { ExtractPropTypes } from 'vue';
export declare const textareaProps: {
    modelValue: {
        type: StringConstructor[];
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    maxLength: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    rows: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    limitShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    autosize: {
        type: BooleanConstructor;
        default: boolean;
    };
    textAlign: {
        type: StringConstructor;
        default: string;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocus: {
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
export type TextareaProps = ExtractPropTypes<typeof textareaProps>;
