import type { CSSProperties } from 'vue';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: import("vue").PropType<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        default: string;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    noFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    noOkBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    noCancelBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    cancelAutoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    textAlign: {
        type: StringConstructor;
        default: string;
    };
    footerDirection: {
        type: StringConstructor;
        default: string;
    };
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
        type: import("vue").PropType<CSSProperties>;
    };
    customClass: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    customStyle: {
        type: import("vue").PropType<CSSProperties>;
        default: string;
    };
}, {
    closed: () => void;
    mainClass: import("vue").ComputedRef<string>;
    mainStyle: import("vue").ComputedRef<string>;
    onCancel: () => void;
    onOk: () => void;
    showPopup: import("vue").Ref<boolean>;
    translate: (keyPath: string, ...args: unknown[]) => any;
    contentStyle: import("vue").ComputedRef<CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:visible" | "update" | "ok" | "cancel" | "open" | "opened" | "closed")[], "close" | "update:visible" | "update" | "ok" | "cancel" | "open" | "opened" | "closed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: import("vue").PropType<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        default: string;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    noFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    noOkBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    noCancelBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    cancelAutoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    textAlign: {
        type: StringConstructor;
        default: string;
    };
    footerDirection: {
        type: StringConstructor;
        default: string;
    };
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
        type: import("vue").PropType<CSSProperties>;
    };
    customClass: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    customStyle: {
        type: import("vue").PropType<CSSProperties>;
        default: string;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onUpdate?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onOk?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    onOpened?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: CSSProperties;
    round: boolean;
    zIndex: string | number;
    visible: boolean;
    title: string;
    content: string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
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
    noFooter: boolean;
    noOkBtn: boolean;
    noCancelBtn: boolean;
    cancelText: string;
    okText: string;
    cancelAutoClose: boolean;
    textAlign: string;
    footerDirection: string;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinDialog: typeof _default;
  }
}