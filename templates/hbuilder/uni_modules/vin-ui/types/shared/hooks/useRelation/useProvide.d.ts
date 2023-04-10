import type { VNode, InjectionKey, VNodeNormalizedChildren, ComponentInternalInstance } from 'vue';
export declare function flattenVNodes(shouldTraverseChildren: VNodeNormalizedChildren, childName?: string): VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[];
export declare function sortChildren(parent: ComponentInternalInstance, internalChildren: ComponentInternalInstance[], childName?: string): void;
export declare function useProvide<ProvideValue>(key: InjectionKey<ProvideValue>, childName?: string): (value?: ProvideValue) => {
    internalChildren: ComponentInternalInstance[];
};
