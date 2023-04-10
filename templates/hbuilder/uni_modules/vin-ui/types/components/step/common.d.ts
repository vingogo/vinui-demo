import type { ExtractPropTypes } from 'vue';
export declare const stepProps: {
    title: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: null;
    };
    iconColor: {
        type: StringConstructor;
        default: string;
    };
    size: {
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
export type StepProps = ExtractPropTypes<typeof stepProps>;
