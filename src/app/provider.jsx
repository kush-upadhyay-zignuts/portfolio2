// "use client";

// import * as React from "react"
// import { ThemeProvider as NextThemesProvider } from "next-themes"

// export function ThemeProvider({
//   children,
//   ...props
// }) {
//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>
// }



"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider
      defaultTheme="system"  // ✅ Matches system light/dark mode
      enableSystem={true}    // ✅ Enables OS theme detection
      attribute="class"      // ✅ Applies theme as a `class` on <html>
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}