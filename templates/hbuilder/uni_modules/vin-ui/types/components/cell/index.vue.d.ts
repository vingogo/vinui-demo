import { CSSProperties } from 'vue';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    subTitle: {
        type: StringConstructor;
        default: string;
    };
    desc: {
        type: StringConstructor;
        default: string;
    };
    descTextAlign: {
        type: StringConstructor;
        default: string;
    };
    isLink: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    roundRadius: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    to: {
        type: StringConstructor;
        default: string;
    };
    replace: {
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
    handleClick: (event: Event) => void;
    classes: import("vue").ComputedRef<string>;
    baseStyle: import("vue").ComputedRef<string>;
    descStyle: import("vue").ComputedRef<CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    subTitle: {
        type: StringConstructor;
        default: string;
    };
    desc: {
        type: StringConstructor;
        default: string;
    };
    descTextAlign: {
        type: StringConstructor;
        default: string;
    };
    isLink: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    roundRadius: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    to: {
        type: StringConstructor;
        default: string;
    };
    replace: {
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
    icon: string;
    title: string;
    desc: string;
    subTitle: string;
    descTextAlign: string;
    isLink: boolean;
    roundRadius: string | number;
    to: string;
    replace: boolean;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinCell: typeof _default;
  }
}