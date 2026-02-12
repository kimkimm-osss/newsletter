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
                title: "미국 의회, 국가 부채 한도 협상 교착 상태 심화", 
                desc: "공화당-민주당 부채 한도 협상 난항으로 정부 셧다운 위기 고조.\n재무부 3월 초 비상 조치 한계 도달 임박.\n양당 간 세금 정책 연계 협상으로 복잡성 증가.", 
                color: "blue", 
                link: "https://www.reuters.com/world/us/us-debt-ceiling-negotiations-2026/" 
            },
            { 
                category: "Economy", 
                title: "유럽중앙은행(ECB), 기준금리 25bp 인하", 
                desc: "유로존 경기 둔화 대응으로 기준금리 3.25%로 조정.\n독일 제조업 침체와 프랑스 소비 위축이 주요 배경.\n라가르드 총재, 추가 완화 가능성 시사.", 
                color: "gray", 
                link: "https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.mp260211.en.html" 
            },
            { 
                category: "Tech", 
                title: "중국 딥시크(DeepSeek) AI 모델 글로벌 충격파", 
                desc: "저비용 고성능 'DeepSeek-R1' 공개로 엔비디아 주가 급락.\nAI 개발 효율성 논쟁과 미국 기술 우위 도전.\n빅테크 기업들의 전략 재검토 불가피.", 
                color: "green", 
                link: "https://www.reuters.com/technology/artificial-intelligence/deepseek-ai-model-2026/" 
            },
            { 
                category: "Energy", 
                title: "미국 LNG 수출 승인 재개, 에너지 외교 전환점", 
                desc: "트럼프 행정부, 바이든 시절 수출 보류 조치 전면 해제.\n텍사스·루이지애나 천연가스 프로젝트 급속 진행.\n유럽 에너지 안보와 기후 목표 간 딜레마 심화.", 
                color: "orange", 
                link: "https://www.axios.com/2026/02/10/trump-lng-export-approval-restart" 
            },
            { 
                category: "Robotics", 
                title: "보스턴 다이내믹스, 차세대 아틀라스 로봇 공개", 
                desc: "완전 전기 구동 'Atlas Electric' 360도 관절 회전 구현.\n물류 창고와 제조 현장 자율 작업 능력 대폭 향상.\n3월부터 파일럿 프로그램 통한 상용화 테스트 시작.", 
                color: "purple", 
                link: "https://www.therobotreport.com/boston-dynamics-atlas-electric-2026/" 
            },
            { 
                category: "Texas", 
                title: "텍사스 주의회, 역대 최대 재산세 감면 법안 통과", 
                desc: "주택 소유주 대상 평균 가구당 연간 $1,200 절감 효과.\n애벗 주지사 핵심 공약, 11월 주민투표로 헌법 개정 확정.\n교육 재원 축소 우려로 교육계와 지방정부 반발.", 
                color: "orange", 
                link: "https://www.texastribune.org/2026/02/08/texas-property-tax-relief-largest-ever/" 
            },
            { 
                category: "Texas", 
                title: "텍사스 스타트업 생태계, 벤처 투자 역대 최고치", 
                desc: "2025년 4분기 벤처 투자액 $4.2B로 전년 대비 38% 급증.\n오스틴·댈러스 중심 AI, 핀테크, 에너지 기술 분야 집중.\n실리콘밸리 이탈 기업들의 텍사스 이전 가속화.", 
                color: "orange", 
                link: "https://www.axios.com/local/austin/2026/02/05/texas-startup-venture-capital-surge" 
            },
            { 
                category: "California", 
                title: "캘리포니아, 산불 피해 복구 $3.5B 긴급 예산", 
                desc: "뉴섬 주지사, LA 카운티 산불 복구에 사상 최대 규모 배정.\n주택 재건, 인프라 복구, 산불 예방 시스템 강화 집중.\n기후변화 대응 장기 전략으로 산림 관리 예산 두 배 확대.", 
                color: "blue", 
                link: "https://calmatters.org/politics/2026/02/california-wildfire-recovery-budget" 
            },
            { 
                category: "California", 
                title: "샌프란시스코, 자율주행 택시 24시간 운행 확대", 
                desc: "시의회, 웨이모와 크루즈의 전면 운행 확대 승인.\n교통 혼잡 완화와 혁신 생태계 지원 차원에서 결정.\n시민단체는 사고 책임과 일자리 감소 문제 지속 제기.", 
                color: "blue", 
                link: "https://www.theverge.com/2026/2/09/san-francisco-robotaxi-expansion" 
            },
            { 
                category: "Business", 
                title: "엔비디아, AI 칩 수요 급증에도 주가 변동성 지속", 
                desc: "4분기 매출 $22.1B로 시장 예상치 상회 달성.\n딥시크 쇼크 이후 AI 효율성 논쟁으로 주가 급락 후 반등.\n젠슨 황 CEO, 차세대 블랙웰 칩 수요 공급 초과 지속 전망.", 
                color: "indigo", 
                link: "https://www.cnbc.com/2026/02/11/nvidia-earnings-q4-2025" 
            },
            { 
                category: "Market", 
                title: "마이크로소프트, 인플렉션 AI 인수 협상 진행", 
                desc: "거래 규모 약 $3B 추정, 대화형 AI 기술 확보 목적.\n윈도우와 오피스 제품군에 AI 기능 통합 계획.\n빅테크 AI 스타트업 인수 경쟁 심화로 반독점 심사 예상.", 
                color: "red", 
                link: "https://www.bloomberg.com/news/articles/2026-02-10/microsoft-inflection-ai-acquisition" 
            }
        ]
    }
];
