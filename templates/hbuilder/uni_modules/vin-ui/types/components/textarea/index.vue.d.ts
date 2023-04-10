
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
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
}, {
    mainStyle: import("vue").ComputedRef<string>;
    mainClass: import("vue").ComputedRef<string>;
    styles: any;
    change: (event: any) => void;
    focus: (event: any) => void;
    blur: (event: any) => void;
    translate: (keyPath: string, ...args: unknown[]) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "focus" | "blur")[], "update:modelValue" | "change" | "focus" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    disabled: boolean;
    modelValue: string;
    textAlign: string;
    placeholder: string;
    readonly: boolean;
    autofocus: boolean;
    maxLength: string | number;
    rows: string | number;
    limitShow: boolean;
    autosize: boolean;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinTextarea: typeof _default;
  }
}