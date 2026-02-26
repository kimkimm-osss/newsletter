const newsData = 
   [
    {
    week: "2026년 2월 4주차",
    date: "February 27, 2026",
    items: [
        {
            category: "Case Study",
            title: "Mitie: 노동 집약적 시설관리 산업을 'AI 기술 플랫폼'으로 전환한 전략",
            desc: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p class="font-bold text-blue-800 mb-1">■ 에이전틱 AI 기반 자율 시설관리</p>
                        드론 점검·자율 보안 로봇·에너지 최적화 에이전트를 통합 운영하는 자율적 시설관리 모델 구축.<br>
                        AI가 일상적 의사결정의 90%를 수행하고 인간 관리자는 예외 사항만 승인하는 '예외 기반 관리' 체계 도입.
                    </div>
                    <div>
                        <p class="font-bold text-blue-800 mb-1">■ 성과 기반 수익 모델 피벗</p>
                        인건비 청구 방식에서 '건물 에너지 15% 절감' 등 성과 기반 계약(Outcome-based Contract)으로의 수익 모델 전환.<br>
                        플랫폼 비종속적 로봇 플릿 관리로 청소 코봇·점검 드론·보안 로봇·잔디깎이 등 다양한 로봇을 단일 체계에서 통합 운영.
                    </div>
                </div>
            `,
            color: "purple",
            link: "https://www.mitie.com/insights-news/insight/a-new-era-of-agentic-ai-and-robotics-will-transform-fm/"
        },
        {
            category: "Politics",
            title: "Wharton: 대법원 IEEPA 관세 위헌 판결 — 잠재적 환급금 최대 $1,750억",
            desc: "연방 대법원 6:3 판결로 IEEPA 기반 관세의 대통령 단독 부과 권한 부정 및 전면 무효화 결정.<br>IEEPA 관세가 전체 관세 수입의 약 50%를 차지, 일일 약 $5억 규모의 징수액 발생 추정.<br>수입업자의 180일 이내 환급 청구 가능성에 따른 최대 $1,750억 재정 충격 전망.",
            color: "blue",
            link: "https://budgetmodel.wharton.upenn.edu/issues/2026/2/20/supreme-court-tariff-ruling-ieepa-revenue-and-potential-refunds"
        },
        {
            category: "Politics",
            title: "스위스, '인구 1,000만 명 상한' 국민투표 6월 확정",
            desc: "최대 정당 SVP 주도, 인구 950만 도달 시 이민 자동 제한 및 1,000만 돌파 시 EU 자유이동 협정 파기 조항 포함.<br>현재 인구 910만 명으로 상한 근접, EU와의 120여 개 양자 협정 폐기 가능성에 따른 유럽 내 긴장 고조.<br>여론조사에서 높은 지지율 확인, 6월 14일 국민투표 결과에 따른 유럽 이민 정책 전반의 파급 효과 주목.",
            color: "blue",
            link: "https://edition.cnn.com/2026/02/12/europe/switzerland-referendum-population-cap-10-million-intl"
        },
        {
            category: "Economy",
            title: "위안화, 달러 대비 3년 만에 최고치 경신",
            desc: "미 대법원 IEEPA 관세 위헌 판결로 중국 수출 수혜 기대감 확대에 따른 위안화 강세 전환.<br>중국 무역 지표 개선 및 글로벌 투자 자금 유입과 맞물린 아시아 통화 시장 변동성 확대.<br>달러 약세 전환 가능성에 따른 신흥국 자산 재평가 및 글로벌 자금 흐름 변화 신호.",
            color: "gray",
            link: "https://www.thestandard.com.hk/market/article/325100/Chinas-yuan-hits-near-3-year-high-on-bets-US-tariff-ruling-will-aid-Chinese-exports"
        },
        {
            category: "Economy",
            title: "Nvidia, Q4 FY2026 매출 $681억 — AI 인프라 수요 폭증에 따른 역대 최대 실적",
            desc: "분기 매출 $681억(YoY +73%), 연간 매출 $2,159억, 순이익 $1,200억 기록 및 시장 예상치 대폭 상회.<br>데이터센터 매출이 전체의 91%($623억) 차지, Blackwell 아키텍처의 본격 양산에 따른 마진 개선(75%).<br>Q1 FY2027 가이던스 $780억 제시, 차세대 Vera Rubin 플랫폼 샘플 출하 개시에 따른 성장 지속 전망.",
            color: "gray",
            link: "https://sahi.com/blogs/nvidia-q4-fy2026-earnings-results-ai-industry-analysis"
        },
        {
            category: "Tech",
            title: "미 국방부, Anthropic에 AI 모델 무제한 접근권 요구 — 윤리 갈등 격화",
            desc: "국방장관 Hegseth의 Anthropic CEO 면담 및 2/27 시한부 최후통첩 전달.<br>AI 모델 Claude의 군사적 '합법적 전 용도' 사용 요구 vs Anthropic의 대규모 시민 감시·완전 자율 무기 사용 거부.<br>거부 시 '공급망 리스크' 업체 지정 또는 국방물자생산법(DPA) 적용 경고, xAI의 Grok 대체 계약 체결 배경.",
            color: "green",
            link: "https://www.chosun.com/english/industry-en/2026/02/25/LSB75RQ6RBHDDAWFB3KIOFN5QA/"
        },
        {
            category: "Energy",
            title: "짐바브웨, 미가공 리튬 정광 수출 전면 금지 — 국제 리튬 가격 급등",
            desc: "아프리카 최대 리튬 생산국 짐바브웨의 리튬 정광 및 원광 수출 즉각 중단 조치 발표.<br>자국 내 가공 산업 육성 및 불법 선적 차단 목적, 중국 리튬 가격 즉시 급등 반응.<br>글로벌 리튬 공급망 차질 우려 및 중국 광산 기업의 현지 가공 전환 가속 전망.",
            color: "orange",
            link: "https://www.bloomberg.com/news/articles/2026-02-26/lithium-prices-jump-after-zimbabwe-bans-concentrate-exports"
        },
        {
            category: "Energy",
            title: "트럼프, 테크기업에 데이터센터 전력 비용 자체 부담 요구",
            desc: "국정연설(SOTU)에서 테크 기업의 자체 발전소 건설 및 전력 비용 자부담 '요금 보호 서약' 발표.<br>AI 데이터센터의 소도시급 전력 소비에 따른 일반 가구 전기요금 상승 우려 대응 목적.<br>구체적 이행 방안 미공개 상태, 다음 주 백악관에서 테크 기업 대표와 공식 서약 서명 예정.",
            color: "orange",
            link: "https://www.nytimes.com/2026/02/25/climate/ai-data-centers-trump-energy-costs.html"
        },
        {
            category: "Texas",
            title: "2026 예비선거 조기투표, 역대 중간선거 기록 경신 — 민주당 투표율 압도",
            desc: "조기투표 7일간 민주당 66.6만 표 vs 공화당 59.4만 표, 총 126만 표로 2024·2020 동기 대비 초과 달성.<br>Harris County(민주당 최대 거점)·Tarrant County(스윙 카운티) 중심의 기록적 투표율 확인.<br>민주당 상원 경선(Crockett vs Talarico) 열기 및 트럼프 행정부에 대한 반발 투표 동력 분석.",
            color: "orange",
            link: "https://www.texastribune.org/2026/02/25/texas-early-voting-turnout-democrats-midterm-election/"
        },
        {
            category: "California",
            title: "'부유세' 저지 연방 법안 발의 — 캘리포니아 자본 유출 갈등 심화",
            desc: "캘리포니아 '2026 억만장자 과세법'(순자산 $10억+ 대상, 자산의 5% 과징금) 11월 주민투표 추진.<br>연방 하원의원 Kiley, 주를 떠난 후에도 소급 과세하는 조항을 금지하는 연방법(Keep Jobs in California Act) 발의.<br>Zuckerberg·Larry Page·Sergey Brin·Larry Ellison·Peter Thiel 등 빅테크 창업자의 캘리포니아 이탈 선언 배경.",
            color: "blue",
            link: "https://kiley.house.gov/posts/rep-kevin-kiley-introduces-bill-to-fight-californias-wealth-tax"
        },
        {
            category: "Etc",
            title: "WEF 글로벌 리스크 보고서 2026: '새로운 경쟁의 시대' 도래",
            desc: "1,300명 이상의 글로벌 전문가 서베이 기반, 지정학적 대립과 경제적 경쟁 심화가 최대 글로벌 위협으로 부상.<br>2년·10년 시계열 분석을 통한 국가 간 갈등·인프라 회복 탄력성·기술 리스크 관리의 핵심 과제 제시.<br>단기(2026)·중기(2028)·장기(2036) 리스크 전망 프레임워크를 활용한 의사결정자용 전략적 가이드 제공.",
            color: "gray",
            link: "https://www.weforum.org/publications/global-risks-report-2026/"
        },
        {
            category: "Etc",
            title: "한국은행, 기준금리 2.5% 6연속 동결 + 성장률 전망 2.0% 상향",
            desc: "2/26 금통위에서 기준금리 연 2.50% 만장일치 동결 결정(2025년 7월 이후 6회 연속).<br>반도체 수출 호조(1월 수출 102.5% 증가)를 근거로 올해 경제성장률 전망 1.8→2.0% 상향 조정.<br>성장률·물가 동시 상향에 따른 '인하 사이클' 사실상 종료 및 연내 동결 기조 강화 전망.",
            color: "gray",
            link: "https://www.chosun.com/economy/economy_general/2026/02/26/RP3JACDJT5GEHKPWXQY2IFJVNI/"
        },
        {
            category: "M&A",
            title: "PwC 글로벌 M&A 트렌드 2026: AI 메가딜이 주도하는 'K자형' 인수합병 시장",
            desc: "2025년 $50억 이상 메가딜 111건(전년 63건 대비 76% 증가), 글로벌 딜 금액 36% 성장 vs 건수 정체의 양극화 구조 심화.<br>AI 인프라 투자 슈퍼사이클이 단기적으로 M&A 자금을 흡수하나, 중기적으로 혁신 슈퍼사이클을 촉발할 딜메이킹 재점화 전망.<br>CEO 41%가 3년 내 대형 인수 계획, 투자자 92%가 기술 전환 자본 확대를 요구하는 AI 중심 전략적 M&A 시대 본격 개막.",
            color: "indigo",
            link: "https://www.pwc.ie/services/deals-advisory/insights/global-ma-industry-trends-outlook-2026.html"
        }
    ]
},
       
     {
        week: "2026년 2월 2주차",
        date: "February 13, 2026",
        items: [
            { 
                category: "Case Study", 
                title: "Built Robotics: 범용성을 버리고 태양광 '수직 계열화'를 선택한 전략 분석", 
                desc: `
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p class="font-bold text-blue-800 mb-1">■ 특수 공정 정복 및 RaaS 모델</p>
                            일반 건설 자율주행 대신 반복 작업이 많은 태양광 부지 '파일링(말뚝 박기)' 공정 집중.<br>
                            수동 작업 대비 3~5배 빠른 속도 및 오차 없는 시공으로 숙련공 부족 문제 해결.<br>
                            장비와 운영 시스템을 통합 제공하여 EPC 업체로부터 안정적 수익을 창출하는 RaaS 모델 구축.
                        </div>
                        <div>
                            <p class="font-bold text-blue-800 mb-1">■ 디지털 트윈 연동 및 투자 시사점</p>
                            GPS 좌표와 토양 상태를 실라우드로 즉시 전송하여 시공 현황을 실시간 데이터로 관리.<br>
                            범용 로봇보다 특정 산업의 병목 현상을 해결하는 로봇의 빠른 현금 흐름 창출 사례 입증.<br>
                            '니치 자동화 → 수직 통합 → RaaS 수익 모델'로 이어지는 실용적 로봇 비즈니스 경로 제시.
                        </div>
                    </div>
                `, 
                color: "purple", 
                link: "https://www.builtrobotics.com/" 
            },
            { 
                category: "Politics", 
                title: "미 하원, 트럼프 캐나다 관세 철회 결의안 가속", 
                desc: "공화당 의원 6명의 이탈로 트럼프 행정부의 캐나다 긴급관세 철회 결의안 하원 통과.<br>관세 정책에 대한 의회의 이례적인 견제구 역할 및 정치적 긴장감 고조.<br>대통령 거부권 행사 예상에 따른 실질적 효력 제한 가능성 상존.", 
                color: "blue", 
                link: "https://www.theguardian.com/us-news/2026/feb/11/us-house-vote-trump-canada-tariffs" 
            },
            { 
                category: "Politics", 
                title: "베네수엘라, 마두로 축출 후 첫 대규모 반정부 시위", 
                desc: "임시 대통령 체제 하의 사면법 심의 지연에 따른 야당 측 대규모 시위 발생.<br>정치범 구금 해제 요구와 미·베네수엘라 간 석유 생산 협력 논의 병행.<br>축출 이후에도 지속되는 내부 권력 투쟁 및 급변하는 외교 관계.", 
                color: "blue", 
                link: "https://www.aljazeera.com/news/2026/2/12/protesters-march-in-venezuela-as-national-assembly-weighs-amnesty-bill" 
            },
            { 
                category: "Economy", 
                title: "NY Fed: 관세 비용 90% 미국 기업 및 소비자 부담", 
                desc: "뉴욕 연준 보고서의 관세 비용 대부분이 미국 내수 경제로 전가된다는 분석.<br>가구당 연간 최대 $1,300 비용 증가 전망 및 인플레이션 압박 우려.<br>연준의 금리 인하 시점 결정에 중대한 변수로 작용할 가능성 대두.", 
                color: "gray", 
                link: "https://www.reuters.com/world/us/ny-fed-report-says-americans-pay-almost-all-trumps-tariffs-2026-02-12/" 
            },
            { 
                category: "Tech", 
                title: "빅테크 4사, AI 인프라 역대 최대 6,500억 달러 투자", 
                desc: "데이터센터 및 컴퓨팅 자원 확보를 위한 아마존, 구글 등 빅테크의 공격적 설비투자.<br>국가 GDP 규모에 맞먹는 자본 투입과 업계 내 실존적 경쟁 심화.<br>대규모 투자에 따른 수익성 증명 압박 및 비즈니스 모델 최적화 집중.", 
                color: "green", 
                link: "https://www.cnbc.com/2026/02/06/google-microsoft-meta-amazon-ai-cash.html" 
            },
            { 
                category: "Tech", 
                title: "Waymo, 6세대 자율주행 투입 및 확장", 
                desc: "주당 100만 회 유료 운행 목표 달성을 위한 6세대 완전 무인 기술 도입.<br>올해 20개 이상 도시로의 서비스 확장 및 160억 달러 규모 자금 투입.<br>물류 및 운송 산업 전반의 무인화 상용화 가속화 기대.", 
                color: "green", 
                link: "https://waymo.com/blog/2026/02/ro-on-6th-gen-waymo-driver" 
            },
            { 
                category: "Energy", 
                title: "트럼프 행정부, EPA 온실가스 위험성 판정 폐지", 
                desc: "자동차 및 발전소 배출 규제의 법적 근거가 된 기후 규제 근간 공식 폐기.<br>차량당 비용 절감 주장과 조기 사망 증가를 우려하는 환경단체의 대립 가속.<br>미국 내 환경 정책의 대대적 전환 및 연방 대법원 소송 예고.", 
                color: "orange", 
                link: "https://www.bbc.com/news/articles/cn0zdd7yl4vo" 
            },
            { 
                category: "Robotics", 
                title: "Apptronik, 5.2억 달러 유치 및 휴머노이드 경쟁 과열", 
                desc: "제조 및 물류용 'Apollo' 로봇 대량 생산을 위한 구글, 벤츠 등의 대규모 투자.<br>기업가치 55억 달러 달성 및 범용 휴머노이드 시장 내 자금 유입 활발.<br>인간 형태 로봇의 상용화를 향한 빅테크 기업 간의 기술 및 자본 경쟁 가속.", 
                color: "purple", 
                link: "https://www.therobotreport.com/apptronik-brings-in-another-520m-to-ramp-up-apollo-production/" 
            },
            { 
                category: "Texas", 
                title: "텍사스 조선소 7.3억 달러 확장 및 일자리 창출", 
                desc: "북극 쇄빙선 건조 계약과 연동된 조선 시설 확장 및 2,400개 일자리 창출 계획.<br>텍사스 방위산업 생태계 강화 및 주 정부 보조금 지원을 통한 제조업 활성화.<br>걸프만 지역의 전략적 제조 거점화 및 지역 경제 성장 가속.", 
                color: "orange", 
                link: "https://gov.texas.gov/news/post/governor-abbott-announces-davie-defense-expansion-in-texas" 
            },
            { 
                category: "California", 
                title: "캘리포니아, 주택담보대출 구제 프로그램 4배 확대", 
                desc: "뉴섬 주지사의 사별 배우자 및 생존자를 위한 모기지 지원금 대폭 증액 발표.<br>주거 취약 계층의 주택 유지 비용 부담 완화 및 커뮤니티 안정화 정책.<br>가파른 생활비 상승에 대응하기 위한 주 정부 차원의 복지 예산 투입 가속.", 
                color: "blue", 
                link: "https://www.gov.ca.gov/2026/02/12/governor-newsom-announces-major-expansion-of-mortgage-relief-program-with-a-four-fold-increase-in-payments-to-survivors/" 
            },
            { 
                category: "Etc", 
                title: "연준, 기준금리 동결 및 인플레이션 경계 지속", 
                desc: "FOMC의 기준금리 동결 결정 및 하반기 인하 가능성을 열어둔 신중한 입장.<br>30년 모기지 금리의 3년래 최저치 근접에 따른 부동산 시장 영향 주목.<br>무역 정책의 물가 영향 분석을 통한 연준의 향후 통화 정책 방향 설정.", 
                color: "gray", 
                link: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260128a.htm" 
            },
            { 
                category: "M&A", 
                title: "금융 및 에너지 산업 내 역대급 대형 합병 가속", 
                desc: "Nuveen의 Schroders 인수를 통한 2.5조 달러 규모 세계 최대 자산운용사 탄생.<br>셰일 역사상 최대 규모인 Devon Energy와 Coterra Energy의 580억 달러 합병.<br>Symbotic의 Fox Robotics 인수로 물류 자동화 풀라인업 확보 및 플랫폼 전략 강화.", 
                color: "indigo", 
                link: "https://www.reuters.com/business/nuveen-agrees-buy-schroders-135-billion-2026-02-12/" 
            }
        ]
    },
    {
        week: "2026년 1월 4주차",
        date: "January 30, 2026",
        items: [
            { 
                category: "Case Study", 
                title: "현대차그룹 CES 2026: 제조사에서 '로봇 서비스 플랫폼'으로의 대전환", 
                desc: `
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p class="font-bold text-blue-800 mb-1">■ RaaS(Robotics-as-a-Service) 구독 모델</p>
                            고가의 휴머노이드 로봇 판매 대신 소프트웨어 및 유지보수 포함 월 구독 서비스 전환.<br>
                            고객사 초기 비용 부담 제거 및 지속 가능한 점진적 반복 매출(Recurring Revenue) 구조 확보.
                        </div>
                        <div>
                            <p class="font-bold text-blue-800 mb-1">■ 로봇 파운드리 및 Physical AI 생태계</p>
                            반도체 모델을 이식한 고객 사양 로봇 위탁 생산 비즈니스 도입 및 글로벌 생산 기지화.<br>
                            Google Gemini 결합으로 자연어 명령 추론 및 복잡한 과업 수행이 가능한 지능형 노동력 제공.
                        </div>
                    </div>
                `, 
                color: "purple", 
                link: "https://www.hyundai.com/worldwide/ko/brand-journal/mobility-solution/ces-2026-robotics-mediaday" 
            },
            { 
                category: "California", 
                title: "인구 유출로 인한 정치적 영향력 축소", 
                desc: "높은 생활비로 인한 인구 유출로 2030년 연방 하원 의석 4석 상실 전망.<br>역사상 최대 규모의 정치적 영향력 축소 및 권력 중심축의 남부 이동.<br>반면 텍사스는 4석 추가 확보 등 미국 내 권력의 선벨트 지역 집중 시사.", 
                color: "blue", 
                link: "https://abc7news.com/post/california-projected-lose-4-congressional-seats-2030-census-population-decline/18500791/" 
            },
            { 
                category: "California", 
                title: "캘리포니아, 억만장자 타겟 '부유세' 법안 논란", 
                desc: "자산 10억 달러 이상 부유층 대상 순자산 1% 과세 추진.<br>주 이탈 시에도 향후 수년간 세금 징수 조항을 포함한 강력한 조세 정책.<br>부유층 엑소더스 가속화 우려 및 조세 저항에 따른 사회적 갈등 심화.", 
                color: "blue", 
                link: "https://www.cnbc.com/2026/01/08/california-wealth-tax-proposal-leaves-billionaires-with-little-way-out.html" 
            },
            { 
                category: "Texas", 
                title: "텍사스, 주거비 급등으로 인한 '성장의 역설' 직면", 
                desc: "소득 및 교육 수준 향상에도 불구하고 주거비 상승폭의 급격한 초과.<br>과거 '저비용 고효율' 거주지로서의 텍사스 경쟁력 감소 우려.<br>급격한 인구 유입 지속에 따른 주택 공급 부족 및 인프라 과부하 문제 대두.", 
                color: "orange", 
                link: "https://www.texastribune.org/2026/01/29/texas-census-housing-incomes/" 
            },
            { 
                category: "Texas", 
                title: "겨울 폭풍 '펀(Fern)' 강습", 
                desc: "강력한 겨울 폭풍 '펀' 발생으로 인한 북부 지역 폭설 및 빙판길 사고 속출.<br>동부 지역 수만 가구 전력 차단 등 극심한 한파 피해 발생.<br>주요 인프라 마비에 따른 지역 주민 안전 주의보 발령.", 
                color: "orange", 
                link: "https://www.bbc.com/news/articles/c1klrmz90yjo" 
            },
            { 
                category: "Etc", 
                title: "Standard Chartered: Weekly Market View", 
                desc: "연준 파월 의장에 대한 압박 및 금리 인하 기대감에 따른 시장 변동성 확대.<br>오는 3월 25bp 금리 인하 전망에 따른 투자자 관심 집중.<br>글로벌 통화 정책 변화에 따른 선제적 시장 대응 전략 필요.", 
                color: "gray", 
                link: "https://www.sc.com/en/uploads/sites/66/content/docs/wm-weekly-market-view-the-case-for-lower-fed-rates-16-january-2026.pdf" 
            },
            { 
                category: "Etc", 
                title: "PwC: 2026 M&A Outlook", 
                desc: "AI 인프라 확보를 위한 대규모 딜의 올해 M&A 시장 주도 예상.<br>기술 기업 중심의 자본 시장 재편 및 전략적 인수 합병 가속화.<br>글로벌 기업들의 AI 경쟁력 강화를 위한 투자 포트폴리오 다변화.", 
                color: "gray", 
                link: "https://www.pwc.com/gx/en/services/deals/trends.html" 
            },
            { 
                category: "Politics", 
                title: "미국, 파리 협정 탈퇴 및 국제기구 자원 중단", 
                desc: "1월 27일부 파리 기후 협정 탈퇴 공식 발효.<br>UNFCCC 및 GCF 등 주요 국제기구에 대한 자원 투입 중단.<br>트럼프 행정부의 '에너지 우선' 정책에 따른 고립주의 노선 심화.", 
                color: "blue", 
                link: "https://www.chosun.com/international/international_general/2026/01/08/6JGZMLZS3FFBHISBRY4JN5253E/" 
            },
            { 
                category: "Economy", 
                title: "IMF, 2026년 세계 성장률 3.3% 상향 전망", 
                desc: "무역 갈등 상황 속 AI 투자 및 민간 경제 적응력 주목.<br>기존 전망치 대비 글로벌 성장률 수치 상향 조정 발표.<br>글로벌 경기 회복세 지속에 대한 긍정적 시장 신호 전달.", 
                color: "gray", 
                link: "https://www.imf.org/en/publications/weo/issues/2026/01/19/world-economic-outlook-update-january-2026" 
            },
            { 
                category: "Tech", 
                title: "다보스 포럼, 'AI 수익 창출의 해' 선언", 
                desc: "시스코·IBM 등 주요 빅테크 기업들의 AI 수익 모델 전격 공개.<br>대규모 AI 투자에 대한 실질적 자본 회수 구간 진입 판단.<br>단순 기술 경쟁 넘어선 비즈니스 효율화 및 수익 극대화 집중.", 
                color: "green", 
                link: "https://www.bloomberg.com/news/articles/2026-01-22/davos-crowd-focuses-on-ai-returns-after-year-of-heavy-investments" 
            }
        ]
    }
];
