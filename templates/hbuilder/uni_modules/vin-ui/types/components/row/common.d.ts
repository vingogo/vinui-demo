import type { ExtractPropTypes } from 'vue';
export declare const rowProps: {
    type: {
        type: StringConstructor;
        default: string;
    };
    gutter: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    justify: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
    wrap: {
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
export type RowProps = ExtractPropTypes<typeof rowProps>;
