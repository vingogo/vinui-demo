import { CSSProperties } from 'vue';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    text: {
        type: StringConstructor;
    };
    icon: {
        type: StringConstructor;
    };
    iconSize: {
        type: (StringConstructor | NumberConstructor)[];
    };
    iconColor: {
        type: StringConstructor;
    };
    to: {
        type: import("vue").PropType<string | import("../../shared/hooks/useRouter").RouterOptions>;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    replace: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    customStyle: {
        type: import("vue").PropType<CSSProperties>;
        default: string;
    };
}, {
    mainClass?: undefined;
    mainStyle?: undefined;
    contentClass?: undefined;
    iconProps?: undefined;
    handleClick?: undefined;
} | {
    mainClass: import("vue").ComputedRef<string>;
    mainStyle: import("vue").ComputedRef<string>;
    contentClass: import("vue").ComputedRef<{
        [x: string]: string | number | boolean;
    }>;
    iconProps: import("vue").ComputedRef<{
        name: string | undefined;
        size: string | number;
        color: string;
    }>;
    handleClick: (event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
    };
    icon: {
        type: StringConstructor;
    };
    iconSize: {
        type: (StringConstructor | NumberConstructor)[];
    };
    iconColor: {
        type: StringConstructor;
    };
    to: {
        type: import("vue").PropType<string | import("../../shared/hooks/useRouter").RouterOptions>;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    replace: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    customStyle: {
        type: import("vue").PropType<CSSProperties>;
        default: string;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: CSSProperties;
    url: string;
    replace: boolean;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinGridItem: typeof _default;
  }
}