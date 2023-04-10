import { Ref } from 'vue';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    height: {
        type: NumberConstructor[];
        default: number;
    };
    listData: {
        type: ArrayConstructor;
        default: () => never[];
    };
    containerHeight: {
        type: NumberConstructor;
        default: number;
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
    list: Ref<any>;
    getTransform: import("vue").ComputedRef<string>;
    listHeight: import("vue").ComputedRef<number>;
    visibleData: import("vue").ComputedRef<unknown[]>;
    mainClass: import("vue").ComputedRef<string>;
    mainStyle: import("vue").ComputedRef<string>;
    handleScrollEvent: (e: any) => Promise<void>;
    startOffset: Ref<number>;
    start: Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "scroll"[], "scroll", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: NumberConstructor[];
        default: number;
    };
    listData: {
        type: ArrayConstructor;
        default: () => never[];
    };
    containerHeight: {
        type: NumberConstructor;
        default: number;
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
    onScroll?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    height: number;
    containerHeight: number;
    listData: unknown[];
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinList: typeof _default;
  }
}