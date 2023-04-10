
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    contentPosition: {
        type: StringConstructor;
        default: string;
    };
    dashed: {
        type: BooleanConstructor;
        default: boolean;
    };
    hairline: {
        type: BooleanConstructor;
        default: boolean;
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
    mainClass: import("vue").ComputedRef<string>;
    mainStyle: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    contentPosition: {
        type: StringConstructor;
        default: string;
    };
    dashed: {
        type: BooleanConstructor;
        default: boolean;
    };
    hairline: {
        type: BooleanConstructor;
        default: boolean;
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
    contentPosition: string;
    dashed: boolean;
    hairline: boolean;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinDivider: typeof _default;
  }
}