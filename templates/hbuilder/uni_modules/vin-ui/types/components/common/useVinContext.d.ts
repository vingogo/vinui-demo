declare const useVinContext: (props: any, { componentName }: {
    componentName: string;
}) => {
    classPrefix: string;
    mainClass: import("vue").ComputedRef<string>;
    mainStyle: import("vue").ComputedRef<string>;
    getMainClass: (cls: unknown) => string;
    getMainStyle: (style: unknown) => string;
};
export default useVinContext;
