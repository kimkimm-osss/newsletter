const newsData = [
    {
        week: "2026년 2월 1주차",
        date: "February 4, 2026",
        items: [
            { 
                category: "Politics", 
                title: "미국-인도 무역 협정 타결 및 관세 18% 인하", 
                desc: "트럼프 행정부-인도 협정으로 관세 인하 및 러시아산 석유 수입 중단 합의.", 
                color: "blue", 
                link: "https://www.vietnam.vn/ko/diem-tin-kinh-te-the-gioi-noi-bat-ngay-3-2-2026" 
            },
            { 
                category: "Economy", 
                title: "중국 인민은행, 경기 부양 위한 통화 완화 시사", 
                desc: "1월 PMI 지수 하락에 따른 내수 안정을 위한 금리 및 지준율 인하 가능성 고조.", 
                color: "gray", 
                link: "https://www.vietnam.vn/ko/diem-tin-kinh-te-the-gioi-noi-bat-ngay-3-2-2026" 
            },
            { 
                category: "Tech", 
                title: "SpaceX와 xAI, 1조 2,500억 달러 규모 합병", 
                desc: "머스크의 두 거대 기업 합병으로 우주 기반 AI 연산 및 기술 혁신 가속화 선언.", 
                color: "green", 
                link: "https://www.vietnam.vn/ko/diem-tin-kinh-te-the-gioi-noi-bat-ngay-3-2-2026" 
            },
            { 
                category: "Energy", 
                title: "AI 데이터 센터 전력난, 에너지 병목 현상 심화", 
                desc: "2026년 AI 인프라 확장의 핵심 변수로 에너지 수급 불균형 문제 부상.", 
                color: "orange", 
                link: "https://etcjournal.com/2026/02/05/ai-in-february-2026-three-critical-global-decisions-cooperation-or-constitutional-clash/" 
            },
            { 
                category: "Robotics", 
                title: "가정용 휴머노이드 로봇 보급 가속화 전망", 
                desc: "다보스 포럼에서 '1인 1로봇' 시대 예고 및 가사·산업용 로봇 기술 급진전.", 
                color: "purple", 
                link: "https://www.weforum.org/stories/2026/01/live-from-davos-2026-what-to-know-on-day-4/" 
            },
            { 
                category: "Texas", 
                title: "민주당, 텍사스 보궐선거 승리로 의석 차 축소", 
                desc: "18선거구 보궐선거 메네피 후보 당선. 공화당과의 하원 의석 차 4석으로 축소.", 
                color: "orange", 
                link: "https://www.youtube.com/watch?v=Gf95wMYzD8o" 
            },
            { 
                category: "Texas", 
                title: "텍사스 경제 대시보드 공개, 무역 허브 부각", 
                desc: "AllianceTexas 등 주요 포트 중심 $163억 규모 GDP 기여도 발표.", 
                color: "orange", 
                link: "https://comptroller.texas.gov/economy/fiscal-notes/economics/2026/texstat-story/" 
            },
            { 
                category: "California", 
                title: "캘리포니아 노동계, AI 규제 강화 법안 압박", 
                desc: "노동연맹, 일자리 보호를 위해 AI 사용 제한 및 해고 사전 통보 등 법제화 요구.", 
                color: "blue", 
                link: "https://calmatters.org/economy/technology/2026/02/newsom-needs-more-ai-regulation-to-be-president-say-unions/" 
            },
            { 
                category: "California", 
                title: "샌프란시스코 고교 결핵 확산 긴급 대응", 
                desc: "아치비숍 리어던 고교 활동성 결핵 환자 발생에 따른 보건국 긴급 역학 조사.", 
                color: "blue", 
                link: "https://www.youtube.com/watch?v=21Pr80fM1Ns" 
            },
            { 
                category: "Business", 
                title: "비즈니스 스포트라이트: 팔란티어 역대 실적 기록", 
                desc: "미국 내 AIP 도입 확산으로 전년 대비 매출 70% 성장. AI 수익성 증명.", 
                color: "indigo", 
                link: "https://it.donga.com/108382/" 
            }
        ]
    },
    {
        week: "2026년 2월 2주차",
        date: "February 11, 2026",
        items: [
            { 
                category: "Politics", 
                title: "트럼프 행정부, 캐나다·멕시코·중국 대상 추가 관세 서명", 
                desc: "취임 직후 멕시코/캐나다 25%, 중국 10% 추가 관세 부과 행정명령 서명. 글로벌 공급망 긴장 고조.", 
                color: "blue", 
                link: "https://www.bbc.com/news/articles/cly2x44321zo" 
            },
            { 
                category: "Economy", 
                title: "미 연준(Fed), 기준금리 동결 및 신중한 기조 유지", 
                desc: "1월 FOMC에서 금리 4.25~4.50% 동결. 파월 의장은 인플레이션 둔화 확인 전까지 신중론 고수.", 
                color: "gray", 
                link: "https://www.cnbc.com/2025/01/29/fed-meeting-january-2025-interest-rate-decision.html" 
            },
            { 
                category: "Tech", 
                title: "중국 딥시크(DeepSeek) AI 공개와 미국 기술주 충격", 
                desc: "저비용 고성능 모델 'DeepSeek-R1' 공개로 엔비디아 등 급락. AI 거품론과 효율성 경쟁 심화.", 
                color: "green", 
                link: "https://www.reuters.com/technology/artificial-intelligence/china-based-deepseek-releases-ai-model-challenging-us-dominance-2025-01-27/" 
            },
            { 
                category: "Energy", 
                title: "미국 LNG 수출 프로젝트 승인 재개", 
                desc: "바이든 시절의 수출 보류 조치 해제. 텍사스 및 루이지애나 중심 천연가스 프로젝트 탄력.", 
                color: "orange", 
                link: "https://apnews.com/article/lng-export-pause-energy-climate-biden-trump-23719711677610127506225446545167" 
            },
            { 
                category: "Robotics", 
                title: "피규어 AI 등 휴머노이드 로봇 상용화 가속", 
                desc: "BMW 공장에 투입된 피규어 AI 성과 및 테슬라 옵티머스 업데이트로 제조 현장 도입 속도전.", 
                color: "purple", 
                link: "https://techcrunch.com/2025/01/22/figure-shows-off-its-newest-humanoid-robot-working-at-a-bmw-plant/" 
            },
            { 
                category: "Texas", 
                title: "텍사스 주정부 vs NGO 국경 갈등 및 TXSE 추진", 
                desc: "애벗 주지사의 NGO 조사 지시로 법적 충돌 격화. 텍사스 증권거래소(TXSE) 설립 추진 구체화.", 
                color: "orange", 
                link: "https://www.texastribune.org/2025/01/30/greg-abbott-texas-border-ngos/" 
            },
            { 
                category: "California", 
                title: "캘리포니아 '트럼프 프루핑' 입법 및 테크 구조조정", 
                desc: "뉴섬 주지사의 연방 정책 대응 특별 회기 소집. 빅테크 기업들의 AI 투자 확보 위한 인력 감축 지속.", 
                color: "blue", 
                link: "https://calmatters.org/politics/2024/11/california-trump-proofing-special-session/" 
            },
            { 
                category: "Business", 
                title: "딥시크 쇼크와 효율성 중심 AI 패러다임 전환", 
                desc: "저비용 고효율 모델의 등장으로 미 빅테크 전략이 'GPU 물량전'에서 '모델 최적화'로 선회.", 
                color: "indigo", 
                link: "https://www.bloomberg.com/news/articles/2025-01-27/deepseek-s-ai-breakthrough-sparks-selloff-in-chip-stocks" 
            }
        ]
    }
];
