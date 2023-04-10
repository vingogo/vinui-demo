/// <reference types="@dcloudio/types" />
/// <reference types="@dcloudio/types" />
import type { SizeType, SourceType, AcceptType, FileType } from './type';
export type ChooseFile = {
    url: string;
    size: number;
    name: string;
    type: FileType;
    thumb?: string;
    [k: string]: unknown;
};
export type ChooseFileOptions = {
    accept: AcceptType;
    multiple: boolean;
    capture: SourceType[];
    compressed: boolean;
    maxDuration: number;
    sizeType: SizeType[];
    camera?: 'back' | 'front';
    maxCount: number;
};
export declare const chooseFile: ({ accept, multiple, capture, compressed, maxDuration, sizeType, camera, maxCount, }: ChooseFileOptions) => Promise<ChooseFile[]>;
export type OnProgressUpdateResult = UniApp.OnProgressUpdateResult;
export type UploadFileSuccessCallbackResult = UniApp.UploadFileSuccessCallbackResult;
export type GeneralCallbackResult = UniApp.GeneralCallbackResult;
export type UploadOptions = UniNamespace.UploadFileOption & {
    xhrState?: number;
    onStart?: Function;
    onProgress?: Function;
    onSuccess?: Function;
    onFailure?: Function;
};
export declare const createUploader: (options: UploadOptions) => {
    upload: () => void;
};
