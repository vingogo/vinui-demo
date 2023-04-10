import type { ExtractPropTypes } from 'vue';
export declare const swipeProps: {
    name: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    touchMoveStopPropagation: {
        type: BooleanConstructor;
        default: boolean;
    };
    touchMovePreventDefault: {
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
export type SwipeProps = ExtractPropTypes<typeof swipeProps>;
