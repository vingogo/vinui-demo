
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
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
}, {
    lower: () => false | undefined;
    scroll: (e: CustomEvent) => void;
    touchStart: (event: TouchEvent) => void;
    touchMove: (event: TouchEvent) => void;
    touchEnd: () => void;
    getStyle: import("vue").ComputedRef<{
        height: string;
        transition: string;
    }>;
    translate: (keyPath: string, ...args: unknown[]) => any;
    scrollHeight: import("vue").Ref<number>;
    scrollTop: import("vue").Ref<number>;
    isInfiniting: import("vue").Ref<boolean>;
    direction: import("vue").Ref<string>;
    isTouching: import("vue").Ref<boolean>;
    refreshMaxH: import("vue").Ref<number>;
    y: import("vue").Ref<number>;
    x: import("vue").Ref<number>;
    distance: import("vue").Ref<number>;
    mainStyle: import("vue").ComputedRef<string>;
    mainClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("refresh" | "scroll-change" | "load-more")[], "refresh" | "scroll-change" | "load-more", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    onRefresh?: ((...args: any[]) => any) | undefined;
    "onScroll-change"?: ((...args: any[]) => any) | undefined;
    "onLoad-more"?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    hasMore: boolean;
    threshold: number;
    upperThreshold: number;
    pullIcon: string;
    pullText: string;
    loadIcon: string;
    loadText: string;
    loadMoreText: string;
    useWindow: boolean;
    containerId: string;
    useCapture: boolean;
    isOpenRefresh: boolean;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinInfiniteloading: typeof _default;
  }
}