
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    tabTitle: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    href: {
        type: StringConstructor;
        default: string;
    };
    num: {
        type: StringConstructor;
        default: string;
    };
    activeImg: {
        type: StringConstructor;
        default: string;
    };
    img: {
        type: StringConstructor;
        default: string;
    };
    dot: {
        type: BooleanConstructor;
        default: boolean;
    };
    classPrefix: {
        type: StringConstructor;
        default: string;
    };
    fontClassName: {
        type: StringConstructor;
        default: string;
    };
    to: (ObjectConstructor | StringConstructor)[];
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
    state: {
        size: any;
        unactiveColor: any;
        activeColor: any;
        active: any;
        index: number;
    };
    change: (index: Number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tabTitle: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    href: {
        type: StringConstructor;
        default: string;
    };
    num: {
        type: StringConstructor;
        default: string;
    };
    activeImg: {
        type: StringConstructor;
        default: string;
    };
    img: {
        type: StringConstructor;
        default: string;
    };
    dot: {
        type: BooleanConstructor;
        default: boolean;
    };
    classPrefix: {
        type: StringConstructor;
        default: string;
    };
    fontClassName: {
        type: StringConstructor;
        default: string;
    };
    to: (ObjectConstructor | StringConstructor)[];
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
    icon: string;
    img: string;
    classPrefix: string;
    dot: boolean;
    fontClassName: string;
    tabTitle: string;
    href: string;
    num: string;
    activeImg: string;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinTabbarItem: typeof _default;
  }
}