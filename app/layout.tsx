import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { ClientBody } from "./client-body";

export const metadata: Metadata = {
  metadataBase: new URL("https://issaselim.vercel.app"), // placeholder — replace with the real production domain
  title: "عيسى سليم | Growth & Performance Marketing",
  description:
    "أساعد الشركات على زيادة العملاء والمبيعات من خلال إدارة الحملات الإعلانية، تحسين معدل التحويل (CRO)، وتحليل البيانات.",
  openGraph: {
    title: "عيسى سليم | Growth & Performance Marketing",
    description:
      "أساعد الشركات على زيادة العملاء والمبيعات من خلال إدارة الحملات الإعلانية، تحسين معدل التحويل (CRO)، وتحليل البيانات.",
    locale: "ar_SA",
    type: "website",
    images: ["/profile.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "عيسى سليم | Growth & Performance Marketing",
    description:
      "أساعد الشركات على زيادة العملاء والمبيعات من خلال إدارة الحملات الإعلانية وتحليل البيانات.",
    images: ["/profile.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>

      <body className="atmosphere antialiased">
        <LanguageProvider>
          <ClientBody>{children}</ClientBody>
        </LanguageProvider>
      </body>
    </html>
  );
}