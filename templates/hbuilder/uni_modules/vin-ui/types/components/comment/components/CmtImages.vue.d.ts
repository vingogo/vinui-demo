import type { PropType } from 'vue';
interface VideosType {
    id: number | string;
    mainUrl: string;
    videoUrl: string;
}
interface ImagesType {
    smallImgUrl: string;
    bigImgUrl: string;
    imgUrl: string;
}
declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    videos: {
        type: PropType<VideosType[]>;
        default: () => never[];
    };
    images: {
        type: PropType<ImagesType[]>;
        default: () => never[];
    };
}, {
    isShowImage: import("vue").Ref<boolean>;
    initIndex: import("vue").Ref<number>;
    showImages: (type: string, index: string | number) => void;
    totalImages: import("vue").Ref<any[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "clickImages")[], "click" | "clickImages", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    videos: {
        type: PropType<VideosType[]>;
        default: () => never[];
    };
    images: {
        type: PropType<ImagesType[]>;
        default: () => never[];
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onClickImages?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    videos: VideosType[];
    images: ImagesType[];
}>;
export default _default;
