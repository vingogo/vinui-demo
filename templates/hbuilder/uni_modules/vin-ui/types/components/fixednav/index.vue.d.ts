
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    navList: {
        default: () => never[];
        type: import("vue").PropType<import("./common").navItem[]>;
    };
    activeText: {
        default: string;
        type: StringConstructor;
    };
    unActiveText: {
        default: string;
        type: StringConstructor;
    };
    position: {
        default: () => {
            top: string;
            bottom: string;
        };
        type: ObjectConstructor;
    };
    type: {
        default: string;
        type: StringConstructor;
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
    updateValue: (value?: boolean) => void;
    selected: (item: any, event: Event) => void;
    translate: (keyPath: string, ...args: unknown[]) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "selected")[], "update:visible" | "selected", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    navList: {
        default: () => never[];
        type: import("vue").PropType<import("./common").navItem[]>;
    };
    activeText: {
        default: string;
        type: StringConstructor;
    };
    unActiveText: {
        default: string;
        type: StringConstructor;
    };
    position: {
        default: () => {
            top: string;
            bottom: string;
        };
        type: ObjectConstructor;
    };
    type: {
        default: string;
        type: StringConstructor;
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
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onSelected?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    type: string;
    visible: boolean;
    overlay: boolean;
    position: Record<string, any>;
    navList: import("./common").navItem[];
    activeText: string;
    unActiveText: string;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinFixednav: typeof _default;
  }
}