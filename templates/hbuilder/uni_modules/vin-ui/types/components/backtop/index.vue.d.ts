
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    height: {
        type: StringConstructor;
        default: string;
    };
    bottom: {
        type: NumberConstructor;
        default: number;
    };
    right: {
        type: NumberConstructor;
        default: number;
    };
    distance: {
        type: NumberConstructor;
        default: number;
    };
    zIndex: {
        type: NumberConstructor;
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
    classes: import("vue").ComputedRef<string>;
    style: import("vue").ComputedRef<string>;
    scroll: (e: CustomEvent) => void;
    click: (e: MouseEvent) => void;
    backTop: import("vue").Ref<boolean>;
    scrollTop: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: StringConstructor;
        default: string;
    };
    bottom: {
        type: NumberConstructor;
        default: number;
    };
    right: {
        type: NumberConstructor;
        default: number;
    };
    distance: {
        type: NumberConstructor;
        default: number;
    };
    zIndex: {
        type: NumberConstructor;
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
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    zIndex: number;
    right: number;
    height: string;
    bottom: number;
    distance: number;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinBacktop: typeof _default;
  }
}