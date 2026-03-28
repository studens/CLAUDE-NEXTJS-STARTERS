import Link from "next/link";
import { ArrowRight, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/layout/page-wrapper";

// 하단 CTA(Call to Action) 섹션
// 그라디언트 배경 + 메인 CTA 버튼으로 전환율 유도
export function CTA() {
  return (
    <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
      <PageWrapper>
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl max-w-2xl">
            지금 바로 프로젝트를 시작해보세요
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl">
            설정에 시간을 낭비하지 마세요. 검증된 스타터킷으로 오늘부터
            실제 제품을 만들어보세요.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#contact">
                무료로 시작하기
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <GitBranch className="size-4" />
                소스 코드 보기
              </Link>
            </Button>
          </div>
        </div>
      </PageWrapper>
    </section>
  );
}
