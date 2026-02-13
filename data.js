const newsData = [
    {
        week: "2026년 2월 1주차",
        date: "February 4, 2026",
        items: [
            { 
                category: "Case Study", 
                title: "현대차그룹 CES 2026: 제조사에서 '로봇 서비스 플랫폼'으로의 대전환", 
                desc: "2026년 1월 CES에서 '로봇 서비스(RaaS)' 선언 및 전통적 제조 모델 탈피.<br><br>고객사 비용 부담 완화 및 안정적 반복 매출 구조를 확보한 RaaS 구독 모델 도입.<br><br>고객 사양 로봇을 위탁 생산하는 세계 최초 '로봇 파운드리' 비즈니스 모델 구축.<br><br>Google Gemini 결합으로 자연어 명령 추론 및 과업 수행이 가능한 지능형 노동력 제공.", 
                color: "purple", 
                link: "https://www.hyundai.com/worldwide/ko/brand-journal/mobility-solution/ces-2026-robotics-mediaday" 
            },
            { 
                category: "California", 
                title: "인구 유출로 인한 정치적 영향력 축소", 
                desc: "높은 생활비로 인한 인구 유출로 2030년 연방 하원 의석 4석 상실 전망.<br><br>역사상 최대 규모의 정치적 영향력 축소 및 권력 중심축의 이동.<br><br>반면 텍사스는 4석 추가 확보 등 미국 내 권력의 남부 선벨트 이동 시사.", 
                color: "blue", 
                link: "https://abc7news.com/post/california-projected-lose-4-congressional-seats-2030-census-population-decline/18500791/" 
            },
            { 
                category: "Texas", 
                title: "겨울 폭풍 '펀(Fern)' 강습", 
                desc: "강력한 겨울 폭풍 '펀' 발생으로 인한 북부 지역 폭설 및 빙판길 사고 속출.<br><br>동부 지역 수만 가구 전력 차단 등 극심한 한파 피해 발생.<br><br>주요 인프라 마비에 따른 지역 주민 안전 주의보 발령.", 
                color: "orange", 
                link: "https://www.bbc.com/news/articles/c1klrmz90yjo" 
            },
            { 
                category: "Etc", 
                title: "Standard Chartered: Weekly Market View", 
                desc: "연준 파월 의장에 대한 압박 및 금리 인하 기대감에 따른 시장 변동성 확대.<br><br>오는 3월 25bp 금리 인하 전망에 따른 투자자 관심 집중.<br><br>글로벌 통화 정책 변화에 따른 선제적 시장 대응 전략 필요.", 
                color: "gray", 
                link: "https://www.sc.com/en/uploads/sites/66/content/docs/wm-weekly-market-view-the-case-for-lower-fed-rates-16-january-2026.pdf" 
            },
            { 
                category: "Etc", 
                title: "PwC: 2026 M&A Outlook", 
                desc: "AI 인프라 확보를 위한 대규모 딜의 올해 M&A 시장 주도 예상.<br><br>기술 기업 중심의 자본 시장 재편 및 전략적 인수 합병 가속화.<br><br>글로벌 기업들의 AI 경쟁력 강화를 위한 투자 포트폴리오 다변화.", 
                color: "gray", 
                link: "https://www.pwc.com/gx/en/services/deals/trends.html" 
            },
            { 
                category: "Politics", 
                title: "미국, 파리 협정 탈퇴 및 국제기구 자원 중단", 
                desc: "1월 27일부 파리 기후 협정 탈퇴 공식 발효.<br><br>UNFCCC 및 GCF 등 주요 국제기구에 대한 자원 투입 중단.<br><br>트럼프 행정부의 '에너지 우선' 정책에 따른 고립주의 노선 심화.", 
                color: "blue", 
                link: "https://www.chosun.com/international/international_general/2026/01/08/6JGZMLZS3FFBHISBRY4JN5253E/" 
            },
            { 
                category: "Economy", 
                title: "IMF, 2026년 세계 성장률 3.3% 상향 전망", 
                desc: "무역 갈등 상황 속 AI 투자 및 민간 경제 적응력 주목.<br><br>기존 전망치 대비 글로벌 성장률 수치 상향 조정 발표.<br><br>글로벌 경기 회복세 지속에 대한 긍정적 시장 신호 전달.", 
                color: "gray", 
                link: "https://www.imf.org/en/publications/weo/issues/2026/01/19/world-economic-outlook-update-january-2026" 
            },
            { 
                category: "Tech", 
                title: "다보스 포럼, 'AI 수익 창출의 해' 선언", 
                desc: "시스코·IBM 등 주요 빅테크 기업들의 AI 수익 모델 전격 공개.<br><br>대규모 AI 투자에 대한 실질적 자본 회수 구간 진입 판단.<br><br>단순 기술 경쟁을 넘어 비즈니스 효율화 및 수익 극대화 집중.", 
                color: "green", 
                link: "https://www.bloomberg.com/news/articles/2026-01-22/davos-crowd-focuses-on-ai-returns-after-year-of-heavy-investments" 
            }
        ]
    }
];
