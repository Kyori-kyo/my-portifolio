import { defaultLocale, localeList } from "@/app/locales";
import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";

const I18nMiddleware = createI18nMiddleware(localeList, defaultLocale, {
	urlMappingStrategy: "rewrite",
});

export function middleware(request: NextRequest) {
	const response = I18nMiddleware(request);

	return response;
}

export const config = {
	matcher: ["/((?!_next|assets).*)"],
};
