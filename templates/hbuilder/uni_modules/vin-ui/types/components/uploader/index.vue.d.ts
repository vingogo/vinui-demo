import type { FileItem } from './type';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
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
        type: import("vue").PropType<import("./type").SourceType[]>;
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
        type: import("vue").PropType<import("./type").AcceptType>;
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
        type: import("vue").PropType<import("./type").SizeType[]>;
        default: string[];
    };
    camera: {
        type: import("vue").PropType<"back" | "front">;
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
}, {
    mainStyle: import("vue").ComputedRef<string>;
    onChange: (event: InputEvent) => void;
    onDelete: (file: FileItem, index: number) => void;
    fileList: FileItem[];
    mainClass: import("vue").ComputedRef<string>;
    fileItemClick: (fileItem: FileItem) => void;
    clearUploadQueue: (index?: number) => void;
    submit: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("progress" | "success" | "start" | "change" | "failure" | "oversize" | "delete" | "update:fileList" | "file-item-click")[], "progress" | "success" | "start" | "change" | "failure" | "oversize" | "delete" | "update:fileList" | "file-item-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<import("./type").SourceType[]>;
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
        type: import("vue").PropType<import("./type").AcceptType>;
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
        type: import("vue").PropType<import("./type").SizeType[]>;
        default: string[];
    };
    camera: {
        type: import("vue").PropType<"back" | "front">;
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
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onProgress?: ((...args: any[]) => any) | undefined;
    onStart?: ((...args: any[]) => any) | undefined;
    onSuccess?: ((...args: any[]) => any) | undefined;
    onFailure?: ((...args: any[]) => any) | undefined;
    onOversize?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
    "onUpdate:fileList"?: ((...args: any[]) => any) | undefined;
    "onFile-item-click"?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    name: string;
    url: string;
    data: Record<string, any>;
    disabled: boolean;
    maximum: string | number;
    multiple: boolean;
    compressed: boolean;
    camera: "back" | "front";
    timeout: number;
    fileList: unknown[];
    isPreview: boolean;
    listType: string;
    isDeletable: boolean;
    capture: import("./type").SourceType[];
    maximize: string | number;
    accept: import("./type").AcceptType;
    headers: Record<string, any>;
    uploadIcon: string;
    uploadIconSize: string | number;
    xhrState: number;
    autoUpload: boolean;
    beforeUpload: Function;
    beforeDelete: Function;
    maxDuration: number;
    sizeType: import("./type").SizeType[];
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinUploader: typeof _default;
  }
}