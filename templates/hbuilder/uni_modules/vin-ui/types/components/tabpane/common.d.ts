import type { ExtractPropTypes } from 'vue';
export declare const tabpaneProps: {
    title: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    paneKey: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    disabled: {
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
};
export type TabpaneProps = ExtractPropTypes<typeof tabpaneProps>;
