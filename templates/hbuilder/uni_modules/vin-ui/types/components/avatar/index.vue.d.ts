import { AvatarGroupProps } from '../avatar-group/common';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    size: {
        type: StringConstructor;
        default: string;
    };
    shape: {
        type: StringConstructor;
        default: string;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    alt: {
        type: StringConstructor;
        default: string;
    };
    icon: {
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
}, {
    index: import("vue").Ref<number>;
    showMax: import("vue").Ref<boolean>;
    maxIndex: import("vue").Ref<number>;
    classes: import("vue").ComputedRef<string>;
    styles: import("vue").ComputedRef<string>;
    iconStyles: import("vue").ComputedRef<string>;
    isShowText: import("vue").ComputedRef<import("vue").Slot | undefined>;
    maxStyles: import("vue").ComputedRef<string>;
    activeAvatar: (event: any) => void;
    onError: (event: any) => void;
    parent: ({
        props: Required<AvatarGroupProps>;
    } & {
        add(child: import("vue").ComponentInternalInstance): void;
        remove(child: import("vue").ComponentInternalInstance): void;
        internalChildren: import("vue").ComponentInternalInstance[];
    }) | null;
    visible: {
        lightTheme: boolean;
    };
    avatarRef: import("vue").Ref<null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("active-avatar" | "onError")[], "active-avatar" | "onError", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: StringConstructor;
        default: string;
    };
    shape: {
        type: StringConstructor;
        default: string;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    alt: {
        type: StringConstructor;
        default: string;
    };
    icon: {
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
}>> & {
    "onActive-avatar"?: ((...args: any[]) => any) | undefined;
    onOnError?: ((...args: any[]) => any) | undefined;
}, {
    customClass: string | unknown[];
    customStyle: import("vue").CSSProperties;
    size: string;
    shape: string;
    bgColor: string;
    color: string;
    url: string;
    alt: string;
    icon: string;
}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
    VinAvatar: typeof _default;
  }
}