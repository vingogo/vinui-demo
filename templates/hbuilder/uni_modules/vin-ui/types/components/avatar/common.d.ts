import type { ExtractPropTypes } from 'vue';
export declare const AVATAR_KEY: unique symbol;
export declare const avatarProps: {
    size: {
        type: StringConstructor;
        default: string;
    };
    shape: {
        type: StringConstructor;
        default: string;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    alt: {
        type: StringConstructor;
        default: string;
    };
    icon: {
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
export type AvatarProps = ExtractPropTypes<typeof avatarProps>;
