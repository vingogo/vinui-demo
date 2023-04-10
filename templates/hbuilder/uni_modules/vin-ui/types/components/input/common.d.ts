import type { ExtractPropTypes, PropType } from 'vue';
export type InputAlignType = 'left' | 'center' | 'right';
export type InputFormatTrigger = 'onChange' | 'onBlur';
export type InputType = 'tel' | 'url' | 'date' | 'file' | 'text' | 'time' | 'week' | 'color' | 'digit' | 'email' | 'image' | 'month' | 'radio' | 'range' | 'reset' | 'button' | 'hidden' | 'number' | 'search' | 'submit' | 'checkbox' | 'password' | 'textarea' | 'datetime-local';
export type InputRule = {
    pattern?: RegExp;
    message?: string;
    required?: boolean;
};
export declare const inputProps: {
    ref: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<InputType>;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    labelClass: {
        type: StringConstructor;
        default: string;
    };
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    labelAlign: {
        type: PropType<InputAlignType>;
        default: string;
    };
    inputAlign: {
        type: StringConstructor;
        default: string;
    };
    colon: {
        type: BooleanConstructor;
        default: boolean;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxLength: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: StringConstructor;
        default: string;
    };
    clearSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    leftIconSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    leftIcon: {
        type: StringConstructor;
        default: string;
    };
    rightIcon: {
        type: StringConstructor;
        default: string;
    };
    rightIconSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    showWordLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    rules: {
        type: PropType<InputRule>;
        default: never[];
    };
    rows: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    errorMessage: {
        type: StringConstructor;
        default: string;
    };
    errorMessageAlign: {
        type: PropType<InputAlignType>;
        default: string;
    };
    formatter: {
        type: PropType<(value: string) => string>;
        default: null;
    };
    formatTrigger: {
        type: PropType<InputFormatTrigger>;
        default: string;
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
export type InputProps = ExtractPropTypes<typeof inputProps>;
