
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    columnNum: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    iconSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    iconColor: {
        type: StringConstructor;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    gutter: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
    reverse: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: import("vue").PropType<import("./common").GridDirection>;
    };
    clickable: {
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
    columnNum: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    iconSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    iconColor: {
        type: StringConstructor;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    gutter: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
    reverse: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: import("vue").PropType<import("./common").GridDirection>;
    };
    clickable: {
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
    reverse: boolean;
    square: boolean;
    center: boolean;
    iconSize: string | number;
    gutter: string | number;
    columnNum: string | number;
    border: boolean;
    clickable: boolean;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinGrid: typeof _default;
  }
}