const newsData = [
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
        week: "2026년 2월 1주차",
        date: "February 4, 2026",
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
