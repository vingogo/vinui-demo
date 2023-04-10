
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
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
}, {
    mainClass: import("vue").ComputedRef<string>;
    mainStyle: import("vue").ComputedRef<string>;
    change: (event: Event) => void;
    blur: (event: Event) => void;
    focus: (event: Event) => void;
    add: (event: Event) => void;
    addAllow: (value?: number) => boolean;
    reduce: (event: Event) => void;
    reduceAllow: (value?: number) => boolean;
    pxCheck: (value: string | number) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("reduce" | "add" | "update:modelValue" | "change" | "focus" | "blur" | "overlimit")[], "reduce" | "add" | "update:modelValue" | "change" | "focus" | "blur" | "overlimit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onReduce?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
    onOverlimit?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    max: string | number;
    disabled: boolean;
    modelValue: string | number;
    readonly: boolean;
    inputWidth: string | number;
    buttonSize: string | number;
    min: string | number;
    step: string | number;
    decimalPlaces: string | number;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinInputNumber: typeof _default;
  }
}