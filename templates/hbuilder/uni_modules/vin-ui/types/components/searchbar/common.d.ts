import type { ExtractPropTypes } from 'vue';
export declare const searchbarProps: {
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    maxLength: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    inputType: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    inputBackground: {
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
export type SearchbarProps = ExtractPropTypes<typeof searchbarProps>;
