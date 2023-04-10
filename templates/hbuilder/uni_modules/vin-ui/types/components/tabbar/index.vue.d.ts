
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    visible: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    bottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    unactiveColor: {
        type: StringConstructor;
        default: string;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    safeAreaInsetBottom: {
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
    mainStyle: import("vue").ComputedRef<string>;
    mainClass: import("vue").ComputedRef<string>;
    changeIndex: (active: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "tab-switch")[], "update:visible" | "tab-switch", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    bottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    unactiveColor: {
        type: StringConstructor;
        default: string;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    safeAreaInsetBottom: {
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
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    "onTab-switch"?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    size: string;
    type: string;
    visible: string | number;
    bottom: boolean;
    safeAreaInsetBottom: boolean;
    activeColor: string;
    unactiveColor: string;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinTabbar: typeof _default;
  }
}