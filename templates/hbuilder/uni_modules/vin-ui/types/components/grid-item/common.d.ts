import type { ExtractPropTypes, PropType } from 'vue';
import type { RouterOptions } from '../../shared/hooks/useRouter';
export declare const gridItemProps: {
    text: {
        type: StringConstructor;
    };
    icon: {
        type: StringConstructor;
    };
    iconSize: {
        type: (StringConstructor | NumberConstructor)[];
    };
    iconColor: {
        type: StringConstructor;
    };
    to: {
        type: PropType<string | RouterOptions>;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    replace: {
        type: BooleanConstructor;
        default: boolean;
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
export type GridItemProps = ExtractPropTypes<typeof gridItemProps>;
