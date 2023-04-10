import type { ExtractPropTypes } from 'vue';
export declare const cellGroupProps: {
    title: {
        type: StringConstructor;
        default: string;
    };
    desc: {
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
export type CellGroupProps = ExtractPropTypes<typeof cellGroupProps>;
