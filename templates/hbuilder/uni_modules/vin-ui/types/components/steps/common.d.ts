import type { ExtractPropTypes } from 'vue';
export declare const stepsProps: {
    direction: {
        type: StringConstructor;
        default: string;
    };
    current: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    progressDot: {
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
export type StepsProps = ExtractPropTypes<typeof stepsProps>;
