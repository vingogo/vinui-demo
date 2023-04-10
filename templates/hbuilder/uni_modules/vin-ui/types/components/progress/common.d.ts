import type { ExtractPropTypes } from 'vue';
export declare const progressProps: {
    percentage: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        required: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    status: {
        type: StringConstructor;
        default: string;
    };
    strokeWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    textInside: {
        type: BooleanConstructor;
        default: boolean;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    strokeColor: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        tyep: StringConstructor;
        default: string;
    };
    textBackground: {
        tyep: StringConstructor;
        default: string;
    };
    iconName: {
        type: StringConstructor;
        default: string;
    };
    iconColor: {
        type: StringConstructor;
        default: string;
    };
    isShowPercentage: {
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
export type ProgressProps = ExtractPropTypes<typeof progressProps>;
