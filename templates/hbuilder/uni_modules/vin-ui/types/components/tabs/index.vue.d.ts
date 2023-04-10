import { VNode, Ref } from 'vue';
export declare class Title {
    title: string;
    titleSlot?: VNode[];
    paneKey: string;
    disabled: boolean;
    constructor();
}

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("./common").TabsSize>;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    titleScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    ellipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    animatedTime: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    titleGutter: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    customClass: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    customStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: string;
    };
}, {
    tabChange: (item: Title, index: number) => void;
    titles: Ref<Title[]>;
    mainStyle: import("vue").ComputedRef<string>;
    mainClass: import("vue").ComputedRef<string>;
    contentStyle: import("vue").ComputedRef<{
        transform: string;
        transitionDuration: string;
    }>;
    tabsNavStyle: import("vue").ComputedRef<{
        background: string;
    }>;
    titleStyle: import("vue").ComputedRef<{
        marginLeft: string;
        marginRight: string;
    }>;
    tabsActiveStyle: import("vue").ComputedRef<{
        color: string;
        background: string;
    }>;
    componentName: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:modelValue" | "change")[], "click" | "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("./common").TabsSize>;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    titleScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    ellipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    animatedTime: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    titleGutter: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    customClass: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    customStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | Record<string, any>;
    customStyle: import("vue").CSSProperties;
    size: import("./common").TabsSize;
    color: string;
    type: string;
    modelValue: string | number;
    ellipsis: boolean;
    direction: string;
    background: string;
    titleScroll: boolean;
    animatedTime: string | number;
    titleGutter: string | number;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinTabs: typeof _default;
  }
}