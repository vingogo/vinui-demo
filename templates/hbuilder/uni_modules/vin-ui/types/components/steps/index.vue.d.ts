
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    direction: {
        type: StringConstructor;
        default: string;
    };
    current: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    progressDot: {
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click-step"[], "click-step", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    direction: {
        type: StringConstructor;
        default: string;
    };
    current: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    progressDot: {
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
}>> & {
    "onClick-step"?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    direction: string;
    current: string | number;
    progressDot: boolean;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinSteps: typeof _default;
  }
}