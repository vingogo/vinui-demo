import type { ExtractPropTypes } from 'vue';
export declare const AVATAR_KEY: unique symbol;
export declare const avatarGroupProps: {
    maxContent: {
        type: StringConstructor;
        default: string;
    };
    maxCount: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    shape: {
        type: StringConstructor;
        default: string;
    };
    maxBgColor: {
        type: StringConstructor;
        default: string;
    };
    maxColor: {
        type: StringConstructor;
        default: string;
    };
    span: {
        type: StringConstructor;
        default: string;
    };
    zIndex: {
        type: StringConstructor;
        default: string;
    };
};
export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>;
