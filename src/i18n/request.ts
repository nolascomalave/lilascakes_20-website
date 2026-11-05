import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

import esMessages from "../../messages/es.json";
import enMessages from "../../messages/en.json";

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale ?? routing.defaultLocale;

  return {
    locale: currentLocale,
    messages: currentLocale === "en" ? enMessages : esMessages,
  };
});
