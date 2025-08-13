import { TrendingUp, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center gradient-subtle"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 rounded-full text-sm font-medium mb-2">
              고소득 개인사업자를 위한 노후대책
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-primary">노란양산</span> 투자조합
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              개인투자조합을 통한 벤처기업 투자로
              <br />
              <strong className="text-foreground">절세</strong>와{" "}
              <strong className="text-foreground">투자수익</strong>을 동시에
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="card-elegant text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">투자 수익</h3>
              <p className="text-muted-foreground">
                글로벌 포트폴리오를 통한 안정적인 수익 추구
              </p>
            </div>
            <div className="card-elegant text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">세제 혜택</h3>
              <p className="text-muted-foreground">
                벤처기업 투자를 통한 소득공제 혜택
              </p>
            </div>
            <div className="card-elegant text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">공동 투자</h3>
              <p className="text-muted-foreground">
                최대 49인까지 함께하는 안전한 투자
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              투자 문의하기
            </Button>
            <Button
              variant="trust"
              size="lg"
              onClick={() => scrollToSection("structure")}
            >
              자세히 보기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
