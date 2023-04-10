
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    value: {
        type: (StringConstructor | NumberConstructor)[];
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    dot: {
        type: BooleanConstructor;
        default: boolean;
    };
    hidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    top: {
        type: StringConstructor;
        default: string;
    };
    right: {
        type: StringConstructor;
        default: string;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    color: {
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
    mainStyle: import("vue").ComputedRef<string>;
    content: import("vue").ComputedRef<string | number | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: (StringConstructor | NumberConstructor)[];
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    dot: {
        type: BooleanConstructor;
        default: boolean;
    };
    hidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    top: {
        type: StringConstructor;
        default: string;
    };
    right: {
        type: StringConstructor;
        default: string;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    color: {
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
    color: string;
    zIndex: number;
    right: string;
    top: string;
    max: number;
    dot: boolean;
    hidden: boolean;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinBadge: typeof _default;
  }
}