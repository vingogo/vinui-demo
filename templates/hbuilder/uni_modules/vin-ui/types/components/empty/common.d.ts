import type { ExtractPropTypes } from 'vue';
type statusOptions = {
    [key: string]: string;
};
/**
 * 内置图片地址
 */
export declare const defaultStatus: statusOptions;
export declare const emptyProps: {
    image: {
        type: StringConstructor;
        default: string;
    };
    imageSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    description: {
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
export type EmptyProps = ExtractPropTypes<typeof emptyProps>;
export {};
