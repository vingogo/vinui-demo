import type { ExtractPropTypes, PropType } from 'vue';
export type TagType = 'primary' | 'success' | 'danger' | 'warning';
export declare const tagProps: {
    color: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<TagType>;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    mark: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeable: {
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
export type TagProps = ExtractPropTypes<typeof tagProps>;
