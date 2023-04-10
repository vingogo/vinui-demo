import type { ExtractPropTypes } from 'vue';
export declare const noticebarProps: {
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
};
export type NoticebarProps = ExtractPropTypes<typeof noticebarProps>;
