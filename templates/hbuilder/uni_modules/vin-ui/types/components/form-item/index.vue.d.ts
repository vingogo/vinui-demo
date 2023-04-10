import type { CSSProperties } from 'vue';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    prop: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    labelAlign: {
        type: StringConstructor;
        default: string;
    };
    bodyAlign: {
        type: StringConstructor;
        default: string;
    };
    rules: {
        type: import("vue").PropType<import("./types").FormItemRule[]>;
        default: () => never[];
    };
    showErrorMessage: {
        type: BooleanConstructor;
        default: boolean;
    };
    showErrorLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    errorMessageAlign: {
        type: StringConstructor;
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
    formErrorTip: Required<any>;
    labelStyle: import("vue").ComputedRef<CSSProperties>;
    bodyStyle: import("vue").ComputedRef<CSSProperties>;
    errorMessageStyle: import("vue").ComputedRef<CSSProperties>;
    mainClass: import("vue").ComputedRef<string>;
    mainStyle: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    prop: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    labelAlign: {
        type: StringConstructor;
        default: string;
    };
    bodyAlign: {
        type: StringConstructor;
        default: string;
    };
    rules: {
        type: import("vue").PropType<import("./types").FormItemRule[]>;
        default: () => never[];
    };
    showErrorMessage: {
        type: BooleanConstructor;
        default: boolean;
    };
    showErrorLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    errorMessageAlign: {
        type: StringConstructor;
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
}>>, {
    customClass: string | unknown[];
    customStyle: CSSProperties;
    label: string;
    rules: import("./types").FormItemRule[];
    prop: string;
    required: boolean;
    labelWidth: string | number;
    labelAlign: string;
    bodyAlign: string;
    showErrorMessage: boolean;
    showErrorLine: boolean;
    errorMessageAlign: string;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinFormItem: typeof _default;
  }
}