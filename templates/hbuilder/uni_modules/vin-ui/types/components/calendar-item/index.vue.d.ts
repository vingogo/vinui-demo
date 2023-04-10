type InputDate = string | string[];
interface Day {
    day: string | number;
    type: string;
}
interface MonthInfo {
    curData: string[] | string;
    title: string;
    monthData: Day[];
    cssHeight?: Number;
    cssScrollHeight?: Number;
}

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
        default: null;
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
    translate: (keyPath: string, ...args: unknown[]) => any;
    type: import("vue").Ref<string>;
    title: import("vue").Ref<string>;
    isAutoBackFill: import("vue").Ref<boolean>;
    poppable: import("vue").Ref<boolean>;
    showTitle: import("vue").Ref<boolean>;
    showSubTitle: import("vue").Ref<boolean>;
    showToday: import("vue").Ref<boolean>;
    confirmText: import("vue").Ref<string>;
    startText: import("vue").Ref<string>;
    endText: import("vue").Ref<string>;
    defaultValue: import("vue").Ref<string | unknown[]>;
    startDate: import("vue").Ref<string>;
    endDate: import("vue").Ref<string>;
    onSelect: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onChoose: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onClose: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onUpdate: import("vue").Ref<((...args: any[]) => any) | undefined>;
    yearMonthTitle: import("vue").Ref<string>;
    containerHeight: import("vue").Ref<string>;
    currDate: import("vue").Ref<any>;
    propStartDate: import("vue").Ref<string>;
    propEndDate: import("vue").Ref<string>;
    currentIndex: import("vue").Ref<number>;
    unLoadPrev: import("vue").Ref<boolean>;
    touchParams: import("vue").Ref<any>;
    transformY: import("vue").Ref<number>;
    translateY: import("vue").Ref<number>;
    scrollDistance: import("vue").Ref<number>;
    defaultData: import("vue").Ref<InputDate>;
    chooseData: import("vue").Ref<any>;
    monthsData: import("vue").Ref<any[]>;
    dayPrefix: import("vue").Ref<string>;
    startData: import("vue").Ref<InputDate>;
    endData: import("vue").Ref<InputDate>;
    isRange: import("vue").Ref<boolean>;
    timer: import("vue").Ref<number>;
    avgHeight: import("vue").Ref<number>;
    monthsNum: import("vue").Ref<number>;
    defaultRange: import("vue").Ref<any[]>;
    scrollTop: import("vue").Ref<number>;
    compConthsDatas: import("vue").Ref<any[]>;
    weeks: any;
    showTopBtn: import("vue").ComputedRef<import("vue").Slot | undefined>;
    topInfo: import("vue").ComputedRef<import("vue").Slot | undefined>;
    bottomInfo: import("vue").ComputedRef<import("vue").Slot | undefined>;
    rangeTip: (day: Day, month: MonthInfo) => boolean | undefined;
    mothsViewScroll: (e: any) => void;
    getClass: (day: Day, month: MonthInfo) => string | null;
    isStartTip: (day: Day, month: MonthInfo) => boolean;
    isEndTip: (day: Day, month: MonthInfo) => boolean;
    chooseDay: (day: Day, month: MonthInfo, isFirst?: boolean) => void;
    isCurrDay: (dateInfo: any) => boolean;
    confirm: () => void;
    months: import("vue").Ref<HTMLElement | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "choose" | "close" | "update")[], "select" | "choose" | "close" | "update", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        default: null;
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
    onUpdate?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    title: string;
    isAutoBackFill: boolean;
    poppable: boolean;
    showTitle: boolean;
    showSubTitle: boolean;
    showToday: boolean;
    confirmText: string;
    startText: string;
    endText: string;
    defaultValue: string | unknown[];
    startDate: string;
    endDate: string;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinCalendarItem: typeof _default;
  }
}