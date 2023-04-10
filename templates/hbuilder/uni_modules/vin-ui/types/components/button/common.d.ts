import type { ExtractPropTypes, PropType } from 'vue';
export type ButtonType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';
export type ButtonShape = 'square' | 'round';
export declare const buttonProps: {
    type: {
        type: PropType<ButtonType>;
        default: string;
    };
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
    shape: {
        type: PropType<ButtonShape>;
        default: string;
    };
    color: StringConstructor;
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    iconFontClassName: {
        type: StringConstructor;
        default: string;
    };
    iconClassPrefix: {
        type: StringConstructor;
        default: string;
    };
    loading: {
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
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
