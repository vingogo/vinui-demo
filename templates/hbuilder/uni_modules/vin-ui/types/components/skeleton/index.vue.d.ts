import { CSSProperties } from 'vue';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    animated: {
        type: BooleanConstructor;
        default: boolean;
    };
    avatar: {
        type: BooleanConstructor;
        default: boolean;
    };
    avatarShape: {
        type: import("vue").PropType<import("./common").avatarShapeType>;
        default: string;
    };
    avatarSize: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    row: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: BooleanConstructor;
        default: boolean;
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
    mainStyle: import("vue").ComputedRef<string>;
    mainClass: import("vue").ComputedRef<string>;
    avatarShape: import("vue").Ref<any>;
    avatarClass: import("vue").ComputedRef<{
        [x: string]: any;
    }>;
    blockClass: import("vue").ComputedRef<{
        [x: string]: any;
    }>;
    getStyle: () => CSSProperties;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    animated: {
        type: BooleanConstructor;
        default: boolean;
    };
    avatar: {
        type: BooleanConstructor;
        default: boolean;
    };
    avatarShape: {
        type: import("vue").PropType<import("./common").avatarShapeType>;
        default: string;
    };
    avatarSize: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    row: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    customStyle: {
        type: import("vue").PropType<CSSProperties>;
        default: string;
    };
}>>, {
    customClass: string | unknown[];
    customStyle: CSSProperties;
    round: boolean;
    avatar: boolean;
    title: boolean;
    height: string;
    loading: boolean;
    width: string;
    row: string;
    animated: boolean;
    avatarShape: import("./common").avatarShapeType;
    avatarSize: string;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinSkeleton: typeof _default;
  }
}