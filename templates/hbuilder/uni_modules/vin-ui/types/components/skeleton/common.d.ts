import type { ExtractPropTypes, PropType } from 'vue';
export type avatarShapeType = 'round' | 'square';
export declare const skeletonProps: {
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    animated: {
        type: BooleanConstructor;
        default: boolean;
    };
    avatar: {
        type: BooleanConstructor;
        default: boolean;
    };
    avatarShape: {
        type: PropType<avatarShapeType>;
        default: string;
    };
    avatarSize: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    row: {
        type: StringConstructor;
        default: string;
    };
    title: {
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
export type SkeletonProps = ExtractPropTypes<typeof skeletonProps>;
