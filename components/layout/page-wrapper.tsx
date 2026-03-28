import { cn } from "@/lib/utils";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

// 공통 max-width 컨테이너 컴포넌트
// 모든 섹션에서 일관된 좌우 여백을 적용
export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
