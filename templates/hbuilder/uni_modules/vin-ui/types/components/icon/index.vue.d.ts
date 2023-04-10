
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
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
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
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
    isImage: import("vue").ComputedRef<boolean>;
    mainStyle: import("vue").ComputedRef<string>;
    mainClass: import("vue").ComputedRef<string>;
    handleClick: (event: Event) => void;
    name: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
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
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
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
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    name: string;
    size: string | number;
    color: string;
    classPrefix: string;
    fontClassName: string;
    tag: keyof HTMLElementTagNameMap;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinIcon: typeof _default;
  }
}