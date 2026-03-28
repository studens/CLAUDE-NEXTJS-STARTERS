"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PageWrapper } from "@/components/layout/page-wrapper";

// Zod 스키마로 폼 유효성 규칙 정의
const contactSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상이어야 합니다."),
  email: z.string().email("올바른 이메일 주소를 입력하세요."),
  message: z.string().min(10, "메시지는 10자 이상이어야 합니다."),
});

type ContactValues = z.infer<typeof contactSchema>;

// 문의 폼 섹션
// react-hook-form + zod로 유효성 검사
// 제출 완료 시 sonner toast 알림
export function Contact() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: ContactValues) {
    // 실제 프로젝트에서 이 부분에 API 호출 추가
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.log(values);
    toast.success("메시지가 전송되었습니다!", {
      description: "빠른 시일 내에 답변 드리겠습니다.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <PageWrapper>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          {/* 왼쪽: 설명 */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              문의하기
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              프로젝트에 대한 질문이 있거나 협업을 원하신다면 언제든지
              연락해주세요. 빠른 시일 내에 답변 드리겠습니다.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>✉️ hello@nextstarter.dev</p>
              <p>📍 Seoul, South Korea</p>
              <p>⏰ 평일 09:00 – 18:00 KST</p>
            </div>
          </div>

          {/* 오른쪽: 폼 */}
          <Card>
            <CardHeader className="pb-2">
              <h3 className="font-semibold text-lg">메시지 보내기</h3>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  {/* 이름 */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>이름</FormLabel>
                        <FormControl>
                          <Input placeholder="홍길동" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* 이메일 */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>이메일</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="hello@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* 메시지 */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>메시지</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="프로젝트에 대해 알려주세요..."
                            className="min-h-[120px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      "전송 중..."
                    ) : (
                      <>
                        <Send className="size-4" />
                        메시지 전송
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </PageWrapper>
    </section>
  );
}
