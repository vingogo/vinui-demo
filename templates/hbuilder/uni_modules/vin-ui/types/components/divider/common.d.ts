import type { ExtractPropTypes } from 'vue';
export declare const dividerProps: {
    contentPosition: {
        type: StringConstructor;
        default: string;
    };
    dashed: {
        type: BooleanConstructor;
        default: boolean;
    };
    hairline: {
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
export type DividerProps = ExtractPropTypes<typeof dividerProps>;
