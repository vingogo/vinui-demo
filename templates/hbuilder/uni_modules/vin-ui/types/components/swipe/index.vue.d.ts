export type SwipePosition = 'left' | 'right' | '';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    touchMoveStopPropagation: {
        type: BooleanConstructor;
        default: boolean;
    };
    touchMovePreventDefault: {
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
    leftRefId: string;
    rightRefId: string;
    refRandomId: string;
    open: (p?: SwipePosition) => void;
    close: () => void;
    onTouchStart(event: Event): void;
    onTouchMove(event: Event): Promise<void>;
    onTouchEnd(): void;
    mainClass: import("vue").ComputedRef<string>;
    mainStyle: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "open")[], "close" | "open", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    touchMoveStopPropagation: {
        type: BooleanConstructor;
        default: boolean;
    };
    touchMovePreventDefault: {
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
    onClose?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    name: string;
    disabled: boolean;
    touchMoveStopPropagation: boolean;
    touchMovePreventDefault: boolean;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinSwipe: typeof _default;
  }
}