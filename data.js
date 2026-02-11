const newsData = [
    {
        week: "2026년 2월 1주차",
        date: "February 4, 2026",
        items: [
            { 
                category: "Politics", 
                title: "미국-인도 무역 협정 타결 및 관세 18% 인하", 
                desc: "트럼프 행정부와 인도의 협정으로 관세가 18%로 인하되며 러시아산 석유 수입 중단 합의.", 
                color: "blue", 
                link: "https://www.vietnam.vn/ko/diem-tin-kinh-te-the-gioi-noi-bat-ngay-3-2-2026" 
            },
            { 
                category: "Economy", 
                title: "중국 인민은행, 경기 부양 위한 통화 완화 시사", 
                desc: "1월 PMI 지수 하락에 따라 내수 안정을 위한 금리 인하 및 지급준비율 인하 가능성 고조.", 
                color: "gray", 
                link: "https://www.vietnam.vn/ko/diem-tin-kinh-te-the-gioi-noi-bat-ngay-3-2-2026" 
            },
            { 
                category: "Tech", 
                title: "SpaceX와 xAI, 1조 2,500억 달러 규모 합병", 
                desc: "일론 머스크의 두 거대 기업이 합병하여 우주 기반 AI 연산 및 기술 혁신 가속화 선언.", 
                color: "green", 
                link: "https://www.vietnam.vn/ko/diem-tin-kinh-te-the-gioi-noi-bat-ngay-3-2-2026" 
            },
            { 
                category: "Energy", 
                title: "AI 데이터 센터 전력난, 에너지 병목 현상 심화", 
                desc: "2026년 AI 인프라 확장의 핵심 변수로 에너지 수급이 부상하며 기업들의 지속 가능성 고민 증대.", 
                color: "orange", 
                link: "https://etcjournal.com/2026/02/05/ai-in-february-2026-three-critical-global-decisions-cooperation-or-constitutional-clash/" 
            },
            { 
                category: "Robotics", 
                title: "가정용 휴머노이드 로봇 보급 가속화 전망", 
                desc: "다보스 포럼에서 '1인 1로봇' 시대 예고되며 가사 및 산업 현장용 로봇 기술 급진전.", 
                color: "purple", 
                link: "https://www.weforum.org/stories/2026/01/live-from-davos-2026-what-to-know-on-day-4/" 
            },
            { 
                category: "Texas", 
                title: "민주당, 텍사스 보궐선거 승리로 공화당 다수당 위협", 
                desc: "18선거구 보궐선거에서 민주당 메네피 후보 당선. 공화당의 하원 의석 차가 4석으로 축소.", 
                color: "orange", 
                link: "https://www.youtube.com/watch?v=Gf95wMYzD8o" 
            },
            { 
                category: "Texas", 
                title: "텍사스 경제 대시보드 공개, 글로벌 무역 허브 부각", 
                desc: "AllianceTexas 등 주요 포트를 중심으로 한 $163억 규모의 GDP 기여도와 경제 지표 발표.", 
                color: "orange", 
                link: "https://comptroller.texas.gov/economy/fiscal-notes/economics/2026/texstat-story/" 
            },
            { 
                category: "California", 
                title: "캘리포니아 노동계, 뉴섬 주지사에 AI 규제 강화 압박", 
                desc: "노동연맹은 일자리 보호를 위해 예측 AI 사용 제한 및 해고 사전 통보 등 강력 법안 요구.", 
                color: "blue", 
                link: "https://calmatters.org/economy/technology/2026/02/newsom-needs-more-ai-regulation-to-be-president-say-unions/" 
            },
            { 
                category: "California", 
                title: "샌프란시스코 고교 결핵 확산 및 보건 당국 긴급 대응", 
                desc: "아치비숍 리어던 고교에서 활동성 결핵 환자 3명 발생. 지역 보건국의 긴급 역학 조사 착수.", 
                color: "blue", 
                link: "https://www.youtube.com/watch?v=21Pr80fM1Ns" 
            },
            { 
                category: "Business", 
                title: "비즈니스 스포트라이트: 팔란티어 역대급 실적 발표", 
                desc: "미국 내 AIP 도입 확산으로 전년 대비 매출 70% 성장. AI의 실질적 수익 창출 능력 증명.", 
                color: "indigo", 
                link: "https://it.donga.com/108382/" 
            },
            { 
                category: "Market", 
                title: "글로벌 M&A 시장, 2026년 대형 메가딜 위주 회복", 
                desc: "금융 서비스 섹터에서 $50억 이상의 메가딜 활성화 및 사모펀드 엑시트 환경 개선 전망.", 
                color: "pink", 
                link: "https://www.pwc.at/de/pwc-deals/trends/financial-services26.html" 
            }
        ]
    },
    // 기존 데이터 (2026년 2월 2주차 등)는 이 아래에 유지됩니다.
    ...newsData 
];
