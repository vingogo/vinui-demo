
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    leftShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    titIcon: {
        type: StringConstructor;
        default: string;
    };
    desc: {
        type: StringConstructor;
        default: string;
    };
    fixed: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetTop: {
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
    handleLeft: () => void;
    handleCenter: () => void;
    handleCenterIcon: () => void;
    handleRight: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-click-back" | "on-click-title" | "on-click-icon" | "on-click-right")[], "on-click-back" | "on-click-title" | "on-click-icon" | "on-click-right", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    leftShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    titIcon: {
        type: StringConstructor;
        default: string;
    };
    desc: {
        type: StringConstructor;
        default: string;
    };
    fixed: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetTop: {
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
    "onOn-click-back"?: ((...args: any[]) => any) | undefined;
    "onOn-click-title"?: ((...args: any[]) => any) | undefined;
    "onOn-click-icon"?: ((...args: any[]) => any) | undefined;
    "onOn-click-right"?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    title: string;
    desc: string;
    fixed: boolean;
    leftShow: boolean;
    titIcon: string;
    safeAreaInsetTop: boolean;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinNavbar: typeof _default;
  }
}