import type { ExtractPropTypes } from 'vue';
export declare const navbarProps: {
    leftShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    titIcon: {
        type: StringConstructor;
        default: string;
    };
    desc: {
        type: StringConstructor;
        default: string;
    };
    fixed: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetTop: {
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
export type NavbarProps = ExtractPropTypes<typeof navbarProps>;
