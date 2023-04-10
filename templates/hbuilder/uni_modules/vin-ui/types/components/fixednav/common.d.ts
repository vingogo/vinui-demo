import type { ExtractPropTypes, PropType } from 'vue';
export interface navItem {
    id?: string;
    icon: string;
    text: string;
    num: number;
}
export declare const fixednavProps: {
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    navList: {
        default: () => never[];
        type: PropType<navItem[]>;
    };
    activeText: {
        default: string;
        type: StringConstructor;
    };
    unActiveText: {
        default: string;
        type: StringConstructor;
    };
    position: {
        default: () => {
            top: string;
            bottom: string;
        };
        type: ObjectConstructor;
    };
    type: {
        default: string;
        type: StringConstructor;
    };
    customClass: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    customStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: string;
    };
};
export type FixednavProps = ExtractPropTypes<typeof fixednavProps>;
