import type { ExtractPropTypes, PropType } from 'vue';
export declare const formItemProps: {
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    prop: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    labelAlign: {
        type: StringConstructor;
        default: string;
    };
    bodyAlign: {
        type: StringConstructor;
        default: string;
    };
    rules: {
        type: PropType<import("./types").FormItemRule[]>;
        default: () => never[];
    };
    showErrorMessage: {
        type: BooleanConstructor;
        default: boolean;
    };
    showErrorLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    errorMessageAlign: {
        type: StringConstructor;
        default: string;
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
export type FormItemProps = ExtractPropTypes<typeof formItemProps>;
