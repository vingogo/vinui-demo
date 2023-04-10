
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
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
}, {
    classes: import("vue").ComputedRef<string>;
    avatarGroupRef: import("vue").Ref<null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>>, {
    size: string;
    shape: string;
    maxContent: string;
    maxCount: string | number;
    maxBgColor: string;
    maxColor: string;
    span: string;
    zIndex: string;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinAvatarGroup: typeof _default;
  }
}