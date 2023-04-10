import type { ExtractPropTypes } from 'vue';
export declare const backtopProps: {
    height: {
        type: StringConstructor;
        default: string;
    };
    bottom: {
        type: NumberConstructor;
        default: number;
    };
    right: {
        type: NumberConstructor;
        default: number;
    };
    distance: {
        type: NumberConstructor;
        default: number;
    };
    zIndex: {
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
export type BacktopProps = ExtractPropTypes<typeof backtopProps>;
