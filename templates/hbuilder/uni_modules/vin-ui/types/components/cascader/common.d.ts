import type { ExtractPropTypes } from 'vue';
export declare const cascaderProps: {
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
};
export declare const cascaderItemProps: {
    visible: BooleanConstructor;
    modelValue: ArrayConstructor;
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
};
export type CascaderProps = ExtractPropTypes<typeof cascaderProps>;
