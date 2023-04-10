import { CSSProperties } from 'vue';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<import("./common").ButtonType>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("./common").ButtonSize>;
        default: string;
    };
    shape: {
        type: import("vue").PropType<import("./common").ButtonShape>;
        default: string;
    };
    color: StringConstructor;
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    iconFontClassName: {
        type: StringConstructor;
        default: string;
    };
    iconClassPrefix: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
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
    handleClick: (event: MouseEvent) => void;
    classes: import("vue").ComputedRef<string>;
    mainStyle: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./common").ButtonType>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("./common").ButtonSize>;
        default: string;
    };
    shape: {
        type: import("vue").PropType<import("./common").ButtonShape>;
        default: string;
    };
    color: StringConstructor;
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    iconFontClassName: {
        type: StringConstructor;
        default: string;
    };
    iconClassPrefix: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
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
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: CSSProperties;
    size: import("./common").ButtonSize;
    shape: import("./common").ButtonShape;
    icon: string;
    type: import("./common").ButtonType;
    plain: boolean;
    disabled: boolean;
    block: boolean;
    iconFontClassName: string;
    iconClassPrefix: string;
    loading: boolean;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinButton: typeof _default;
  }
}