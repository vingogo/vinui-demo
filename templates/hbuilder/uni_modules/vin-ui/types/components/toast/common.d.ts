import type { CSSProperties, ExtractPropTypes, PropType } from 'vue';
export declare const toastProps: {
    id: StringConstructor;
    msg: StringConstructor;
    duration: {
        type: NumberConstructor;
        default: number;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    bottom: {
        type: StringConstructor;
        default: string;
    };
    textAlignCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    icon: StringConstructor;
    iconSize: {
        type: StringConstructor;
        default: string;
    };
    cover: {
        type: BooleanConstructor;
        default: boolean;
    };
    coverColor: {
        type: StringConstructor;
        default: string;
    };
    loadingRotate: {
        type: BooleanConstructor;
        default: boolean;
    };
    onClose: FunctionConstructor;
    unmount: FunctionConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    toastStyle: {
        type: PropType<CSSProperties>;
        default: () => {};
    };
    toastClass: StringConstructor;
    customClass: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    customStyle: {
        type: PropType<CSSProperties>;
        default: string;
    };
};
export type ToastProps = ExtractPropTypes<typeof toastProps>;
