import { Ref } from 'vue';
import { CascaderValue, CascaderOption } from './types';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: ArrayConstructor;
    visible: BooleanConstructor;
    options: {
        type: ArrayConstructor;
        default: () => never[];
    };
    lazy: BooleanConstructor;
    lazyLoad: FunctionConstructor;
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    textKey: {
        type: StringConstructor;
        default: string;
    };
    childrenKey: {
        type: StringConstructor;
        default: string;
    };
    convertConfig: ObjectConstructor;
    title: StringConstructor;
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
    onChange: (value: CascaderValue, pathNodes: CascaderOption[]) => void;
    onPathChange: (pathNodes: CascaderOption[]) => void;
    innerValue: Ref<CascaderValue>;
    innerVisible: import("vue").WritableComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "update:modelValue" | "change" | "pathChange")[], "update:visible" | "update:modelValue" | "change" | "pathChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: ArrayConstructor;
    visible: BooleanConstructor;
    options: {
        type: ArrayConstructor;
        default: () => never[];
    };
    lazy: BooleanConstructor;
    lazyLoad: FunctionConstructor;
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    textKey: {
        type: StringConstructor;
        default: string;
    };
    childrenKey: {
        type: StringConstructor;
        default: string;
    };
    convertConfig: ObjectConstructor;
    title: StringConstructor;
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
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onPathChange?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    options: unknown[];
    round: boolean;
    zIndex: string | number;
    visible: boolean;
    lazy: boolean;
    valueKey: string;
    textKey: string;
    childrenKey: string;
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
    VinCascader: typeof _default;
  }
}