import type { ExtractPropTypes } from 'vue';
export declare const badgeProps: {
    value: {
        type: (StringConstructor | NumberConstructor)[];
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    dot: {
        type: BooleanConstructor;
        default: boolean;
    };
    hidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    top: {
        type: StringConstructor;
        default: string;
    };
    right: {
        type: StringConstructor;
        default: string;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    color: {
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
export type BadgeProps = ExtractPropTypes<typeof badgeProps>;
