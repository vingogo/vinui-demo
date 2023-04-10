
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: null;
    };
    iconColor: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
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
    index: import("vue").ComputedRef<any>;
    mainClass: import("vue").ComputedRef<string>;
    mainStyle: import("vue").ComputedRef<string>;
    handleClickStep: () => void;
    dot: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click-step"[], "click-step", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: null;
    };
    iconColor: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
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
    "onClick-step"?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    size: string | number;
    icon: string;
    title: string;
    content: string;
    iconColor: string;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinStep: typeof _default;
  }
}