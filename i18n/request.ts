import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();

  const requestedLocale = cookieStore.get("NEXT_LOCALE")?.value;

  const locale = requestedLocale === "id" ? "id" : "en";

  const messages = (await import(`../messages/${locale}.json`)).default;

  return {
    locale,
    messages,
  };
});