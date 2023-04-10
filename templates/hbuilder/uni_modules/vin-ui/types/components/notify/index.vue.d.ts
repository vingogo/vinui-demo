
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    id: StringConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    message: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
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
    mainStyle: import("vue").ComputedRef<string>;
    mainClass: import("vue").ComputedRef<string>;
    hide: () => void;
    onAfterLeave: () => void;
    onClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:visible" | "closed")[], "click" | "update:visible" | "closed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: StringConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    message: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
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
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    color: string;
    type: string;
    visible: boolean;
    position: string;
    duration: number;
    message: string;
    background: string;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinNotify: typeof _default;
  }
}