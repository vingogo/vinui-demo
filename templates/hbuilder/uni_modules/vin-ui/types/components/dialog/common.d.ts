import type { ExtractPropTypes, PropType, VNode } from 'vue';
export declare const dialogProps: {
    title: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: PropType<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        type: PropType<import("vue").CSSProperties>;
    };
    customClass: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    customStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: string;
    };
};
export type DialogProps = ExtractPropTypes<typeof dialogProps>;
