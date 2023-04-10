import type { ExtractPropTypes } from 'vue';
export declare const infiniteLoadingProps: {
    hasMore: {
        type: BooleanConstructor;
        default: boolean;
    };
    threshold: {
        type: NumberConstructor;
        default: number;
    };
    upperThreshold: {
        type: NumberConstructor;
        default: number;
    };
    pullIcon: {
        type: StringConstructor;
        default: string;
    };
    pullText: {
        type: StringConstructor;
        default: string;
    };
    loadIcon: {
        type: StringConstructor;
        default: string;
    };
    loadText: {
        type: StringConstructor;
        default: string;
    };
    loadMoreText: {
        type: StringConstructor;
        default: string;
    };
    useWindow: {
        type: BooleanConstructor;
        default: boolean;
    };
    containerId: {
        type: StringConstructor;
        default: string;
    };
    useCapture: {
        type: BooleanConstructor;
        default: boolean;
    };
    isOpenRefresh: {
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
export type InfiniteLoadingProps = ExtractPropTypes<typeof infiniteLoadingProps>;
