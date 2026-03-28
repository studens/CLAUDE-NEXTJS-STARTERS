import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  FolderOpen,
  Layers,
  Moon,
  Package,
  Palette,
  Rocket,
  Terminal,
  Zap,
} from "lucide-react";

// 사이드바 메뉴 항목
const sidebarSections = [
  { id: "getting-started", label: "시작하기", icon: Rocket },
  { id: "structure", label: "프로젝트 구조", icon: FolderOpen },
  { id: "stack", label: "기술 스택", icon: Layers },
  { id: "components", label: "주요 컴포넌트", icon: Package },
  { id: "customization", label: "커스터마이징", icon: Palette },
];

// 코드 블록 컴포넌트
function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="rounded-lg bg-muted border text-sm p-4 overflow-x-auto font-mono leading-relaxed">
      <code>{children}</code>
    </pre>
  );
}

// 섹션 헤더
function DocSection({ id, icon: Icon, title, children }: {
  id: string;
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-10 border-b last:border-0">
      <div className="flex items-center gap-2 mb-6">
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="size-4" />
        </div>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className="space-y-4 text-sm leading-relaxed">{children}</div>
    </section>
  );
}

// 스타터킷 문서 페이지
// 시작하기, 프로젝트 구조, 기술 스택, 커스터마이징 가이드 포함
export default function DocsPage() {
  return (
    <>
      <Navbar />
      <div className="flex-1">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          {/* 페이지 헤더 */}
          <div className="mb-10">
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="size-3 mr-1" />
              문서
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight mb-3">문서</h1>
            <p className="text-muted-foreground text-lg">
              NextStarter 스타터킷의 설치, 구조, 커스터마이징 방법을 안내합니다.
            </p>
          </div>

          <div className="flex gap-12">
            {/* 사이드바 (데스크탑) */}
            <aside className="hidden lg:block w-52 shrink-0">
              <div className="sticky top-24 space-y-1">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  목차
                </p>
                {sidebarSections.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.id}
                      href={`#${s.id}`}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      <Icon className="size-3.5 shrink-0" />
                      {s.label}
                    </Link>
                  );
                })}
              </div>
            </aside>

            {/* 본문 */}
            <main className="flex-1 min-w-0">
              {/* 시작하기 */}
              <DocSection id="getting-started" icon={Rocket} title="시작하기">
                <p className="text-muted-foreground">
                  아래 명령어로 저장소를 클론하고 바로 개발을 시작하세요.
                </p>

                <div className="space-y-3">
                  <p className="font-medium">1. 저장소 클론</p>
                  <CodeBlock>{`git clone https://github.com/your-org/nextstarter.git my-app
cd my-app`}</CodeBlock>
                </div>

                <div className="space-y-3">
                  <p className="font-medium">2. 의존성 설치</p>
                  <CodeBlock>{`npm install
# 또는
pnpm install`}</CodeBlock>
                </div>

                <div className="space-y-3">
                  <p className="font-medium">3. 개발 서버 실행</p>
                  <CodeBlock>{`npm run dev`}</CodeBlock>
                  <p className="text-muted-foreground">
                    브라우저에서{" "}
                    <code className="bg-muted rounded px-1 py-0.5">http://localhost:3000</code>
                    을 열면 바로 확인할 수 있습니다.
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="font-medium">4. 프로덕션 빌드</p>
                  <CodeBlock>{`npm run build
npm run start`}</CodeBlock>
                </div>
              </DocSection>

              {/* 프로젝트 구조 */}
              <DocSection id="structure" icon={FolderOpen} title="프로젝트 구조">
                <p className="text-muted-foreground">
                  Next.js App Router 기반의 디렉토리 구조입니다.
                </p>
                <CodeBlock>{`my-app/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (ThemeProvider, Toaster)
│   ├── page.tsx            # 홈 랜딩 페이지
│   ├── examples/
│   │   └── page.tsx        # 컴포넌트 예제 페이지
│   ├── docs/
│   │   └── page.tsx        # 문서 페이지
│   ├── not-found.tsx       # 404 페이지
│   └── globals.css         # 전역 스타일 + 테마 변수
│
├── components/
│   ├── providers/
│   │   └── theme-provider.tsx   # next-themes 래퍼
│   ├── layout/
│   │   ├── navbar.tsx           # 반응형 헤더
│   │   ├── footer.tsx           # 푸터
│   │   └── page-wrapper.tsx     # max-width 컨테이너
│   ├── ui/
│   │   ├── button.tsx           # 기본 버튼
│   │   ├── theme-toggle.tsx     # 다크모드 토글
│   │   └── ...                  # shadcn/ui 컴포넌트들
│   └── sections/
│       ├── hero.tsx             # 히어로 섹션
│       ├── features.tsx         # 기능 섹션
│       ├── pricing.tsx          # 요금제 섹션
│       ├── contact.tsx          # 문의 섹션
│       └── cta.tsx              # CTA 섹션
│
├── lib/
│   └── utils.ts            # cn() 유틸리티 함수
└── hooks/                  # 커스텀 훅 (필요 시 추가)`}</CodeBlock>
              </DocSection>

              {/* 기술 스택 */}
              <DocSection id="stack" icon={Layers} title="기술 스택">
                <p className="text-muted-foreground mb-4">
                  스타터킷에 포함된 라이브러리와 각각의 역할입니다.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      icon: Zap,
                      name: "Next.js 16",
                      desc: "App Router 기반 풀스택 React 프레임워크. 서버 컴포넌트, 스트리밍 지원.",
                    },
                    {
                      icon: Terminal,
                      name: "TypeScript",
                      desc: "타입 안정성으로 런타임 오류를 사전에 방지. 자동완성, 리팩터링 지원.",
                    },
                    {
                      icon: Palette,
                      name: "Tailwind CSS v4",
                      desc: "유틸리티 퍼스트 CSS. v4의 새로운 CSS-first 설정과 OKLCH 색상 지원.",
                    },
                    {
                      icon: Package,
                      name: "shadcn/ui",
                      desc: "복사-붙여넣기 방식의 Radix UI 기반 컴포넌트. 커스터마이징 자유도 높음.",
                    },
                    {
                      icon: Moon,
                      name: "next-themes",
                      desc: "SSR-safe 다크모드 관리. 시스템 설정 연동, localStorage 지속성.",
                    },
                    {
                      icon: Layers,
                      name: "react-hook-form + zod",
                      desc: "성능 최적화된 폼 관리 + TypeScript-first 스키마 유효성 검사.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <Card key={item.name} className="p-0">
                        <CardHeader className="pb-1 pt-4 px-4">
                          <div className="flex items-center gap-2">
                            <Icon className="size-4 text-primary" />
                            <span className="font-semibold text-sm">{item.name}</span>
                          </div>
                        </CardHeader>
                        <CardContent className="px-4 pb-4">
                          <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </DocSection>

              {/* 주요 컴포넌트 */}
              <DocSection id="components" icon={Package} title="주요 컴포넌트">
                <p className="text-muted-foreground">핵심 컴포넌트 사용법입니다.</p>

                <div className="space-y-6">
                  <div>
                    <p className="font-medium mb-2">ThemeProvider — 다크모드 설정</p>
                    <p className="text-muted-foreground mb-2">
                      <code className="bg-muted rounded px-1">app/layout.tsx</code>에 이미 설정되어 있습니다.
                      <code className="bg-muted rounded px-1 mx-1">defaultTheme</code>을 변경해 기본값을 조정하세요.
                    </p>
                    <CodeBlock>{`// app/layout.tsx
<ThemeProvider
  attribute="class"     // HTML class로 .dark 토글
  defaultTheme="system" // "light" | "dark" | "system"
  enableSystem          // 시스템 설정 연동
  disableTransitionOnChange
>`}</CodeBlock>
                  </div>

                  <Separator />

                  <div>
                    <p className="font-medium mb-2">cn() — 클래스 병합 유틸리티</p>
                    <p className="text-muted-foreground mb-2">
                      Tailwind 클래스 충돌 없이 조건부 스타일을 적용합니다.
                    </p>
                    <CodeBlock>{`import { cn } from "@/lib/utils";

// 조건부 클래스 병합
<div className={cn(
  "base-class",
  isActive && "active-class",
  variant === "primary" ? "bg-primary" : "bg-secondary"
)} />`}</CodeBlock>
                  </div>

                  <Separator />

                  <div>
                    <p className="font-medium mb-2">폼 — react-hook-form + zod</p>
                    <CodeBlock>{`"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("올바른 이메일을 입력하세요."),
});

export function MyForm() {
  const form = useForm({ resolver: zodResolver(schema) });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(console.log)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">제출</Button>
      </form>
    </Form>
  );
}`}</CodeBlock>
                  </div>

                  <Separator />

                  <div>
                    <p className="font-medium mb-2">Toast 알림 — sonner</p>
                    <CodeBlock>{`"use client";
import { toast } from "sonner";

// 성공 / 에러 / 정보 알림
toast.success("저장 완료!");
toast.error("오류가 발생했습니다.");
toast.info("업데이트가 있습니다.", {
  description: "새로운 버전이 출시되었습니다.",
});`}</CodeBlock>
                  </div>
                </div>
              </DocSection>

              {/* 커스터마이징 */}
              <DocSection id="customization" icon={Palette} title="커스터마이징">
                <div className="space-y-6">
                  <div>
                    <p className="font-medium mb-2">색상 테마 변경</p>
                    <p className="text-muted-foreground mb-2">
                      <code className="bg-muted rounded px-1">app/globals.css</code>의 CSS 변수를 수정하면
                      전체 색상이 바뀝니다. OKLCH 색상 형식을 사용합니다.
                    </p>
                    <CodeBlock>{`:root {
  --primary: oklch(0.205 0 0);          /* 메인 색상 */
  --primary-foreground: oklch(0.985 0 0); /* 메인 위 텍스트 */
  --background: oklch(1 0 0);           /* 배경색 */
  --foreground: oklch(0.145 0 0);       /* 기본 텍스트 */
  --radius: 0.625rem;                   /* 모서리 반경 */
}

.dark {
  --primary: oklch(0.922 0 0);
  --background: oklch(0.145 0 0);
  /* ... */
}`}</CodeBlock>
                  </div>

                  <Separator />

                  <div>
                    <p className="font-medium mb-2">폰트 변경</p>
                    <p className="text-muted-foreground mb-2">
                      <code className="bg-muted rounded px-1">app/layout.tsx</code>에서 Google Fonts를 교체하세요.
                    </p>
                    <CodeBlock>{`// app/layout.tsx
import { Inter } from "next/font/google"; // Geist → Inter로 변경

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});`}</CodeBlock>
                  </div>

                  <Separator />

                  <div>
                    <p className="font-medium mb-2">shadcn 컴포넌트 추가</p>
                    <p className="text-muted-foreground mb-2">
                      필요한 컴포넌트를 CLI로 추가하면{" "}
                      <code className="bg-muted rounded px-1">components/ui/</code>에 소스코드가 복사됩니다.
                    </p>
                    <CodeBlock>{`# 특정 컴포넌트 추가
npx shadcn add calendar
npx shadcn add command
npx shadcn add drawer`}</CodeBlock>
                  </div>
                </div>
              </DocSection>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
