export type NormalizedStyle = Record<string, string | number>;
export declare function parseStringStyle(cssText: string): NormalizedStyle;
export declare function normalizeStyle(value: unknown): NormalizedStyle | string | undefined;
export declare function stringifyStyle(styles: NormalizedStyle | string | undefined): string;
export declare function normalizeClass(value: unknown): string;
