export declare const FORM_KEY: unique symbol;
export declare const Component: import("vue").DefineComponent<{
    modelValue: {
        type: ObjectConstructor;
        default: {};
    };
}, {
    validate: (customProp?: string) => Promise<unknown>;
    reset: () => void;
    onSubmit: () => boolean;
    formErrorTip: import("vue").ComputedRef<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "validate"[], "validate", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ObjectConstructor;
        default: {};
    };
}>> & {
    onValidate?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: Record<string, any>;
}>;
