import { Calculator, Globe, Calendar, TrendingUp } from "lucide-react";

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            투자 혜택
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            벤처기업육성에 관한 특별법에 근거한 세제 혜택과 글로벌 포트폴리오
            투자 기회
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="card-elegant text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Calculator className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">소득공제</h3>
            <p className="text-muted-foreground">
              벤처기업 투자에 따른 소득공제 혜택으로 절세 효과
            </p>
          </div>

          <div className="card-elegant text-center">
            <div className="bg-success/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-4">벤처기업 투자</h3>
            <p className="text-muted-foreground">
              혁신 기업 직접 투자를 통한 성장 기회 확보
            </p>
          </div>

          <div className="card-elegant text-center">
            <div className="bg-trust/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Globe className="h-8 w-8 text-trust" />
            </div>
            <h3 className="text-xl font-bold mb-4">글로벌 투자</h3>
            <p className="text-muted-foreground">
              미국 주식, 채권, 금, 비트코인 등 다양한 자산에 분산 투자
            </p>
          </div>

          <div className="card-elegant text-center">
            <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-4">장기 안정성</h3>
            <p className="text-muted-foreground">
              5년 이상의 장기 투자로 안정적인 자산 성장 추구
            </p>
          </div>
        </div>

        {/* 상세 설명 */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">
              투자 프로세스
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full text-primary-foreground w-8 h-8 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    개인투자조합 매2년마다 결성
                  </h4>
                  <p className="text-muted-foreground">
                    최대 49인까지 투자자 모집, 매년 3,000만원씩 투자
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full text-primary-foreground w-8 h-8 flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-2">벤처기업에 투자</h4>
                  <p className="text-muted-foreground">
                    벤처기업에 투자하여 소득공제 혜택
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full text-primary-foreground w-8 h-8 flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    혁신 사업 & 글로벌 투자
                  </h4>
                  <p className="text-muted-foreground">
                    벤처기업은 혁신 사업을 전개하고 잉여 자본은 글로벌 자산에
                    분산 투자
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full text-primary-foreground w-8 h-8 flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-2">수익 실현</h4>
                  <p className="text-muted-foreground">
                    5년 후 벤처기업에서 자사주 매입하거나 제3자에게 지분
                    매각하여 투자금 및 수익금 회수
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
