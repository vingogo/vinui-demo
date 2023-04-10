
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    gutter: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    justify: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
    wrap: {
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
    mainClass: import("vue").ComputedRef<string>;
    mainStyle: import("vue").ComputedRef<string>;
    handleClick: (evt: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    gutter: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    justify: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
    wrap: {
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
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    type: string;
    justify: string;
    gutter: string | number;
    wrap: string;
    align: string;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinRow: typeof _default;
  }
}