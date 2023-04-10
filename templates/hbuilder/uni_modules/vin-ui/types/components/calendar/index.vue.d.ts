
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    isAutoBackFill: {
        type: BooleanConstructor;
        default: boolean;
    };
    poppable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSubTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    showToday: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    startText: {
        type: StringConstructor;
        default: string;
    };
    endText: {
        type: StringConstructor;
        default: string;
    };
    defaultValue: {
        type: (ArrayConstructor | StringConstructor)[];
    };
    startDate: {
        type: StringConstructor;
        default: string;
    };
    endDate: {
        type: StringConstructor;
        default: string;
    };
}, {
    show: import("vue").Ref<boolean>;
    closePopup: () => void;
    update: () => void;
    close: () => void;
    select: (param: string) => void;
    choose: (param: string) => void;
    calendarRef: import("vue").Ref<HTMLElement | null>;
    showTopBtn: import("vue").ComputedRef<import("vue").Slot | undefined>;
    topInfo: import("vue").ComputedRef<import("vue").Slot | undefined>;
    dayInfo: import("vue").ComputedRef<import("vue").Slot | undefined>;
    bottomInfo: import("vue").ComputedRef<import("vue").Slot | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "choose" | "close" | "update:visible")[], "select" | "choose" | "close" | "update:visible", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    isAutoBackFill: {
        type: BooleanConstructor;
        default: boolean;
    };
    poppable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSubTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    showToday: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    startText: {
        type: StringConstructor;
        default: string;
    };
    endText: {
        type: StringConstructor;
        default: string;
    };
    defaultValue: {
        type: (ArrayConstructor | StringConstructor)[];
    };
    startDate: {
        type: StringConstructor;
        default: string;
    };
    endDate: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    onChoose?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    visible: boolean;
    title: string;
    isAutoBackFill: boolean;
    poppable: boolean;
    showTitle: boolean;
    showSubTitle: boolean;
    showToday: boolean;
    confirmText: string;
    startText: string;
    endText: string;
    startDate: string;
    endDate: string;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinCalendar: typeof _default;
  }
}