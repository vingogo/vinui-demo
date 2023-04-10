import { CSSProperties, PropType } from 'vue';
export type NameType = 'fade' | 'zoom' | 'fade-zoom' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';
export declare const transitionProps: {
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: PropType<NameType>;
        default: string;
    };
    enterClass: {
        type: StringConstructor;
        default: string;
    };
    enterActiveClass: {
        type: StringConstructor;
        default: string;
    };
    enterToClass: {
        type: StringConstructor;
        default: string;
    };
    leaveClass: {
        type: StringConstructor;
        default: string;
    };
    leaveActiveClass: {
        type: StringConstructor;
        default: string;
    };
    leaveToClass: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    timingFunction: {
        type: StringConstructor;
        default: string;
    };
    customClass: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    customStyle: {
        type: PropType<CSSProperties>;
        default: string;
    };
};
export interface IClassNames {
    enter: string;
    enterActive: string;
    enterTo: string;
    leave: string;
    leaveActive: string;
    leaveTo: string;
}
export interface IClassNameProps {
    enterClass?: string;
    enterActiveClass?: string;
    enterToClass?: string;
    leaveClass?: string;
    leaveActiveClass?: string;
    leaveToClass?: string;
}
export declare const getClassNames: (name: string, { enterClass, enterActiveClass, enterToClass, leaveClass, leaveActiveClass, leaveToClass, }: IClassNameProps) => IClassNames;
