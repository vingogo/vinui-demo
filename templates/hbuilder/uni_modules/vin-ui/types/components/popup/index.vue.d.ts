
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    transition: StringConstructor;
    popClass: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconPosition: {
        type: StringConstructor;
        default: string;
    };
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    duration: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    overlayStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    closeOnClickOverlay: {
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
    popStyle: import("vue").ComputedRef<string>;
    mainClass: import("vue").ComputedRef<string>;
    onClick: (e: Event) => void;
    onClickCloseIcon: (e: Event) => void;
    onClickOverlay: (e: Event) => void;
    onOpened: (e: Event) => void;
    onClosed: (e: Event) => void;
    zIndex: import("vue").Ref<string | number>;
    showSlot: import("vue").Ref<boolean>;
    transitionName: import("vue").Ref<string>;
    overLayCount: import("vue").Ref<number>;
    keepAlive: import("vue").Ref<boolean>;
    closed: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "close" | "update:visible" | "click-overlay" | "click-close-icon" | "open" | "closed" | "opend")[], "click" | "close" | "update:visible" | "click-overlay" | "click-close-icon" | "open" | "closed" | "opend", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    transition: StringConstructor;
    popClass: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconPosition: {
        type: StringConstructor;
        default: string;
    };
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    duration: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    overlayStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    closeOnClickOverlay: {
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
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
    "onClick-overlay"?: ((...args: any[]) => any) | undefined;
    "onClick-close-icon"?: ((...args: any[]) => any) | undefined;
    onOpend?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    round: boolean;
    zIndex: string | number;
    visible: boolean;
    overlay: boolean;
    position: string;
    popClass: string;
    closeable: boolean;
    closeIconPosition: string;
    closeIcon: string;
    destroyOnClose: boolean;
    safeAreaInsetBottom: boolean;
    duration: string | number;
    overlayClass: string;
    closeOnClickOverlay: boolean;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinPopup: typeof _default;
  }
}