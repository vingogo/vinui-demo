export type Lang = Record<string, any>;
export declare class Locale {
    static currentLang: import("vue").Ref<string>;
    static languages(): Lang;
    static use(lang: string, Languages?: any): void;
    static merge(lang: string, newLanguages: any): void;
}
export default Locale;
