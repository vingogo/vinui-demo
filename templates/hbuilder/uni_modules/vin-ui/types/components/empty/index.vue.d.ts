
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
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
}, {
    imageUrl: string;
    imgStyle: import("vue").ComputedRef<string>;
    translate: (keyPath: string, ...args: unknown[]) => any;
    mainClass: import("vue").ComputedRef<string>;
    mainStyle: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>>, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    image: string;
    imageSize: string | number;
    description: string;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinEmpty: typeof _default;
  }
}