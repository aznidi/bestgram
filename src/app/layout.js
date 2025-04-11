import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { NavigationEvents } from "./navigation-events";
import "nprogress/nprogress.css"; // Importer les styles CSS de NProgress
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bestgram - Plateforme de gestion de followers Instagram",
  description: "Boostez vos followers Instagram et gérez votre compte efficacement avec Bestgram",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavigationEvents />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
