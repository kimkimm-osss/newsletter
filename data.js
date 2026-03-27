const newsData = [
    {
        week: "2026년 3월 4주차",
        date: "March 27, 2026",
        items: [
            // ── Case Study ──
{
    category: "Case Study",
    title: "TransDigm: 논란의 항공우주 거인 — 독점 부품 전략과 윤리 논쟁",
    desc: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <p class="font-bold text-blue-800 mb-1">■ 독점 부품 인수를 통한 시장 장악</p>
                1993년 설립 이후 90건 이상의 인수로 펌프·밸브·안전장치 등 항공기 핵심 부품 시장 장악 — 현재 운항 중인 거의 모든 항공기에 TransDigm 부품 탑재.<br>
                인수 기준: ①독점적(sole-source) 제품, ②높은 애프터마켓 매출 비중, ③운영 개선 여지 — 인수 후 원가 절감·가격 인상으로 영업이익률 40~50% 달성.<br>
                2006년 IPO 이후 S&P 500 대비 26배, 동종 업계 대비 12배 초과수익 기록, 매출·EBIT 모두 17% CAGR 성장.
            </div>
            <div>
                <p class="font-bold text-blue-800 mb-1">■ 수익성과 윤리 논쟁의 경계</p>
                항공기 운항 후 대체 불가한 독점 부품의 애프터마켓 매출이 핵심 수익원 — 항공사·정비사에 프리미엄 가격 부과가 가능한 구조적 해자(Moat) 보유.<br>
                2019년 미 국방부 조사에서 '과도한 이익(excessive profits)' 판정, $16.1M 환급 명령.<br>
                Charlie Munger: "국방부 규제를 이용해 가격을 10배 올리는 것은 비도덕적" — 합법적이나 윤리적 정당성에 대한 업계 논쟁 지속.
            </div>
        </div>
    `,
    color: "red",
    link: "https://quartr.com/insights/company-research/transdigm-the-story-of-the-controversial-aerospace-giant"
},
            // ── Politics ──
            {
                category: "Politics",
                title: "AP-NORC 여론조사: 미국인 과반 '이란 군사 행동 과도' — 유가·전쟁 비용 우려 급증",
                desc: "전쟁 4주차 여론조사에서 미국인 과반이 군사 행동이 '지나쳤다'고 응답.<br>가스비 부담 '매우 우려' 응답 45%(2월 30% 대비 급등).<br>트럼프 전반 지지율은 유지되나, 전쟁 장기화와 유가 상승이 공화당 지지층 이탈의 잠재적 변수로 부상.",
                color: "blue",
                link: "https://apnews.com/article/poll-iran-trump-war-oil-gas-prices-2abd1ea4a81f3339cebadd5480fb863b"
            },
            {
                category: "Politics",
                title: "WTO 사무총장, '지난 80년간 최악의 무역 교란' 경고",
                desc: "WTO 사무총장 Ngozi Okonjo-Iweala가 3/26 각료회의 개회사에서 미국 관세 확대와 중동 전쟁의 이중 충격으로 세계 무역 체계가 80년 만에 최악의 교란을 겪고 있다고 경고.<br>2026년 상품·서비스 무역 성장률 2.7%, GDP 성장률 2.8%로 하향 전망 제시.",
                color: "blue",
                link: "https://www.aljazeera.com/news/2026/3/26/wto-holds-crunch-meeting-amid-collapsing-multilateral-system"
            },

            // ── Economy ──
            {
                category: "Economy",
                title: "연준, 금리 3.5–3.75% 동결 — Powell 퇴임 전 마지막 결정에서 '호키시 홀드'",
                desc: "3/18 FOMC 11:1로 금리 동결 결정.<br>2026년 GDP 전망 2.4%로 상향, PCE 물가 전망 2.7%로 상향.<br>올해 1회 인하 시그널 유지하나, 유가 급등·물가 상방 압력으로 시장은 인하 기대 후퇴. Powell 의장 5월 퇴임 예정이나 Kevin Warsh 인준 전까지 잔류 선언.",
                color: "gray",
                link: "https://www.cnbc.com/2026/03/18/fed-interest-rate-decision-march-2026.html"
            },
            {
                category: "Economy",
                title: "WTO, 중동 분쟁 장기화 시 세계 무역·성장 둔화 전망 보고서 발표",
                desc: "3/19 WTO 보고서에서 호르무즈 해협 봉쇄 장기화 시 2026년 세계 상품 무역 성장률이 기존 2.7%에서 추가 하락 가능성 경고.<br>미국 관세 정책(Section 122)과 중동 전쟁이 '이중 충격'으로 작용하며, 1940년대 이후 최악의 무역 체계 교란 진행 중.",
                color: "gray",
                link: "https://www.nytimes.com/2026/03/19/business/economy/mideast-conflict-trade-wto.html"
            },

            // ── Tech ──
            {
                category: "Tech",
                title: "Meta·Google, 아동 소셜미디어 중독 소송에서 패소 — $600만 배심 평결",
                desc: "LA 배심원단이 인스타그램의 '무한 스크롤' 등 설계 결함을 과실로 인정.<br>Meta CEO 저커버그가 직접 증인석에 출석해 뷰티 필터 재허용 결정을 변호. Snap·TikTok은 재판 전 합의.<br>연방법(Section 230) 우회 판례로서 수천 건 후속 소송에 영향 전망.",
                color: "green",
                link: "https://www.reuters.com/legal/litigation/jury-reaches-verdict-meta-google-trial-social-media-addiction-2026-03-25/"
            },
            {
                category: "Tech",
                title: "Anthropic, '공급망 리스크' 지정 차단 승소 — 연방 판사 \"수정헌법 제1조 보복\"",
                desc: "3/26 캘리포니아 연방지법이 국방부의 Anthropic '공급망 리스크' 지정을 무기한 차단, \"정부 이견을 이유로 적국 협력자로 낙인찍는 것은 오웰적 발상\"이라고 판시.<br>Claude AI의 자율무기·시민감시 사용 거부에 대한 보복성 지정으로 판단, 수정헌법 제1조 위반 인정.<br>정부에 1주 항소 유예 부여, DC 별도 소송은 계속 진행 중.",
                color: "green",
                link: "https://www.cnn.com/2026/03/26/business/anthropic-pentagon-injunction-supply-chain-risk"
            },

            // ── Energy ──
            {
                category: "Energy",
                title: "IEA, 사상 최대 4억 배럴 전략비축유 방출 — 호르무즈 해협 봉쇄로 일 800만 배럴 공급 차질",
                desc: "2/28 미국·이스라엘의 이란 공습 이후 호르무즈 해협 봉쇄로 중동 걸프국 원유 생산 일 1,000만 배럴 감소.<br>IEA 회원국이 3/11 4억 배럴 비축유 방출 합의(2022년 러시아 침공 시 1.82억 배럴의 2배 이상).<br>공급 정상화에 수주~수개월 소요 전망.",
                color: "orange",
                link: "https://www.reuters.com/business/energy/iea-proposes-largest-ever-oil-release-strategic-reserves-wsj-reports-2026-03-11/"
            },
            {
                category: "Energy",
                title: "미 EIA, AI 수요 급증으로 2026-27년 미국 전력 사용량 사상 최고치 전망",
                desc: "EIA 보고서에서 2025년 4,195TWh → 2026년 4,260TWh → 2027년 4,388TWh로 전력 수요 연속 최고치 경신 전망.<br>AI 데이터센터가 주요 수요 동력으로, 총 데이터센터 지출 $6,500억 이상(전년 대비 31.7% 증가) 예상.",
                color: "orange",
                link: "https://www.reuters.com/business/energy/us-power-use-beat-record-highs-2026-2027-ai-use-surges-eia-says-2026-03-10/"
            },

            // ── Robotics ──
            {
                category: "Robotics",
                title: "Figure 03 휴머노이드, 백악관 글로벌 교육 서밋에 등장",
                desc: "$20,000 가정용 로봇 Figure 03가 멜라니아 트럼프와 함께 40개국 대표 앞에서 시연.<br>2026년 하반기 소비자 출시 예정, 가사·교육 보조 기능 탑재.",
                color: "red",
                link: "https://www.theguardian.com/technology/video/2026/mar/26/melania-trump-and-ai-powered-robot-named-figure-3-open-white-house-summit-video"
            },
            {
                category: "Robotics",
                title: "Boston Dynamics Atlas, 2026년 3월 정식 생산 돌입 — 현대·Google DeepMind 배치 예정",
                desc: "CES 2026에서 공개된 기업용 Atlas 휴머노이드가 조지아 공장에서 정식 양산 개시.<br>현대자동차 공장 및 Google DeepMind 연구소에 2026년 내 배치 예정.<br>무거운 반복 작업(중량물 운반·조립)에 특화된 산업용 설계.",
                color: "red",
                link: "https://apnews.com/article/ces-humanoid-robots-atlas-hyundai-boston-dynamics-8de7b2470c23f5f22441ad1ad7555136"
            },
            {
                category: "Robotics",
                title: "IFR, 2026년 글로벌 로보틱스 5대 트렌드 발표 — 산업용 로봇 설치 $167억 사상 최대",
                desc: "국제로봇연맹(IFR)이 AI 기반 적응형 모션·음성 제어·협동로봇 등 5대 트렌드 발표.<br>산업용 로봇 글로벌 설치 금액 $167억으로 역대 최고치 경신.",
                color: "red",
                link: "https://ifr.org/ifr-press-releases/news/top-5-global-robotics-trends-2026"
            },

            // ── Texas ──
            {
                category: "Texas",
                title: "Valero Port Arthur 정유소 폭발 — 미국 10대 정유소 가동 중단",
                desc: "3/23 폭발로 디젤 생산 라인 장기 중단 전망, 도매 가솔린·디젤 즉시 급등.<br>일 43.5만 배럴 처리 시설로 770명 근무, 인명 피해는 보고되지 않음.<br>주변 지역 대피 후 해제.",
                color: "orange",
                link: "https://www.cnn.com/2026/03/24/business/oil-prices-rise-trump-iran-intl"
            },
            {
                category: "Texas",
                title: "텍사스, 2025년 태양광 발전량 미국 1위 — 58,634 GWh 시장 규모 $5,000억",
                desc: "유틸리티 규모 태양광에서 텍사스가 캘리포니아를 추월하여 미국 1위 달성.<br>풍력 발전도 포함 시 재생에너지 비중 지속 확대.<br>데이터센터 전력 수요와 맞물려 텍사스 에너지 시장 변동성 증가.",
                color: "orange",
                link: "https://insideclimatenews.org/news/05032026/inside-clean-energy-texas-utility-scale-solar/"
            },

            // ── California ──
            {
                category: "California",
                title: "LA 카운티, Paramount-WBD 합병의 지역 경제 영향 분석 착수",
                desc: "3/25 LA County 감독위원회가 Paramount Skydance와 Warner Bros Discovery 합병이 할리우드 고용·지역 경제에 미칠 영향을 분석하도록 명령.<br>합병 시 대규모 인력 구조조정·스튜디오 통합 우려.",
                color: "blue",
                link: "https://deadline.com/story-arc/paramount-wb/"
            },

            // ── M&A ──
            {
                category: "M&A",
                title: "Paramount Skydance-WBD 합병전 격화 — WBD 주주총회 3/20 예정, Netflix 합병안 추천",
                desc: "WBD 이사회가 3/20 주주총회에서 Netflix 합병안 찬성 투표를 만장일치 권고, 동시에 Paramount Skydance에 '최종 제안' 협상 개시 요청.<br>Paramount의 $30/주 전액현금 제안 vs Netflix의 기존 합의 사이에서 주주 선택 구도.",
                color: "indigo",
                link: "https://www.prnewswire.com/news-releases/warner-bros-discovery-sets-special-meeting-date-of-march-20-2026-and-unanimously-recommends-shareholders-vote-for-netflix-merger-warner-bros-discovery-to-initiate-discussions-with-paramount-skydance-for-their-best-and-final-o-302689237.html"
            },
            {
                category: "M&A",
                title: "Paul Weiss: 2월 글로벌 M&A 메가딜 급증, 딜 금액 대폭 상승 vs 건수 감소",
                desc: "전략적·스폰서 딜 모두 1월 대비 금액 큰 폭 증가.<br>미국 및 글로벌 모두 대형 거래가 시장 주도.<br>미국 내 스폰서(PE) 딜 금액은 감소세로, 양극화 구조 심화.",
                color: "indigo",
                link: "https://www.paulweiss.com/insights/client-memos/ma-at-a-glance-march-2026"
            },
            {
                category: "M&A",
                title: "Eli Lilly, Ventyx Biosciences $12억 인수 — 면역학 파이프라인 강화",
                desc: "1월 발표된 $12억 전액현금 인수(주당 $14)가 2026년 상반기 완료 예정.<br>Ventyx의 경구용 면역 치료제 파이프라인을 통한 자가면역 질환 포트폴리오 확대 목적.",
                color: "indigo",
                link: "https://ir.ventyxbio.com/news-releases/news-release-details/lilly-acquire-ventyx-biosciences-advance-oral-therapies/"
            }
        ]
    },
    {
        week: "2026년 3월 2주차",
        date: "March 13, 2026",
        items: [
            {
                category: "Case Study",
                title: "Toto & Fujikura: 전통 제조 기업을 'AI 하드웨어 밸류체인'으로 전환한 전략",
                desc: `
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p class="font-bold text-blue-800 mb-1">■ 물리적 하드웨어의 AI 수혜주 피벗</p>
                            토토(Toto): 비데 제조사에서 반도체 부품사로 재평가 — 고급 세라믹 기술을 활용한 칩 부품 사업이 전체 영업이익의 50%를 차지하며 핵심 AI 메모리 수혜주로 부상.<br>
                            후지쿠라(Fujikura): 1885년 설립된 전선 회사가 데이터센터용 광섬유 공급의 글로벌 강자로 변모 — 2024년 이후 주가 약 25배 상승, 일본 블루칩 중 최고 성과 기록.
                        </div>
                        <div>
                            <p class="font-bold text-blue-800 mb-1">■ 기술 자산의 재발견과 narrative 강화</p>
                            인력 부족과 AI 시대를 맞아 센서·모터·특수 화학 등 일본 특유의 하드웨어 공급망 전문성이 재조명.<br>
                            팔리서 캐피털(Palliser Capital) 등 행동주의 투자자들이 숨겨진 비즈니스 가치를 조명하며 저평가 기업들의 시장 가치 재정의.
                        </div>
                    </div>
                `,
                color: "purple",
                link: "https://www.bloomberg.com/opinion/articles/2026-03-08/beyond-bidets-lies-the-overlooked-plumbing-of-japanese-ai"
            },
            {
                category: "Politics",
                title: "이스라엘, 이란 수도 테헤란에 대규모 공습 개시 — 레바논 베이루트 동시 공격",
                desc: "이스라엘군이 테헤란에 대한 '광범위한 새로운 공습' 개시를 공식 발표하며 강제 대피 명령 발동.<br>레바논 수도 베이루트에도 동시 공격을 감행, 중동 전역으로 확전 양상 본격화.<br>트럼프 대통령은 '전쟁이 잘 진행되고 있다'고 발언하며 미국의 이스라엘 지원 기조 재확인.",
                color: "blue",
                link: "https://www.aljazeera.com/news/liveblog/2026/3/13/iran-war-live-trump-says-war-going-well-as-gulf-under-wave-of-attacks"
            },
            {
                category: "Politics",
                title: "동남아 국가들, 중동 석유 충격 대비 긴급 에너지 절약 조치 시행",
                desc: "중동 전쟁 확전에 따른 유가 급등 우려로 동남아 각국이 재택근무 권고·주 4일제 도입 등 긴급 대응책 시행.<br>7억 명 이상 인구의 동남아 지역이 중동 석유·가스에 대한 높은 의존도로 경제성장·재정 건전성에 직접 타격 우려.<br>에너지 보조금 확대 약속과 카풀 장려 등 단기 충격 완화 조치와 장기 에너지 자립 전략의 병행 필요성 부각.",
                color: "blue",
                link: "https://www.ft.com/content/a46b54e4-7d52-4aa6-b5c3-8217d3ee536d"
            },
            {
                category: "Economy",
                title: "중국, 2026년 성장률 목표 하향 — 양적 팽창 대신 기술 자립 중심 체질 개선 선언",
                desc: "중국 전인대(NPC)에서 이전보다 낮은 성장률 목표를 설정하며 신질생산력(新質生産力) 기반 경제 체질 개선에 우선순위 부여.<br>AI·양자 컴퓨팅·반도체 등 전략적 신산업에 국가 자원을 집중 투입하여 서구 기술 제재 정면 돌파 및 공급망 주도권 확보 추진.<br>5개년 계획의 핵심 기조가 GDP 수치 확대에서 핵심 기술 내재화와 산업 고도화로 명확히 전환.",
                color: "gray",
                link: "https://www.aljazeera.com/news/2026/3/12/chinas-key-npc-meeting-comes-to-a-close-as-lower-growth-target-set"
            },
            {
                category: "Economy",
                title: "미 연준 금리 인하 기대 후퇴 — 유가 급등·고용 둔화 복합 악재",
                desc: "중동 전쟁에 따른 유가 급등과 고용시장 둔화가 동시에 발생하며 연준의 정책 결정 난이도 상승.<br>인플레이션 억제와 경기 부양이라는 상충 목표 사이에서 올해 금리 인하 횟수에 대한 시장 기대치 하락.<br>투자자들이 금리 인하 베팅을 축소하며 채권·주식 시장 전반에 걸친 변동성 확대.",
                color: "gray",
                link: "https://www.ft.com/content/176a8568-5982-459a-a36a-d2cbf577568a"
            },
            {
                category: "Tech",
                title: "Anthropic, 미 정부를 상대로 '공급망 리스크' 지정에 대한 사상 초유의 소송 제기",
                desc: "Anthropic이 미 국방부의 '공급망 리스크' 업체 지정에 맞서 연방정부를 상대로 업계 최초의 소송 제기.<br>Google·Amazon·Apple·Microsoft 등 빅테크 4사가 Anthropic을 공개 지지하며 AI 기업의 자율성 수호에 연대.<br>AI 모델의 군사적 활용 범위와 기업의 윤리적 거부권에 대한 법적 선례를 결정지을 핵심 소송으로 주목.",
                color: "green",
                link: "https://www.bbc.com/news/articles/c4g7k7zdd0zo"
            },
            {
                category: "Tech",
                title: "Nvidia, 중국향 칩(H200) 생산 전면 중단 — 규제 장벽 장기화 판단",
                desc: "Nvidia가 중국 시장용으로 설계된 H200 칩의 생산을 전면 중단, 미·중 간 규제 장벽의 장기화를 기정사실화.<br>워싱턴과 베이징 양측의 규제가 중국향 판매를 지속적으로 제한할 것이라는 전략적 판단에 따른 선제적 결정.<br>Q1 FY2027 가이던스에서 중국 데이터센터 매출 제로를 이미 반영한 데 이은 공급측 구조 조정 완료.",
                color: "green",
                link: "https://www.ft.com/content/47f1cf56-209f-46fb-a437-f769b9ccb2cb"
            },
            {
                category: "Energy",
                title: "빅테크 7사, 백악관에서 'Ratepayer Protection Pledge' 서명",
                desc: "Google·MS·Meta·Amazon·Oracle·xAI·OpenAI가 AI 데이터센터 전력 비용 자체 부담 서약에 공식 서명.<br>트럼프 대통령이 '소비자 전기요금이 AI 때문에 올라가서는 안 된다'며 중간선거를 겨냥한 정치적 프레이밍 강화.<br>발전소·송전망 업그레이드 비용의 빅테크 전가 구조가 공식화되며 에너지 인프라 투자 책임 분담 체계 확립.",
                color: "orange",
                link: "https://www.reuters.com/sustainability/climate-energy/trump-meet-tech-giants-energy-pledge-ahead-midterms-2026-03-04/"
            },
            {
                category: "Energy",
                title: "중동 전쟁이 재생에너지 전환 가속의 계기 — 화석연료 의존 리스크 재부각",
                desc: "중동 분쟁 확전으로 글로벌 에너지 시장이 요동치며 화석연료 의존국의 취약성이 재차 노출.<br>풍력·태양광 등 재생에너지 비중이 높은 국가일수록 글로벌 에너지 충격에 대한 방어력이 우수하다는 전문가 분석.<br>안정적 에너지 공급을 위한 재생에너지 가속화에는 대규모 투자와 시스템 전환이 필수 과제.",
                color: "orange",
                link: "https://www.dw.com/en/iran-war-roils-oil-trade-casting-doubt-on-us-fossil-fuel-push/a-76294122"
            },
            {
                category: "Energy",
                title: "텍사스, 캘리포니아 제치고 유틸리티 태양광 발전 1위 등극",
                desc: "2025년 텍사스 유틸리티 태양광 발전량 58,634GWh로 전국 1위 확정, 시장 규모 $500억 돌파.<br>2025년 신규 설치 11GW 이상으로 미국 전체 43GW의 25% 이상을 차지하며 에너지 전환 주도.<br>배터리 저장 분야에서도 캘리포니아 추월 임박 — 2025년 미국 전체 57.6GWh(전년 대비 30% 증가).",
                color: "orange",
                link: "https://insideclimatenews.org/news/05032026/inside-clean-energy-texas-utility-scale-solar/"
            },
            {
                category: "Robotics",
                title: "2026년이 로보틱스의 '결정적 해' — MIT Sloan 분석",
                desc: "소프트웨어 주도 AI 성장에서 하드웨어 로봇 실전 배치로의 전환점 도래.<br>'프로토타입에서 실세계 배치로' — 공장·창고·물류 현장에서 상용화 가속.<br>경제적 티핑포인트 도달: 산업용 로봇의 ROI가 인건비를 하회하기 시작하며 대규모 도입 촉발 전망.",
                color: "purple",
                link: "https://www.mitsloanme.com/article/how-2026-will-decide-the-future-of-robotics/"
            },
            {
                category: "Texas",
                title: "텍사스 상원 선거 본격 시동 — 민주당 Talarico 확정, 공화당은 5월 결선투표",
                desc: "2026 중간선거 텍사스 상원 예비선거에서 민주당 James Talarico가 후보로 확정.<br>공화당 경선은 승부가 갈리지 않아 5월 결선투표로 연장되며 경쟁 과열 양상.<br>텍사스가 1988년 이후 민주당 상원의원을 배출하지 못한 기록의 갱신 여부에 전국적 관심 집중.",
                color: "orange",
                link: "https://www.texastribune.org/2026/03/03/john-cornyn-ken-paxton-wesley-hunt-runoff-primary-texas-senate-republican/"
            },
            {
                category: "Texas",
                title: "AI 데이터센터 건설 붐이 낳은 'Man Camp' — 농촌 주거 인프라 위기",
                desc: "AI 데이터센터 건설 붐으로 전력·수자원 접근성이 있는 외곽·농촌 지역에 대형 시설이 집중 입주.<br>수천 명의 건설 인력을 수용할 주거 인프라 부족으로 임시 숙소·식당·체육시설을 갖춘 'Man Camp' 형태의 주거단지 구축 확산.<br>전기공·용접공 등 숙련 노동자 유치를 위한 임시 주거 솔루션이 데이터센터 건설의 새로운 병목 해소 과제.",
                color: "orange",
                link: "https://www.bloomberg.com/news/features/2026-03-06/the-700-billion-ai-data-center-boom-is-fueling-a-boom-in-man-camp-housing"
            },
            {
                category: "California",
                title: "캘리포니아 등 24개 주, 트럼프 행정부 Section 122 관세에 대한 위헌 소송 제기",
                desc: "캘리포니아를 포함한 24개 민주당 주도 주가 트럼프 행정부의 Section 122 관세에 대해 연방 소송 제기.<br>롭 본타(Rob Bonta) 캘리포니아 법무장관이 오리건·애리조나·뉴욕 법무장관과 공동 소송 주도.<br>1974년 무역법 Section 122의 대통령 관세 부과 권한 남용을 핵심 쟁점으로 법적 다툼 본격화.",
                color: "blue",
                link: "https://calmatters.org/economy/2026/03/trump-tariff-ca-lawsuit/"
            },
            {
                category: "Etc",
                title: "미국 건설 노동력 부족 심화 — 강한 임금 상승과 보너스 지급 확대",
                desc: "ADP 보고서에 따르면 미국 주거용 건설 부문의 노동력 부족이 견조한 일자리 증가와 임금 상승을 견인.<br>숙련 건설 노동자 확보 경쟁이 치열해지며 보너스·복리후생 등 인센티브 지급 확대 추세.<br>데이터센터·인프라 건설 붐과 맞물려 건설 인력 수급 불균형의 구조적 심화.",
                color: "gray",
                link: "https://www.adpresearch.com/the-building-trades-five-new-facts/"
            },
            {
                category: "Etc",
                title: "미국 2월 민간 고용 63,000명 증가 — 남부 지역·소규모 기업 중심 회복",
                desc: "ADP 자료에 따르면 2월 미국 민간 기업 고용이 63,000명 증가하며 노동시장 안정세 확인.<br>지역별로는 남부가 가장 큰 회복세, 산업별로는 의료·교육·건설 분야가 고용 증가 주도.<br>20인 미만 소규모 기업의 채용이 가장 활발하며 고용 회복의 저변 확대 신호.",
                color: "gray",
                link: "https://www.bloomberg.com/news/articles/2026-03-04/us-companies-added-63-000-jobs-in-february-adp-data-show"
            },
            {
                category: "M&A",
                title: "PE 신뢰도 역대 최고 — 메가딜이 주간 단위로 발생하는 시대",
                desc: "2026년 M&A 회복 본격화, PE 응답자 90%가 '올해 더 많은 딜 완료를 예상'하며 역대 최고 신뢰도 기록.<br>기술·에너지·방산 중심 메가딜 급증, 다만 딜 건수는 전년 대비 22% 감소하며 대형화 추세 심화.<br>이란전 불확실성이 일부 딜을 지연시키나 전략적 통합 수요는 오히려 가속되는 역설적 양상.",
                color: "indigo",
                link: "https://markets.financialcontent.com/dailynews/article/marketminute-2026-3-9-the-2026-m-and-a-resurgence-private-equity-confidence-hits-record-highs"
            }
        ]
    },
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
