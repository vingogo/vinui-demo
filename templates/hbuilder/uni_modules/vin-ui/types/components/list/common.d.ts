import type { ExtractPropTypes } from 'vue';
export declare const listProps: {
    height: {
        type: NumberConstructor[];
        default: number;
    };
    listData: {
        type: ArrayConstructor;
        default: () => never[];
    };
    containerHeight: {
        type: NumberConstructor;
        default: number;
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
export type ListProps = ExtractPropTypes<typeof listProps>;
