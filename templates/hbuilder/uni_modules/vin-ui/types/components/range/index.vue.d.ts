import { CSSProperties } from 'vue';
import type { SliderValue } from './common';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: BooleanConstructor;
    activeColor: StringConstructor;
    inactiveColor: StringConstructor;
    buttonColor: StringConstructor;
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    marks: {
        type: ObjectConstructor;
        default: {};
    };
    hiddenRange: {
        type: BooleanConstructor;
        default: boolean;
    };
    hiddenTag: {
        type: BooleanConstructor;
        default: boolean;
    };
    min: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    step: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: import("vue").PropType<SliderValue>;
        default: number;
    };
    customClass: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    customStyle: {
        type: import("vue").PropType<CSSProperties>;
        default: string;
    };
}, {
    barStyle: import("vue").ComputedRef<CSSProperties>;
    curValue: (idx?: number) => number;
    buttonIndex: import("vue").Ref<number>;
    containerClasses: import("vue").ComputedRef<{
        [x: string]: boolean;
        "vin-range-container": boolean;
    }>;
    markClassName: (mark: any) => {
        [x: string]: boolean;
    };
    marksStyle: (mark: any) => any;
    marksList: import("vue").ComputedRef<number[]>;
    tickStyle: (mark: any) => any;
    refRandomId: string;
    customClass: import("vue").Ref<string | unknown[]>;
    customStyle: import("vue").Ref<CSSProperties>;
    vertical: import("vue").Ref<boolean>;
    max: import("vue").Ref<string | number>;
    disabled: import("vue").Ref<boolean>;
    range: import("vue").Ref<boolean>;
    modelValue: import("vue").Ref<SliderValue>;
    min: import("vue").Ref<string | number>;
    step: import("vue").Ref<string | number>;
    marks: import("vue").Ref<Record<string, any>>;
    hiddenRange: import("vue").Ref<boolean>;
    hiddenTag: import("vue").Ref<boolean>;
    activeColor: import("vue").Ref<string | undefined>;
    inactiveColor: import("vue").Ref<string | undefined>;
    buttonColor: import("vue").Ref<string | undefined>;
    onChange: import("vue").Ref<((...args: any[]) => any) | undefined>;
    "onUpdate:modelValue": import("vue").Ref<((...args: any[]) => any) | undefined>;
    "onDrag-end": import("vue").Ref<((...args: any[]) => any) | undefined>;
    "onDrag-start": import("vue").Ref<((...args: any[]) => any) | undefined>;
    root: import("vue").Ref<HTMLElement | undefined>;
    rootId: import("vue").ComputedRef<string>;
    mainClass: import("vue").ComputedRef<string>;
    mainStyle: import("vue").ComputedRef<string>;
    wrapperStyle: import("vue").ComputedRef<{
        background: string | undefined;
    }>;
    buttonStyle: import("vue").ComputedRef<{
        borderColor: string | undefined;
    }>;
    onClick: (event: MouseEvent) => Promise<void>;
    onTouchStart: (event: TouchEvent) => void;
    onTouchMove: (event: TouchEvent) => Promise<void>;
    onTouchEnd: (event: TouchEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "drag-end" | "drag-start")[], "update:modelValue" | "change" | "drag-end" | "drag-start", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: BooleanConstructor;
    activeColor: StringConstructor;
    inactiveColor: StringConstructor;
    buttonColor: StringConstructor;
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    marks: {
        type: ObjectConstructor;
        default: {};
    };
    hiddenRange: {
        type: BooleanConstructor;
        default: boolean;
    };
    hiddenTag: {
        type: BooleanConstructor;
        default: boolean;
    };
    min: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    step: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: import("vue").PropType<SliderValue>;
        default: number;
    };
    customClass: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    customStyle: {
        type: import("vue").PropType<CSSProperties>;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onDrag-end"?: ((...args: any[]) => any) | undefined;
    "onDrag-start"?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: CSSProperties;
    vertical: boolean;
    max: string | number;
    disabled: boolean;
    range: boolean;
    modelValue: SliderValue;
    min: string | number;
    step: string | number;
    marks: Record<string, any>;
    hiddenRange: boolean;
    hiddenTag: boolean;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinRange: typeof _default;
  }
}