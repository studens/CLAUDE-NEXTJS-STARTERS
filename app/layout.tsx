import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NextStarter — 모던 웹 스타터킷",
    template: "%s | NextStarter",
  },
  description:
    "Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui로 구성된 프로덕션 레디 스타터킷. 설정 없이 바로 개발을 시작하세요.",
  keywords: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "스타터킷", "boilerplate"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* suppressHydrationWarning: next-themes가 서버/클라이언트 간 class 불일치를 발생시키므로 필수 */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
            {/* sonner toast 컨테이너 */}
            <Toaster richColors position="top-right" />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
