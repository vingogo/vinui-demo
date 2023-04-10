
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    title: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    paneKey: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    disabled: {
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    paneKey: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    disabled: {
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
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    title: string | number;
    disabled: boolean;
    paneKey: string | number;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinTabpane: typeof _default;
  }
}