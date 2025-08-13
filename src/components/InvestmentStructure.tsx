import { ArrowRight, Users, Building2, TrendingUp } from "lucide-react";

const InvestmentStructure = () => {
  return (
    <section id="investment" className="py-20 bg-trust-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            투자 구조
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* 투자 흐름도 */}
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="group relative">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 text-center relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary/30">
                  {/* 배경 장식 */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/5 rounded-full opacity-50"></div>
                  <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-primary/5 rounded-full opacity-30"></div>

                  <div className="relative z-10">
                    <div className="bg-primary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-all duration-300">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      투자자들
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      고소득 개인사업자
                    </p>
                    <div className="space-y-3">
                      <div className="bg-primary/10 p-3 rounded-lg backdrop-blur-sm border border-primary/20">
                        <span className="font-medium">매년 3,000만원 투자</span>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-lg backdrop-blur-sm border border-primary/20">
                        <span className="font-medium">5년 이상 투자 유지</span>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-lg backdrop-blur-sm border border-primary/20">
                        <span className="font-medium">소득공제 혜택</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="bg-gradient-to-br from-trust/5 to-trust/10 border border-trust/20 rounded-2xl p-8 text-center relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-trust/30">
                  {/* 배경 장식 */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-trust/5 rounded-full opacity-50"></div>
                  <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-trust/5 rounded-full opacity-30"></div>

                  <div className="relative z-10">
                    <div className="bg-trust/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-trust/30 transition-all duration-300">
                      <Building2 className="h-10 w-10 text-trust" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      노란양산 투자조합들
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      개인투자조합 (49인 이하)
                    </p>
                    <div className="space-y-3">
                      <div className="bg-trust/10 p-3 rounded-lg backdrop-blur-sm border border-trust/20">
                        <span className="font-medium">투자금 관리</span>
                      </div>
                      <div className="bg-trust/10 p-3 rounded-lg backdrop-blur-sm border border-trust/20">
                        <span className="font-medium">
                          매 2년마다 새로 결성
                        </span>
                      </div>
                      <div className="bg-trust/10 p-3 rounded-lg backdrop-blur-sm border border-trust/20">
                        <span className="font-medium">
                          5년 이후 투자금 회수
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="bg-gradient-to-br from-success/5 to-success/10 border border-success/20 rounded-2xl p-8 text-center relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-success/30">
                  {/* 배경 장식 */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-success/5 rounded-full opacity-50"></div>
                  <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-success/5 rounded-full opacity-30"></div>

                  <div className="relative z-10">
                    <div className="bg-success/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-success/30 transition-all duration-300">
                      <TrendingUp className="h-10 w-10 text-success" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      노란양산 주식회사들
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      벤처기업 등록 회사
                    </p>
                    <div className="space-y-3">
                      <div className="bg-success/10 p-3 rounded-lg backdrop-blur-sm border border-success/20">
                        <span className="font-medium">혁신적인 사업 개발</span>
                      </div>
                      <div className="bg-success/10 p-3 rounded-lg backdrop-blur-sm border border-success/20">
                        <span className="font-medium">
                          매 4년마다 새로 창업
                        </span>
                      </div>
                      <div className="bg-success/10 p-3 rounded-lg backdrop-blur-sm border border-success/20">
                        <span className="font-medium">
                          잉여 자금은 안전한 글로벌 자산에 투자
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 화살표들을 카드 사이 중간으로 이동 */}
            <div className="hidden md:flex absolute top-1/2 left-1/3 transform -translate-y-1/2 -translate-x-1/2 z-20 justify-center items-center">
              <div className="bg-primary rounded-full p-3 shadow-lg border-4 border-background">
                <ArrowRight className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <div className="hidden md:flex absolute top-1/2 left-2/3 transform -translate-y-1/2 -translate-x-1/2 z-20 justify-center items-center">
              <div className="bg-trust rounded-full p-3 shadow-lg border-4 border-background">
                <ArrowRight className="h-6 w-6 text-trust-foreground" />
              </div>
            </div>
          </div>

          {/* 투자 대상 */}
          <div className="bg-card rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8">
              투자 대상 포트폴리오
            </h3>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              {/* 벤처기업 */}
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 flex flex-col">
                <h4 className="text-xl font-bold mb-4 text-primary">
                  벤처기업
                </h4>
                <div className="grid grid-cols-2 gap-3 flex-1">
                  <div className="bg-background/80 p-3 rounded-lg text-center border border-primary/10">
                    <div className="text-lg mb-1">💻</div>
                    <span className="text-sm font-medium">소프트웨어 개발</span>
                  </div>
                  <div className="bg-background/80 p-3 rounded-lg text-center border border-primary/10">
                    <div className="text-lg mb-1">🦷</div>
                    <span className="text-sm font-medium">바이오(덴탈)</span>
                  </div>
                  <div className="bg-background/80 p-3 rounded-lg text-center border border-primary/10">
                    <div className="text-lg mb-1">🤖</div>
                    <span className="text-sm font-medium">AI 서비스</span>
                  </div>
                  <div className="bg-background/80 p-3 rounded-lg text-center border border-primary/10">
                    <div className="text-lg mb-1">💳</div>
                    <span className="text-sm font-medium">핀테크</span>
                  </div>
                  <div className="bg-background/80 p-3 rounded-lg text-center border border-primary/10">
                    <div className="text-lg mb-1">🛒</div>
                    <span className="text-sm font-medium">이커머스 플랫폼</span>
                  </div>
                  <div className="bg-background/80 p-3 rounded-lg text-center border border-primary/10">
                    <div className="text-lg mb-1">🍽️</div>
                    <span className="text-sm font-medium">푸드테크</span>
                  </div>
                  <div className="bg-background/80 p-3 rounded-lg text-center border border-primary/10">
                    <div className="text-lg mb-1">📱</div>
                    <span className="text-sm font-medium">IoT 솔루션</span>
                  </div>
                  <div className="bg-background/80 p-3 rounded-lg text-center border border-primary/10">
                    <div className="text-lg mb-1">🌱</div>
                    <span className="text-sm font-medium">농업기술</span>
                  </div>
                  <div className="bg-background/80 p-3 rounded-lg text-center border border-primary/10">
                    <div className="text-lg mb-1">🏭</div>
                    <span className="text-sm font-medium">3D프린팅/제조</span>
                  </div>
                  <div className="bg-background/80 p-3 rounded-lg text-center border border-primary/10 transition-all hover:shadow-md hover:border-primary/20">
                    <div className="text-xl mb-1">💡</div>
                    <span className="text-sm font-medium">
                      기타 혁신 아이템
                    </span>
                  </div>
                </div>
              </div>

              {/* 투자자산 */}
              <div className="bg-success/5 p-6 rounded-xl border border-success/20 flex flex-col">
                <h4 className="text-xl font-bold mb-4 text-success">
                  투자자산
                </h4>
                <div className="space-y-4 flex-1">
                  <div className="bg-background/80 p-4 rounded-lg text-center border border-success/10">
                    <div className="text-2xl mb-2">🇺🇸</div>
                    <h5 className="font-semibold">미국 주식/지수</h5>
                  </div>
                  <div className="bg-background/80 p-4 rounded-lg text-center border border-success/10">
                    <div className="text-2xl mb-2">💰</div>
                    <h5 className="font-semibold">미국 채권</h5>
                  </div>
                  <div className="bg-background/80 p-4 rounded-lg text-center border border-success/10">
                    <div className="text-2xl mb-2">🥇</div>
                    <h5 className="font-semibold">금/원자재</h5>
                  </div>
                  <div className="bg-background/80 p-4 rounded-lg text-center border border-success/10">
                    <div className="text-2xl mb-2">₿</div>
                    <h5 className="font-semibold">비트코인 ETF</h5>
                  </div>
                  <div className="bg-background/80 p-4 rounded-lg text-center border border-success/10">
                    <div className="text-2xl mb-2">📈</div>
                    <h5 className="font-semibold">
                      그 외 안정적이거나 수익률 높은 자산
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentStructure;
