import type { ExtractPropTypes } from 'vue';
export declare const notifyProps: {
    id: StringConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    message: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: StringConstructor;
        default: string;
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
export type NotifyProps = ExtractPropTypes<typeof notifyProps>;
