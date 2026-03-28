import {
  Zap,
  Shield,
  Palette,
  Code2,
  Moon,
  Smartphone,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PageWrapper } from "@/components/layout/page-wrapper";

const features = [
  {
    icon: Zap,
    title: "Next.js 16 App Router",
    description:
      "최신 App Router 기반의 서버 컴포넌트, 스트리밍, 중첩 레이아웃을 즉시 활용하세요.",
  },
  {
    icon: Code2,
    title: "TypeScript",
    description:
      "엄격한 타입 시스템으로 런타임 오류를 미리 방지하고 개발 경험을 향상시킵니다.",
  },
  {
    icon: Palette,
    title: "Tailwind CSS v4",
    description:
      "새로운 Tailwind v4의 CSS-first 설정과 OKLCH 색상 시스템으로 디자인을 자유롭게 표현하세요.",
  },
  {
    icon: Shield,
    title: "shadcn/ui",
    description:
      "Radix UI 기반의 접근성 높은 컴포넌트들이 미리 구성되어 있습니다. 필요한 것만 가져다 쓰세요.",
  },
  {
    icon: Moon,
    title: "다크모드 지원",
    description:
      "next-themes로 구현된 SSR-safe 다크모드. 시스템 설정을 따르거나 직접 전환할 수 있습니다.",
  },
  {
    icon: Smartphone,
    title: "완전한 반응형",
    description:
      "모바일 퍼스트 설계로 모든 화면 크기에서 완벽하게 동작하는 UI를 제공합니다.",
  },
];

// 주요 기능 소개 섹션
// 6개의 카드 그리드로 핵심 기능을 소개
// 호버 시 카드가 위로 이동하는 인터랙션 효과
export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <PageWrapper>
        {/* 섹션 헤더 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            개발에 필요한 모든 것이 준비되어 있습니다
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            검증된 기술 스택과 베스트 프랙티스로 구성된 스타터킷으로
            프로젝트를 빠르게 시작하세요.
          </p>
        </div>

        {/* 기능 카드 그리드 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <CardHeader className="pb-2">
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </PageWrapper>
    </section>
  );
}
