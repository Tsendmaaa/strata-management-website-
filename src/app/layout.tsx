// app/layout.tsx
import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oceanview Strata Management",
  description: "Simple strata management information website",
};

// ✅ Optional: use environment variables for footer or branding
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER;
const brand = process.env.NEXT_PUBLIC_COMPANY_NAME;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <header>
            <h1>{brand}</h1>
          </header>

          {children}

          <footer>
            <p>📧 {email}</p>
            <p>📞 {phone}</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
