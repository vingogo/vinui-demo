import type { ExtractPropTypes } from 'vue';
export declare const tabbarItemProps: {
    tabTitle: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    href: {
        type: StringConstructor;
        default: string;
    };
    num: {
        type: StringConstructor;
        default: string;
    };
    activeImg: {
        type: StringConstructor;
        default: string;
    };
    img: {
        type: StringConstructor;
        default: string;
    };
    dot: {
        type: BooleanConstructor;
        default: boolean;
    };
    classPrefix: {
        type: StringConstructor;
        default: string;
    };
    fontClassName: {
        type: StringConstructor;
        default: string;
    };
    to: (ObjectConstructor | StringConstructor)[];
    customClass: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    customStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: string;
    };
};
export type TabbarItemProps = ExtractPropTypes<typeof tabbarItemProps>;
