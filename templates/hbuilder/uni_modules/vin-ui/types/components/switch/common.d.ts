import type { ExtractPropTypes } from 'vue';
export declare const switchProps: {
    modelValue: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    disable: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    inactiveColor: {
        type: StringConstructor;
        default: string;
    };
    activeText: {
        type: StringConstructor;
        default: string;
    };
    inactiveText: {
        type: StringConstructor;
        default: string;
    };
    activeValue: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    inactiveValue: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
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
export type SwitchProps = ExtractPropTypes<typeof switchProps>;
