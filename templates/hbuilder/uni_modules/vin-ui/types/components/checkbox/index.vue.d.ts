
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    textPosition: {
        type: StringConstructor;
        default: string;
    };
    iconSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    iconName: {
        type: StringConstructor;
        default: string;
    };
    iconActiveName: {
        type: StringConstructor;
        default: string;
    };
    iconClassPrefix: {
        type: StringConstructor;
        default: string;
    };
    iconFontClassName: {
        type: StringConstructor;
        default: string;
    };
    label: {
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
}, {
    iconName: import("vue").ComputedRef<string>;
    color: import("vue").ComputedRef<"vin-checkbox__icon--unchecked" | "vin-checkbox__icon" | "vin-checkbox__icon--disable">;
    mainClass: import("vue").ComputedRef<string>;
    mainStyle: import("vue").ComputedRef<string>;
    labelClass: import("vue").ComputedRef<string>;
    handleClick: (e: MouseEvent | TouchEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    textPosition: {
        type: StringConstructor;
        default: string;
    };
    iconSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    iconName: {
        type: StringConstructor;
        default: string;
    };
    iconActiveName: {
        type: StringConstructor;
        default: string;
    };
    iconClassPrefix: {
        type: StringConstructor;
        default: string;
    };
    iconFontClassName: {
        type: StringConstructor;
        default: string;
    };
    label: {
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
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    label: string;
    disabled: boolean;
    iconFontClassName: string;
    iconClassPrefix: string;
    modelValue: boolean;
    textPosition: string;
    iconSize: string | number;
    iconName: string;
    iconActiveName: string;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinCheckbox: typeof _default;
  }
}