import type { ExtractPropTypes, PropType } from 'vue';
export type TabsSize = 'large' | 'normal' | 'small';
export declare const tabsProps: {
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
        type: PropType<TabsSize>;
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
        type: PropType<import("vue").CSSProperties>;
        default: string;
    };
};
export type TabsProps = ExtractPropTypes<typeof tabsProps>;
export declare const TAB_KEY: unique symbol;
