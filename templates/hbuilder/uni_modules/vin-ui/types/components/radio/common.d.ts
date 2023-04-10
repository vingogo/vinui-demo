import type { ExtractPropTypes } from 'vue';
export declare const radioProps: {
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    iconSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    iconName: {
        type: StringConstructor;
        default: string;
    };
    iconActiveName: {
        type: StringConstructor;
        default: string;
    };
    iconClassPrefix: {
        type: StringConstructor;
        default: string;
    };
    iconFontClassName: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    shape: {
        type: StringConstructor;
        default: string;
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
export type RadioProps = ExtractPropTypes<typeof radioProps>;
