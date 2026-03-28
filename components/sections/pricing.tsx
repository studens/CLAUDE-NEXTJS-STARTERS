"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { cn } from "@/lib/utils";

type BillingCycle = "monthly" | "yearly";

const plans = [
  {
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "개인 프로젝트와 학습용으로 시작해보세요.",
    features: [
      "3개 프로젝트",
      "기본 컴포넌트",
      "커뮤니티 지원",
      "GitHub 통합",
    ],
    cta: "무료로 시작",
    highlighted: false,
  },
  {
    name: "Pro",
    monthlyPrice: 29,
    yearlyPrice: 23,
    description: "성장하는 팀과 프로덕션 프로젝트를 위한 플랜.",
    features: [
      "무제한 프로젝트",
      "모든 컴포넌트",
      "우선 지원",
      "고급 애널리틱스",
      "커스텀 도메인",
      "팀 협업 (5명)",
    ],
    cta: "Pro 시작하기",
    highlighted: true,
    badge: "추천",
  },
  {
    name: "Enterprise",
    monthlyPrice: 99,
    yearlyPrice: 79,
    description: "대규모 팀과 엔터프라이즈 요구사항을 위한 플랜.",
    features: [
      "무제한 모든 기능",
      "전담 지원 매니저",
      "SLA 보장",
      "SSO/SAML 지원",
      "감사 로그",
      "무제한 팀원",
    ],
    cta: "영업팀 문의",
    highlighted: false,
  },
];

// 요금제 섹션
// Tabs 컴포넌트로 월간/연간 전환 (연간 20% 할인)
// 가운데 Pro 카드를 ring으로 강조
export function Pricing() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-muted/30">
      <PageWrapper>
        {/* 섹션 헤더 */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            투명한 요금제
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            숨겨진 비용 없이 프로젝트에 맞는 플랜을 선택하세요.
          </p>

          {/* 월간/연간 탭 전환 */}
          <Tabs
            value={billing}
            onValueChange={(v) => setBilling(v as BillingCycle)}
            className="inline-flex"
          >
            <TabsList>
              <TabsTrigger value="monthly">월간</TabsTrigger>
              <TabsTrigger value="yearly" className="gap-1.5">
                연간
                <Badge variant="secondary" className="text-xs px-1.5 py-0">
                  20% 할인
                </Badge>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* 요금제 카드 그리드 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {plans.map((plan) => {
            const price = billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

            return (
              <Card
                key={plan.name}
                className={cn(
                  "relative flex flex-col transition-all duration-200",
                  plan.highlighted && "ring-2 ring-primary shadow-lg scale-[1.02]"
                )}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="px-3 py-0.5">{plan.badge}</Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">
                      {price === 0 ? "무료" : `$${price}`}
                    </span>
                    {price > 0 && (
                      <span className="text-muted-foreground text-sm">/월</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 gap-4">
                  <ul className="space-y-2.5 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="size-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </PageWrapper>
    </section>
  );
}
