export function localizedPath(lang: string, path: string) {
  const prefix = lang === "vi" ? "/vi" : "";
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${prefix}${normalizedPath}`;
}
