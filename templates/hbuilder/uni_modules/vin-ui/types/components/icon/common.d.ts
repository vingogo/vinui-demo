import type { ExtractPropTypes, PropType } from 'vue';
export declare const iconProps: {
    name: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    fontClassName: {
        type: StringConstructor;
        default: string;
    };
    classPrefix: {
        type: StringConstructor;
        default: string;
    };
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    customClass: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    customStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: string;
    };
};
export type IconProps = ExtractPropTypes<typeof iconProps>;
