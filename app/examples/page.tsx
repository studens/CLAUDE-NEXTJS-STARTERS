import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Bell, Download, Mail, Plus, Search, Settings, Trash2 } from "lucide-react";

// 예제 섹션 래퍼
function Section({ title, description, children }: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-10 border-b last:border-0">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}

// 컴포넌트 예제 그룹 박스
function ExampleBox({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border bg-muted/30 p-6">
      <p className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wider">{label}</p>
      {children}
    </div>
  );
}

const tableData = [
  { name: "홍길동", email: "hong@example.com", role: "Admin", status: "Active" },
  { name: "김철수", email: "kim@example.com", role: "User", status: "Active" },
  { name: "이영희", email: "lee@example.com", role: "User", status: "Inactive" },
];

// shadcn/ui 컴포넌트 예제 페이지
// 설치된 모든 UI 컴포넌트를 시각적으로 확인할 수 있는 쇼케이스
export default function ExamplesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-12">
        <PageWrapper>
          {/* 헤더 */}
          <div className="mb-12">
            <Badge variant="secondary" className="mb-4">예제</Badge>
            <h1 className="text-4xl font-bold tracking-tight mb-3">컴포넌트 예제</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              이 스타터킷에 포함된 shadcn/ui 컴포넌트들의 실제 사용 예시입니다.
              각 컴포넌트를 복사해서 바로 프로젝트에 적용하세요.
            </p>
          </div>

          {/* 버튼 */}
          <Section title="Button" description="6가지 variant와 다양한 size를 제공합니다.">
            <div className="space-y-4">
              <ExampleBox label="Variant">
                <div className="flex flex-wrap gap-3">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="link">Link</Button>
                </div>
              </ExampleBox>
              <ExampleBox label="Size">
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="lg">Large</Button>
                  <Button>Default</Button>
                  <Button size="sm">Small</Button>
                  <Button size="icon"><Plus className="size-4" /></Button>
                </div>
              </ExampleBox>
              <ExampleBox label="아이콘 포함">
                <div className="flex flex-wrap gap-3">
                  <Button><Mail className="size-4" />이메일 보내기</Button>
                  <Button variant="outline"><Download className="size-4" />다운로드</Button>
                  <Button variant="destructive"><Trash2 className="size-4" />삭제</Button>
                </div>
              </ExampleBox>
            </div>
          </Section>

          {/* 뱃지 */}
          <Section title="Badge" description="상태, 카테고리, 라벨 표시에 활용합니다.">
            <ExampleBox label="Variant">
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </ExampleBox>
          </Section>

          {/* 카드 */}
          <Section title="Card" description="콘텐츠를 담는 기본 컨테이너 컴포넌트입니다.">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "총 사용자", value: "12,345", desc: "전월 대비 +12%" },
                { title: "이번달 수익", value: "$4,890", desc: "전월 대비 +8%" },
                { title: "활성 프로젝트", value: "89", desc: "전월 대비 +3%" },
              ].map((item) => (
                <Card key={item.title}>
                  <CardHeader className="pb-1">
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{item.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>

          {/* 폼 인풋 */}
          <Section title="Form Inputs" description="Input, Textarea, Select, Checkbox, Switch 컴포넌트입니다.">
            <div className="space-y-4 max-w-md">
              <ExampleBox label="Input + Label">
                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="ex-name">이름</Label>
                    <Input id="ex-name" placeholder="홍길동" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="ex-email">이메일</Label>
                    <Input id="ex-email" type="email" placeholder="hong@example.com" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="ex-search">검색</Label>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
                      <Input id="ex-search" className="pl-8" placeholder="검색어 입력..." />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="ex-msg">메시지</Label>
                    <Textarea id="ex-msg" placeholder="내용을 입력하세요..." className="resize-none" rows={3} />
                  </div>
                </div>
              </ExampleBox>
              <ExampleBox label="Select">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="역할 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="guest">Guest</SelectItem>
                  </SelectContent>
                </Select>
              </ExampleBox>
              <ExampleBox label="Checkbox &amp; Switch">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Checkbox id="ex-check" />
                    <Label htmlFor="ex-check">이용약관에 동의합니다</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="ex-switch" />
                    <Label htmlFor="ex-switch">알림 수신 동의</Label>
                  </div>
                </div>
              </ExampleBox>
            </div>
          </Section>

          {/* Tabs */}
          <Section title="Tabs" description="관련 콘텐츠를 탭으로 구분합니다.">
            <Tabs defaultValue="overview" className="max-w-lg">
              <TabsList>
                <TabsTrigger value="overview">개요</TabsTrigger>
                <TabsTrigger value="analytics">분석</TabsTrigger>
                <TabsTrigger value="settings">설정</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <Card>
                  <CardContent className="pt-4 text-sm text-muted-foreground">
                    프로젝트 전체 개요와 현황을 확인할 수 있습니다.
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="analytics" className="mt-4">
                <Card>
                  <CardContent className="pt-4 text-sm text-muted-foreground">
                    트래픽, 전환율 등 상세 분석 데이터를 확인하세요.
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="settings" className="mt-4">
                <Card>
                  <CardContent className="pt-4 text-sm text-muted-foreground">
                    프로젝트 설정을 변경할 수 있습니다.
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </Section>

          {/* Accordion */}
          <Section title="Accordion" description="FAQ, 접기/펼치기 콘텐츠에 활용합니다.">
            <Accordion type="single" collapsible className="max-w-lg">
              <AccordionItem value="q1">
                <AccordionTrigger>이 스타터킷은 무료인가요?</AccordionTrigger>
                <AccordionContent>
                  네, 완전 무료입니다. MIT 라이선스 하에 자유롭게 사용하실 수 있습니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Next.js 버전이 변경되면 업데이트되나요?</AccordionTrigger>
                <AccordionContent>
                  주요 Next.js 릴리즈에 맞춰 정기적으로 업데이트할 예정입니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>TypeScript 없이도 사용할 수 있나요?</AccordionTrigger>
                <AccordionContent>
                  .tsx 파일을 .jsx로 변경하면 JavaScript로도 사용 가능합니다. 단 타입 안정성이 낮아집니다.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Section>

          {/* Avatar + Skeleton */}
          <Section title="Avatar &amp; Skeleton" description="프로필 이미지와 로딩 상태를 표현합니다.">
            <div className="space-y-4">
              <ExampleBox label="Avatar">
                <div className="flex gap-3 items-center">
                  {["홍길", "김철", "이영", "박민"].map((name) => (
                    <Avatar key={name}>
                      <AvatarFallback>{name}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </ExampleBox>
              <ExampleBox label="Skeleton (로딩 상태)">
                <div className="flex items-center gap-4">
                  <Skeleton className="size-12 rounded-full" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                </div>
              </ExampleBox>
            </div>
          </Section>

          {/* Table */}
          <Section title="Table" description="데이터를 표 형식으로 표시합니다.">
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>이름</TableHead>
                    <TableHead>이메일</TableHead>
                    <TableHead>역할</TableHead>
                    <TableHead>상태</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((row) => (
                    <TableRow key={row.email}>
                      <TableCell className="font-medium">{row.name}</TableCell>
                      <TableCell className="text-muted-foreground">{row.email}</TableCell>
                      <TableCell>
                        <Badge variant={row.role === "Admin" ? "default" : "secondary"}>
                          {row.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={row.status === "Active" ? "outline" : "destructive"}>
                          {row.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Section>

          {/* Tooltip + Dialog */}
          <Section title="Overlay" description="Tooltip과 Dialog 컴포넌트입니다.">
            <div className="flex flex-wrap gap-4">
              <ExampleBox label="Tooltip">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Bell className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>알림 설정</TooltipContent>
                </Tooltip>
              </ExampleBox>

              <ExampleBox label="Dialog">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <Settings className="size-4" />
                      설정 열기
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>설정</DialogTitle>
                      <DialogDescription>
                        프로젝트 설정을 변경하세요. 변경사항은 즉시 적용됩니다.
                      </DialogDescription>
                    </DialogHeader>
                    <Separator />
                    <div className="space-y-3 py-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="notif-switch">이메일 알림</Label>
                        <Switch id="notif-switch" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="mkt-switch">마케팅 수신</Label>
                        <Switch id="mkt-switch" />
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </ExampleBox>
            </div>
          </Section>
        </PageWrapper>
      </main>
      <Footer />
    </>
  );
}
