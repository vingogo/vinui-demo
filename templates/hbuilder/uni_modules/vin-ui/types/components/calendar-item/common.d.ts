import type { ExtractPropTypes } from 'vue';
export declare const calendarItemProps: {
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
};
export type CalendarItemProps = ExtractPropTypes<typeof calendarItemProps>;
