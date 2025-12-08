import { defaultLocale, locales, type Locale } from "../i18n/strings";

const ensureTrailingSlash = (path: string) => (path.endsWith("/") ? path : `${path}/`);
const normalizePath = (path: string) => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "" ? "/" : normalized;
};

export function stripLocaleFromPath(path: string): string {
  const normalized = normalizePath(path);
  const segments = normalized.split("/").filter(Boolean);
  const maybeLocale = segments[0];
  const hasLocale = locales.includes(maybeLocale as Locale);
  const rest = hasLocale ? segments.slice(1) : segments;
  if (!rest.length) return "/";
  return `/${rest.join("/")}${normalized.endsWith("/") ? "/" : ""}`;
}

export function pathWithLocale(locale: Locale, path: string): string {
  const stripped = stripLocaleFromPath(path);
  const normalized = normalizePath(stripped);
  if (locale === defaultLocale) return ensureTrailingSlash(normalized);
  if (normalized === "/") return `/${locale}/`;
  return ensureTrailingSlash(`/${locale}${normalized}`);
}
