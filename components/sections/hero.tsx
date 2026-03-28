import Link from "next/link";
import { ArrowRight, GitBranch, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageWrapper } from "@/components/layout/page-wrapper";

const techStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "shadcn/ui",
  "lucide-react",
];

// 메인 히어로 섹션
// 그라디언트 헤딩, CTA 버튼, 기술 스택 뱃지 포함
// tw-animate-css의 animate-in으로 입장 애니메이션 적용
export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      {/* 배경 그라디언트 장식 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/3 blur-3xl" />
      </div>

      <PageWrapper>
        <div className="flex flex-col items-center text-center gap-6">
          {/* New 뱃지 */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Badge variant="secondary" className="gap-1.5 px-3 py-1 text-sm">
              <Sparkles className="size-3.5" />
              모던 웹 스타터킷 v1.0
            </Badge>
          </div>

          {/* 메인 헤딩 */}
          <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            더 빠르게 시작하는{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              모던 웹 개발
            </span>
          </h1>

          {/* 서브 타이틀 */}
          <p className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Next.js, TypeScript, Tailwind CSS, shadcn/ui가 미리 구성된 프로덕션 레디 스타터킷.
            설정에 시간을 낭비하지 말고 바로 제품을 만들어보세요.
          </p>

          {/* CTA 버튼 */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="#features">
                지금 시작하기
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <GitBranch className="size-4" />
                GitHub
              </Link>
            </Button>
          </div>

          {/* 기술 스택 뱃지 */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 flex flex-wrap items-center justify-center gap-2 pt-4">
            {techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs px-2.5 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </PageWrapper>
    </section>
  );
}
