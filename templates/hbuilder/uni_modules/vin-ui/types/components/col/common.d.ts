import type { ExtractPropTypes } from 'vue';
export declare const colProps: {
    span: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    offset: {
        type: (StringConstructor | NumberConstructor)[];
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
export type ColProps = ExtractPropTypes<typeof colProps>;
