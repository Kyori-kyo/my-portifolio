export const locales = {
  en: () => import("@/app/locales/en"),
  pt: () => import("@/app/locales/pt"),
} as const;

type LocalesKeys = keyof typeof locales;

export const localeList = Object.keys(locales) as LocalesKeys[];

export const defaultLocale = "en" as const satisfies keyof typeof locales;