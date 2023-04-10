
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: import("vue").PropType<import("./common").NameType>;
        default: string;
    };
    enterClass: {
        type: StringConstructor;
        default: string;
    };
    enterActiveClass: {
        type: StringConstructor;
        default: string;
    };
    enterToClass: {
        type: StringConstructor;
        default: string;
    };
    leaveClass: {
        type: StringConstructor;
        default: string;
    };
    leaveActiveClass: {
        type: StringConstructor;
        default: string;
    };
    leaveToClass: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    timingFunction: {
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
    isShow: import("vue").Ref<boolean>;
    classes: import("vue").Ref<string>;
    mainClass: import("vue").ComputedRef<string>;
    handleClick: () => void;
    mainStyle: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "beforeEnter" | "enter" | "afterEnter" | "beforeLeave" | "leave" | "afterLeave")[], "click" | "beforeEnter" | "enter" | "afterEnter" | "beforeLeave" | "leave" | "afterLeave", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: import("vue").PropType<import("./common").NameType>;
        default: string;
    };
    enterClass: {
        type: StringConstructor;
        default: string;
    };
    enterActiveClass: {
        type: StringConstructor;
        default: string;
    };
    enterToClass: {
        type: StringConstructor;
        default: string;
    };
    leaveClass: {
        type: StringConstructor;
        default: string;
    };
    leaveActiveClass: {
        type: StringConstructor;
        default: string;
    };
    leaveToClass: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    timingFunction: {
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
    onAfterLeave?: ((...args: any[]) => any) | undefined;
    onAfterEnter?: ((...args: any[]) => any) | undefined;
    onBeforeEnter?: ((...args: any[]) => any) | undefined;
    onEnter?: ((...args: any[]) => any) | undefined;
    onBeforeLeave?: ((...args: any[]) => any) | undefined;
    onLeave?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    name: import("./common").NameType;
    show: boolean;
    duration: string | number;
    enterClass: string;
    enterActiveClass: string;
    enterToClass: string;
    leaveClass: string;
    leaveActiveClass: string;
    leaveToClass: string;
    timingFunction: string;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinTransition: typeof _default;
  }
}