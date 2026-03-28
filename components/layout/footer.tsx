import Link from "next/link";
import { Zap, GitBranch, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "예제", href: "/examples" },
    { label: "Changelog", href: "#" },
    { label: "Roadmap", href: "#" },
  ],
  Resources: [
    { label: "문서", href: "/docs" },
    { label: "Blog", href: "#" },
    { label: "Guides", href: "#" },
    { label: "Support", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "/#contact" },
    { label: "Privacy", href: "#" },
  ],
};

// 사이트 푸터
// 로고 + 설명, 링크 그룹, 소셜 아이콘, 저작권 표시
export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {/* 로고 + 설명 */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-3">
              <Zap className="size-5 text-primary" />
              <span>NextStarter</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Next.js, TypeScript, Tailwind CSS, ShadcnUI로 빠르게 시작하는 모던 웹 스타터킷.
            </p>
            {/* 소셜 아이콘 */}
            <div className="flex gap-3 mt-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <GitBranch className="size-5" />
              </Link>
              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="X (Twitter)"
              >
                <X className="size-5" />
              </Link>
            </div>
          </div>

          {/* 링크 그룹 */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold mb-3">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 NextStarter. All rights reserved.</p>
          <p>
            Built with{" "}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline underline-offset-4"
            >
              Next.js
            </Link>{" "}
            &{" "}
            <Link
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline underline-offset-4"
            >
              shadcn/ui
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
