import type { ExtractPropTypes, PropType } from 'vue';
import type { FileItem, SizeType, SourceType, AcceptType } from './type';
export declare const uploaderProps: {
    name: {
        type: StringConstructor;
        default: string;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    timeout: {
        type: NumberConstructor;
        default: number;
    };
    fileList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    isPreview: {
        type: BooleanConstructor;
        default: boolean;
    };
    listType: {
        type: StringConstructor;
        default: string;
    };
    isDeletable: {
        type: BooleanConstructor;
        default: boolean;
    };
    capture: {
        type: PropType<SourceType[]>;
        default: string[];
    };
    maximize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    maximum: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    accept: {
        type: PropType<AcceptType>;
        default: string;
    };
    headers: {
        type: ObjectConstructor;
        default: {};
    };
    data: {
        type: ObjectConstructor;
        default: {};
    };
    uploadIcon: {
        type: StringConstructor;
        default: string;
    };
    uploadIconSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    xhrState: {
        type: NumberConstructor;
        default: number;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeUpload: {
        type: FunctionConstructor;
        default: null;
    };
    beforeDelete: {
        type: FunctionConstructor;
        default: (file: FileItem, files: FileItem[]) => boolean;
    };
    onChange: {
        type: FunctionConstructor;
    };
    compressed: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxDuration: {
        type: NumberConstructor;
        default: number;
    };
    sizeType: {
        type: PropType<SizeType[]>;
        default: string[];
    };
    camera: {
        type: PropType<"back" | "front">;
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
export type UploaderProps = ExtractPropTypes<typeof uploaderProps>;
