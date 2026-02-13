const newsData = [
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
