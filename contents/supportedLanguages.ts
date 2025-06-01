export type SupportedLanguages = "en" | "zh"
export const supportedLanguages: SupportedLanguages[] = ["en" , "zh"] as const;
export const langQueryHeaderName = "x-lang-query"