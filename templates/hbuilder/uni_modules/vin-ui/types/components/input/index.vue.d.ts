import { CSSProperties } from 'vue';
import type { InputFormatTrigger } from './common';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    ref: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: import("vue").PropType<import("./common").InputType>;
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
        type: import("vue").PropType<import("./common").InputAlignType>;
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
        type: import("vue").PropType<import("./common").InputRule>;
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
        type: import("vue").PropType<import("./common").InputAlignType>;
        default: string;
    };
    formatter: {
        type: import("vue").PropType<(value: string) => string>;
        default: null;
    };
    formatTrigger: {
        type: import("vue").PropType<InputFormatTrigger>;
        default: string;
    };
    customClass: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    customStyle: {
        type: import("vue").PropType<CSSProperties>;
        default: string;
    };
}, {
    inputRef: import("vue").Ref<HTMLInputElement | undefined>;
    active: import("vue").Ref<boolean>;
    mainClass: import("vue").ComputedRef<string>;
    styles: import("vue").ComputedRef<CSSProperties>;
    mainStyle: import("vue").ComputedRef<string>;
    stylesTextarea: import("vue").ComputedRef<CSSProperties>;
    inputType: (type: string) => string;
    onInput: (event: any) => void;
    onFocus: (event: any) => void;
    onBlur: (event: any) => void;
    clear: (event: Event) => void;
    onClickInput: (event: MouseEvent) => void;
    onClickLeftIcon: (event: MouseEvent) => void;
    onClickRightIcon: (event: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "focus" | "blur" | "clear" | "keypress" | "click-input" | "click-left-icon" | "click-right-icon")[], "update:modelValue" | "change" | "focus" | "blur" | "clear" | "keypress" | "click-input" | "click-left-icon" | "click-right-icon", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    ref: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: import("vue").PropType<import("./common").InputType>;
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
        type: import("vue").PropType<import("./common").InputAlignType>;
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
        type: import("vue").PropType<import("./common").InputRule>;
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
        type: import("vue").PropType<import("./common").InputAlignType>;
        default: string;
    };
    formatter: {
        type: import("vue").PropType<(value: string) => string>;
        default: null;
    };
    formatTrigger: {
        type: import("vue").PropType<InputFormatTrigger>;
        default: string;
    };
    customClass: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    customStyle: {
        type: import("vue").PropType<CSSProperties>;
        default: string;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onKeypress?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    "onClick-input"?: ((...args: any[]) => any) | undefined;
    "onClick-left-icon"?: ((...args: any[]) => any) | undefined;
    "onClick-right-icon"?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: CSSProperties;
    type: import("./common").InputType;
    ref: string;
    label: string;
    error: boolean;
    disabled: boolean;
    center: boolean;
    modelValue: string;
    labelClass: string;
    rules: import("./common").InputRule;
    required: boolean;
    labelWidth: string | number;
    labelAlign: import("./common").InputAlignType;
    errorMessageAlign: import("./common").InputAlignType;
    border: boolean;
    placeholder: string;
    inputAlign: string;
    colon: boolean;
    readonly: boolean;
    autofocus: boolean;
    maxLength: string | number;
    clearable: boolean;
    clearIcon: string;
    clearSize: string | number;
    leftIconSize: string | number;
    leftIcon: string;
    rightIcon: string;
    rightIconSize: string | number;
    showWordLimit: boolean;
    rows: string | number;
    errorMessage: string;
    formatter: (value: string) => string;
    formatTrigger: InputFormatTrigger;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinInput: typeof _default;
  }
}