declare const _default: import("vue").DefineComponent<{
    headerType: {
        type: StringConstructor;
        default: string;
    };
    imagesRows: {
        type: StringConstructor;
        default: string;
    };
    ellipsis: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    videos: {
        type: ArrayConstructor;
        default: () => never[];
    };
    images: {
        type: ArrayConstructor;
        default: () => never[];
    };
    info: {
        type: ObjectConstructor;
        default: () => {};
    };
    follow: {
        type: ObjectConstructor;
        default: () => {};
    };
    labels: {
        type: FunctionConstructor;
        default: () => string;
    };
    operation: {
        type: ArrayConstructor;
        default: string[];
    };
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    conEllipsis: import("vue").ComputedRef<string | number | true>;
    clickOperate: (t: string) => void;
    handleClick: () => void;
    clickImages: (value: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "clickImages" | "clickOperate")[], "click" | "clickImages" | "clickOperate", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    headerType: {
        type: StringConstructor;
        default: string;
    };
    imagesRows: {
        type: StringConstructor;
        default: string;
    };
    ellipsis: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    videos: {
        type: ArrayConstructor;
        default: () => never[];
    };
    images: {
        type: ArrayConstructor;
        default: () => never[];
    };
    info: {
        type: ObjectConstructor;
        default: () => {};
    };
    follow: {
        type: ObjectConstructor;
        default: () => {};
    };
    labels: {
        type: FunctionConstructor;
        default: () => string;
    };
    operation: {
        type: ArrayConstructor;
        default: string[];
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onClickImages?: ((...args: any[]) => any) | undefined;
    onClickOperate?: ((...args: any[]) => any) | undefined;
}, {
    info: Record<string, any>;
    headerType: string;
    imagesRows: string;
    ellipsis: string | number | boolean;
    videos: unknown[];
    images: unknown[];
    follow: Record<string, any>;
    labels: Function;
    operation: unknown[];
}>;
export default _default;
