import { CSSProperties } from 'vue';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
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
        type: import("vue").PropType<CSSProperties>;
        default: () => {};
    };
    toastClass: StringConstructor;
    customClass: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    customStyle: {
        type: import("vue").PropType<CSSProperties>;
        default: string;
    };
}, {
    clickCover: () => void;
    hasIcon: import("vue").ComputedRef<boolean>;
    iconName: import("vue").ComputedRef<string | undefined>;
    mainClass: import("vue").ComputedRef<string>;
    mainStyle: import("vue").ComputedRef<string>;
    onAfterLeave: () => void;
    toastInnerStyle: import("vue").ComputedRef<CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "closed")[], "update:visible" | "closed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<CSSProperties>;
        default: () => {};
    };
    toastClass: StringConstructor;
    customClass: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    customStyle: {
        type: import("vue").PropType<CSSProperties>;
        default: string;
    };
}>> & {
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: CSSProperties;
    size: string | number;
    bgColor: string;
    type: string;
    visible: boolean;
    title: string;
    bottom: string;
    center: boolean;
    duration: number;
    closeOnClickOverlay: boolean;
    iconSize: string;
    cover: boolean;
    textAlignCenter: boolean;
    coverColor: string;
    loadingRotate: boolean;
    toastStyle: CSSProperties;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinToast: typeof _default;
  }
}