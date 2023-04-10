
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    count: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    iconSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    voidColor: {
        type: StringConstructor;
        default: string;
    };
    uncheckedIcon: {
        type: StringConstructor;
        default: string;
    };
    checkedIcon: {
        type: StringConstructor;
        default: string;
    };
    fontClassName: {
        type: StringConstructor;
        default: string;
    };
    classPrefix: {
        type: StringConstructor;
        default: string;
    };
    allowHalf: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    spacing: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
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
    onClick: (e: number, index: number) => void;
    pxCheck: (value: string | number) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    count: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    iconSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    voidColor: {
        type: StringConstructor;
        default: string;
    };
    uncheckedIcon: {
        type: StringConstructor;
        default: string;
    };
    checkedIcon: {
        type: StringConstructor;
        default: string;
    };
    fontClassName: {
        type: StringConstructor;
        default: string;
    };
    classPrefix: {
        type: StringConstructor;
        default: string;
    };
    allowHalf: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    spacing: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
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
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    classPrefix: string;
    disabled: boolean;
    modelValue: string | number;
    iconSize: string | number;
    fontClassName: string;
    readonly: boolean;
    activeColor: string;
    count: string | number;
    voidColor: string;
    uncheckedIcon: string;
    checkedIcon: string;
    allowHalf: boolean;
    spacing: string | number;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinRate: typeof _default;
  }
}