import type { PropType, ExtractPropTypes } from 'vue';
export declare const GRID_KEY: unique symbol;
export type GridDirection = 'horizontal' | 'vertical';
export declare const gridProps: {
    columnNum: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    iconSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    iconColor: {
        type: StringConstructor;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    gutter: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
    reverse: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: PropType<GridDirection>;
    };
    clickable: {
        type: BooleanConstructor;
        default: boolean;
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
export type GridProps = ExtractPropTypes<typeof gridProps>;
