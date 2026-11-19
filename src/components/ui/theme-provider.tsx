"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * React 19 registra como error el <script> que next-themes inyecta para
 * evitar el flash de tema. Es un falso positivo en desarrollo: el script
 * se ejecuta antes de la hidratación y el tema funciona correctamente.
 * Silenciamos únicamente ese mensaje, solo en desarrollo.
 */
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const originalError = console.error.bind(console);

  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Encountered a script tag")
    ) {
      return;
    }

    originalError(...args);
  };
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
