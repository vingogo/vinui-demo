import type { CSSProperties, PropType, ExtractPropTypes } from 'vue';
declare const commonProps: {
    customClass: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    customStyle: {
        type: PropType<CSSProperties>;
        default: string;
    };
};
export type CommonProps = ExtractPropTypes<typeof commonProps>;
export default commonProps;
