import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    info: {
        type: ObjectConstructor;
        default: () => {};
    };
    operation: {
        type: PropType<string[]>;
        default: string[];
    };
}, {
    showPopver: import("vue").Ref<boolean>;
    operate: (type: string) => void;
    mergeOp: import("vue").Ref<never[]>;
    handleClick: () => void;
    translate: (keyPath: string, ...args: unknown[]) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("handleClick" | "clickOperate")[], "handleClick" | "clickOperate", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    info: {
        type: ObjectConstructor;
        default: () => {};
    };
    operation: {
        type: PropType<string[]>;
        default: string[];
    };
}>> & {
    onClickOperate?: ((...args: any[]) => any) | undefined;
    onHandleClick?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    info: Record<string, any>;
    operation: string[];
}>;
export default _default;
