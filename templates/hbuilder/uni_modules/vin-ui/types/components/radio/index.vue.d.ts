
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
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
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    shape: {
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
    shape: string;
    mainClass: import("vue").ComputedRef<string>;
    mainStyle: import("vue").ComputedRef<string>;
    btnClass: import("vue").ComputedRef<string>;
    handleClick: () => void;
    reverseState: boolean;
    curIconName: import("vue").ComputedRef<string>;
    iconSize: string | number;
    iconClass: import("vue").ComputedRef<"vin-radio__icon" | "vin-radio__icon--unchecked" | "vin-radio__icon--disable">;
    iconClassPrefix: string;
    iconFontClassName: string;
    labelClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
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
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    shape: {
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
}>>, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    shape: string;
    label: string | number;
    disabled: boolean;
    iconFontClassName: string;
    iconClassPrefix: string;
    iconSize: string | number;
    iconName: string;
    iconActiveName: string;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinRadio: typeof _default;
  }
}