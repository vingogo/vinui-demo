import { Ref } from 'vue';
import { CascaderPane, CascaderOption } from '../cascader/types';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
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
}, {
    handleNode(node: CascaderOption, silent?: boolean): Promise<void>;
    handleTabClick(tab: any): void;
    formatTabTitle(pane: CascaderPane): any;
    isSelected(pane: CascaderPane, node: CascaderOption): boolean;
    panes: Ref<CascaderPane[]>;
    initLoading: Ref<boolean>;
    tabsCursor: Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "pathChange")[], "update:modelValue" | "change" | "pathChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onPathChange?: ((...args: any[]) => any) | undefined;
}, {
    options: unknown[];
    visible: boolean;
    lazy: boolean;
    valueKey: string;
    textKey: string;
    childrenKey: string;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinCascaderItem: typeof _default;
  }
}