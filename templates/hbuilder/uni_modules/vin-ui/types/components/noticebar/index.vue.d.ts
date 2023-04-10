
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    direction: {
        type: StringConstructor;
        default: string;
    };
    list: {
        type: ArrayConstructor;
        default: () => never[];
    };
    standTime: {
        type: NumberConstructor;
        default: number;
    };
    complexAm: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    closeMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapable: {
        type: BooleanConstructor;
        default: boolean;
    };
    leftIcon: {
        type: StringConstructor;
        default: string;
    };
    rightIcon: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    delay: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    scrollable: {
        type: BooleanConstructor;
        default: null;
    };
    speed: {
        type: NumberConstructor;
        default: number;
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
    isEllipsis: import("vue").ComputedRef<boolean>;
    mainClass: import("vue").ComputedRef<string>;
    mainStyle: import("vue").ComputedRef<string>;
    iconShow: import("vue").ComputedRef<boolean>;
    barStyle: import("vue").ComputedRef<{
        [props: string]: any;
    }>;
    contentStyle: import("vue").ComputedRef<{
        animationDelay: string;
        animationDuration: string;
        transform: string;
    }>;
    iconBg: import("vue").ComputedRef<string>;
    horseLampStyle: import("vue").ComputedRef<{}>;
    wrap: import("vue").Ref<HTMLElement | null>;
    content: import("vue").Ref<HTMLElement | null>;
    handleClick: (event: Event) => void;
    onClickIcon: (event: Event) => void;
    onAnimationEnd: () => void;
    go: (item: any) => void;
    handleClickIcon: () => void;
    slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    wrapWidth: import("vue").Ref<number>;
    firstRound: import("vue").Ref<boolean>;
    duration: import("vue").Ref<number>;
    offsetWidth: import("vue").Ref<number>;
    showNoticeBar: import("vue").Ref<boolean>;
    animationClass: import("vue").Ref<string>;
    animate: import("vue").Ref<boolean>;
    scrollList: import("vue").Ref<never[]>;
    distance: import("vue").Ref<number>;
    timer: import("vue").Ref<null>;
    keepAlive: import("vue").Ref<boolean>;
    isCanScroll: import("vue").Ref<boolean>;
    id: import("vue").Ref<number>;
    customClass: import("vue").Ref<string | unknown[]>;
    customStyle: import("vue").Ref<import("vue").CSSProperties>;
    color: import("vue").Ref<string>;
    text: import("vue").Ref<string>;
    height: import("vue").Ref<number>;
    direction: import("vue").Ref<string>;
    leftIcon: import("vue").Ref<string>;
    rightIcon: import("vue").Ref<string>;
    list: import("vue").Ref<unknown[]>;
    standTime: import("vue").Ref<number>;
    complexAm: import("vue").Ref<boolean>;
    closeMode: import("vue").Ref<boolean>;
    wrapable: import("vue").Ref<boolean>;
    background: import("vue").Ref<string>;
    delay: import("vue").Ref<string | number>;
    scrollable: import("vue").Ref<boolean>;
    speed: import("vue").Ref<number>;
    onClick: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onClose: import("vue").Ref<((...args: any[]) => any) | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "close")[], "click" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    direction: {
        type: StringConstructor;
        default: string;
    };
    list: {
        type: ArrayConstructor;
        default: () => never[];
    };
    standTime: {
        type: NumberConstructor;
        default: number;
    };
    complexAm: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    closeMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapable: {
        type: BooleanConstructor;
        default: boolean;
    };
    leftIcon: {
        type: StringConstructor;
        default: string;
    };
    rightIcon: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    delay: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    scrollable: {
        type: BooleanConstructor;
        default: null;
    };
    speed: {
        type: NumberConstructor;
        default: number;
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
    onClick?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    color: string;
    text: string;
    height: number;
    direction: string;
    leftIcon: string;
    rightIcon: string;
    list: unknown[];
    standTime: number;
    complexAm: boolean;
    closeMode: boolean;
    wrapable: boolean;
    background: string;
    delay: string | number;
    scrollable: boolean;
    speed: number;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinNoticebar: typeof _default;
  }
}