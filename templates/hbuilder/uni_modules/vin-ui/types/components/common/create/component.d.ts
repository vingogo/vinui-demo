import { defineComponent, ComponentPropsOptions, ExtractPropTypes, SetupContext, RenderFunction, Component } from 'vue';
export declare function createComponent(name: string): {
    classPrefix: string;
    componentName: string;
    translate(keyPath: string, ...args: unknown[]): any;
    create: typeof defineComponent;
    useVinContext: (props: any) => {
        classPrefix: string;
        mainClass: import("vue").ComputedRef<string>;
        mainStyle: import("vue").ComputedRef<string>;
        getMainClass: (cls: unknown) => string;
        getMainStyle: (style: unknown) => string;
    };
    createDemo<PropsOptions extends Readonly<ComponentPropsOptions<{
        [x: string]: unknown;
    }>>, Props extends Readonly<ExtractPropTypes<PropsOptions>>>(_component: {
        [optionKey: string]: any;
        name?: string | undefined;
        baseName?: string | undefined;
        props?: PropsOptions | undefined;
        components?: Record<string, Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>> | undefined;
        setup?: ((props: Props, setupContext: SetupContext) => RenderFunction | Record<string, any> | any) | undefined;
        emits?: string[] | undefined;
    }): import("vue").DefineComponent<unknown, object, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<unknown>, {}>;
};
