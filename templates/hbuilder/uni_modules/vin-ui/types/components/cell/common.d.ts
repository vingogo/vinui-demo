import type { ExtractPropTypes } from 'vue';
export declare const cellProps: {
    title: {
        type: StringConstructor;
        default: string;
    };
    subTitle: {
        type: StringConstructor;
        default: string;
    };
    desc: {
        type: StringConstructor;
        default: string;
    };
    descTextAlign: {
        type: StringConstructor;
        default: string;
    };
    isLink: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    roundRadius: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    to: {
        type: StringConstructor;
        default: string;
    };
    replace: {
        type: BooleanConstructor;
        default: boolean;
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
export type CellProps = ExtractPropTypes<typeof cellProps>;
