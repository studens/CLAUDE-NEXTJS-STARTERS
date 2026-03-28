import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Contact } from "@/components/sections/contact";
import { CTA } from "@/components/sections/cta";

// 메인 랜딩 페이지
// 서버 컴포넌트로 각 섹션을 조립
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
