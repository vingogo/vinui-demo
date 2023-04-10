
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    percentage: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        required: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    status: {
        type: StringConstructor;
        default: string;
    };
    strokeWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    textInside: {
        type: BooleanConstructor;
        default: boolean;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    strokeColor: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        tyep: StringConstructor;
        default: string;
    };
    textBackground: {
        tyep: StringConstructor;
        default: string;
    };
    iconName: {
        type: StringConstructor;
        default: string;
    };
    iconColor: {
        type: StringConstructor;
        default: string;
    };
    isShowPercentage: {
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
    height: import("vue").Ref<string>;
    bgStyle: import("vue").ComputedRef<{
        width: string;
        background: string;
    }>;
    textStyle: import("vue").ComputedRef<{
        color: string;
    }>;
    progressOuter: import("vue").Ref<any>;
    insideText: import("vue").Ref<any>;
    randRef: import("vue").Ref<string>;
    slotDefault: boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    percentage: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        required: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    status: {
        type: StringConstructor;
        default: string;
    };
    strokeWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    textInside: {
        type: BooleanConstructor;
        default: boolean;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    strokeColor: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        tyep: StringConstructor;
        default: string;
    };
    textBackground: {
        tyep: StringConstructor;
        default: string;
    };
    iconName: {
        type: StringConstructor;
        default: string;
    };
    iconColor: {
        type: StringConstructor;
        default: string;
    };
    isShowPercentage: {
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
    size: string;
    iconName: string;
    iconColor: string;
    percentage: string | number;
    status: string;
    strokeWidth: string | number;
    textInside: boolean;
    showText: boolean;
    strokeColor: string;
    textColor: string;
    textBackground: string;
    isShowPercentage: boolean;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinProgress: typeof _default;
  }
}