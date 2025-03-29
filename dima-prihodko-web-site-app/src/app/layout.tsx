import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import SocialNetworkAndMessagers from "./components/custom/SocialNetworkAndMessagers";
export const metadata: Metadata = {
  title: "Create Next App",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SocialNetworkAndMessagers></SocialNetworkAndMessagers>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
