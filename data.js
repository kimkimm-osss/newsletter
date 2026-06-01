const newsData = [
    // =====================================================
    // 2026년 5월 3~4주차
    // =====================================================
    {
        week: "2026년 5월 3~4주차",
        date: "May 29, 2026",
        items: [
            // ── California ──
            {
                category: "California",
                title: "실리콘밸리 실직 테크 인력 급증 — 4월까지 85,000명 해고, 전년 대비 33% 증가",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-blue-800">▸ AI 전환 명목 대규모 해고 지속:</span> Meta·Coinbase·Cisco 등 주요 기업이 AI 전환을 이유로 대규모 인력 감축을 단행하며 캘리포니아 테크 노동시장이 급격히 악화. 2026년 4월까지 누적 해고자 85,000명으로 전년 동기 대비 33% 증가.</p>
                    <p><span class="font-bold text-blue-800">▸ 실직 장기화와 새로운 대처 문화:</span> 재취업까지 평균 6개월 이상 소요되는 장기 실직이 일상화되면서 테크 인력이 하이킹·커뮤니티 활동 등으로 정서적 유대를 형성하는 새로운 현상 등장.</p>
                    <p><span class="font-bold text-blue-800">▸ 실리콘밸리 고용 모델의 근본적 전환:</span> 수년간 누적된 대규모 해고가 '평생 고용' 기대를 해체하며, 실리콘밸리의 고용 안정성 자체에 대한 근본적 의문이 제기되는 국면.</p>
                </div>`,
                color: "blue",
                link: "https://www.latimes.com/business/story/2026-05-19/ai-layoffs-jobless-tech-workers-silicon-valley"
            },
            // ── Economy ──
            {
                category: "Economy",
                title: "트럼프-시진핑 베이징 정상회담 종료 — '교착 정상회담' 평가 속 콩·보잉 딜 발표",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-gray-800">▸ 농산물·항공기 대형 딜:</span> 중국이 연간 $170억 규모 미국 농산물 구매 및 보잉 항공기 200대 구매에 합의. 미국 농업·항공 업계에 단기 호재.</p>
                    <p><span class="font-bold text-gray-800">▸ 희토류 공급 약속의 비대칭:</span> 미국 측은 희토류 공급 정상화 약속을 강조했으나, 중국 측 공식 발표에는 희토류 관련 언급이 부재하여 실행 불확실성 잔존.</p>
                    <p><span class="font-bold text-gray-800">▸ '교착 정상회담' 평가:</span> 관세 휴전이 11월 만료 예정이나 포괄적 무역 합의에는 실패. 전문가들은 근본적 구조 갈등이 해소되지 않은 '관리형 교착'으로 평가.</p>
                </div>`,
                color: "gray",
                link: "https://www.cnbc.com/2026/05/18/us-china-announce-deals-after-trump-xi-summit.html"
            },
            {
                category: "Economy",
                title: "AI 메가 스타트업이 VC 생태계 재편 — Forbes Midas List 역사적 변화",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-gray-800">▸ VC 모델의 근본적 재편:</span> 소수 AI 기업이 수천억 달러 자본을 흡수하며 전통적 분산 투자 VC 모델이 '메가 라운드 집중형'으로 전환.</p>
                    <p><span class="font-bold text-gray-800">▸ AI 자본 집중도 사상 최고:</span> Q1 2026 글로벌 스타트업 펀딩 $3,000억 중 AI가 $2,420억(약 80%)을 차지하며 전례 없는 집중도 기록.</p>
                    <p><span class="font-bold text-gray-800">▸ Midas List 대변동:</span> Anthropic·OpenAI 투자자들이 역대급 장부 수익을 기록하며 Forbes Midas List 순위에 역사적 변동 발생.</p>
                </div>`,
                color: "gray",
                link: "https://www.forbes.com/sites/truebridge/2026/05/27/how-ai-mega-startups-rewired-venture-capital-and-the-midas-list/"
            },
            // ── Energy ──
            {
                category: "Energy",
                title: "PJM 전력망, 에너지부 긴급명령으로 데이터센터 전력 차단 권한 확보",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-orange-800">▸ 사상 첫 데이터센터 전력 긴급 규제:</span> 폭염 우려 속 에너지부가 PJM에 백업 발전기 보유 데이터센터의 전력 사용을 긴급 차단할 권한을 부여. 미국 최대 도매 전력망에서 데이터센터 전력을 직접 규제하는 최초 사례.</p>
                    <p><span class="font-bold text-orange-800">▸ 대상 지역:</span> 버지니아·오하이오 등 데이터센터 밀집 지역의 전력 안정성 확보가 주 목적이며, 해당 지역 데이터센터 전력 수요는 연간 20% 이상 증가 중.</p>
                </div>`,
                color: "orange",
                link: "https://www.reuters.com/business/energy/us-pjm-grid-can-curb-data-center-power-usage-emergencies-department-energy-says-2026-05-19/"
            },
            {
                category: "Energy",
                title: "WEF — 전력 계통 연결이 AI 시대의 전략적 병목",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-orange-800">▸ 새로운 석유 = 전력 + 데이터:</span> WEF가 전력과 데이터를 '새로운 석유'로 규정하며 그리드 연결성이 AI 전환의 최대 제약이라 분석.</p>
                    <p><span class="font-bold text-orange-800">▸ 구조적 불균형:</span> 송전선 건설(평균 7~10년)이 데이터센터·발전소 건설(2~3년)보다 훨씬 느려 구조적 시간차 발생.</p>
                    <p><span class="font-bold text-orange-800">▸ 국가 안보 차원 재평가 필요:</span> 각국 정부가 전력 인프라를 경제적 효율성이 아닌 국가 안보 차원에서 재평가해야 한다는 제언.</p>
                </div>`,
                color: "orange",
                link: "https://www.weforum.org/stories/2026/05/electricity-data-grid-connectivity-strategic-bottleneck-ai-transformation/"
            },
            // ── Etc ──
            {
                category: "Etc",
                title: "펜타곤 AI 사용량 1년간 1,775% 폭증 — 사용자 80,000명→150만 명",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-gray-800">▸ GenAI.mil 플랫폼 급성장:</span> 국방부 차관이 SOF Week에서 GenAI.mil 플랫폼 사용자가 80,000에서 150만으로 1,775% 급증했다고 공개.</p>
                    <p><span class="font-bold text-gray-800">▸ 전 영역 AI 통합 가속:</span> 전장 정보 분석·드론 작전·병참 계획 등 국방 전 영역에서 AI 통합이 가속화.</p>
                    <p><span class="font-bold text-gray-800">▸ 소형 드론 대량 확보:</span> $11억 규모 소형 드론 200,000대 구매 계획도 동시 발표하여 AI+드론 결합 전력 확대.</p>
                </div>`,
                color: "gray",
                link: "https://defence-blog.com/pentagon-ai-use-jumped-1775-in-just-one-year/"
            },
            // ── Politics ──
            {
                category: "Politics",
                title: "미-이란 60일 휴전 연장 MOU 잠정 합의, 트럼프 최종 서명 미확정",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-blue-800">▸ 주요 합의 내용:</span> 호르무즈 해협 무제한 통행·기뢰 제거, 이란 핵 프로그램 협상 개시, 제재 완화 논의 등 포괄적 조건 포함.</p>
                    <p><span class="font-bold text-blue-800">▸ 중재 외교 진행 중:</span> 파키스탄 외무장관이 워싱턴에서 루비오 국무장관과 중재 협상을 지속 중이나 트럼프 대통령의 최종 서명은 미확정 상태.</p>
                    <p><span class="font-bold text-blue-800">▸ 불안정한 휴전:</span> 양측의 산발적 교전 지속(미군 드론 5대 격추, 쿠웨이트 방공 가동) 속에서 불안정한 휴전 상태 유지.</p>
                </div>`,
                color: "blue",
                link: "https://www.aljazeera.com/news/2026/5/29/us-iran-60-day-proposal-what-we-know"
            },
            {
                category: "Politics",
                title: "트럼프 \"중국이 Nvidia H200 구매를 스스로 차단\" — 미중 칩 딜 교착",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-blue-800">▸ 중국의 자체 차단:</span> 미국이 트럼프-시진핑 정상회담 중 H200 수출을 승인했으나 중국 정부가 자국 기업의 구매를 차단. Huawei 등 자국산 칩 육성을 위한 의도적 거부로 분석.</p>
                    <p><span class="font-bold text-blue-800">▸ 미국의 추가 제재:</span> 5월 31일 미국이 중국 기업의 해외 거점(동남아·중동)을 통한 Nvidia 칩 우회 구매도 차단하는 추가 조치 발표.</p>
                </div>`,
                color: "blue",
                link: "https://www.cnbc.com/2026/05/31/us-takes-step-to-halt-nvidia-ai-chip-shipments-to-chinese-firms-outside-china.html"
            },
            {
                category: "Politics",
                title: "2026 중간선거 — 인플레이션이 트럼프에 대통령직을 줬지만, 중간선거에서는 역풍 가능",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-blue-800">▸ 관세발 물가 역풍:</span> 관세 부담에 따른 물가 상승과 이란전쟁 영향이 공화당에 불리하게 작용할 전망.</p>
                    <p><span class="font-bold text-blue-800">▸ 이례적 후보 부상:</span> 뉴저지 의회 경선에서 가자 귀환 군의관이 민주당 후보로 부상하는 등 전통적 정치 구도에 변화.</p>
                    <p><span class="font-bold text-blue-800">▸ 초접전 구도:</span> 상원 11석 오픈시트, 하원 5석 차이로 양당 모두 과반 확보에 총력.</p>
                </div>`,
                color: "blue",
                link: "https://www.theguardian.com/us-news/us-midterm-elections-2026"
            },
            // ── Robotics ──
            {
                category: "Robotics",
                title: "중국, 글로벌 휴머노이드 로봇 시장 점유율 약 80% 장악 — 격차 확대",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-red-800">▸ 압도적 시장 지배:</span> Counterpoint 기준 2026년 글로벌 휴머노이드 배치의 약 80%를 중국 기업이 차지하며 압도적 우위 확보.</p>
                    <p><span class="font-bold text-red-800">▸ 실전 배치 가속:</span> Unitree·AgiBot 등 중국 업체가 공공 교통·공장에 자율 휴머노이드를 실전 배치하며 양산 역량 입증.</p>
                    <p><span class="font-bold text-red-800">▸ 전략적 '휴머노이드 갭':</span> 미국·일본·유럽의 시장 점유율이 급감하며 '휴머노이드 갭'이 반도체에 이어 새로운 전략적 이슈로 부상.</p>
                </div>`,
                color: "red",
                link: "https://etcjournal.com/2026/05/21/the-widening-gap-chinas-humanoid-robotics-dominance-may-2026/"
            },
            {
                category: "Robotics",
                title: "Tesla, Giga Texas에 Optimus 전용 공장 첫 철골 구조물 설치",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-red-800">▸ 물리적 착공 확인:</span> 5월 27일 드론 촬영으로 Giga Texas 북부 캠퍼스에 Optimus 공장 철골 구조물 상승이 확인.</p>
                    <p><span class="font-bold text-red-800">▸ 연간 1,000만 대 생산 목표:</span> 연간 최대 1,000만 대 생산을 목표로 하는 대규모 전용 시설의 물리적 공사 개시.</p>
                    <p><span class="font-bold text-red-800">▸ 일정:</span> 주요 구조물 공사가 2026년 말까지 완료될 예정이며, 7월 Fremont 라인에서 선 생산 시작 계획.</p>
                </div>`,
                color: "red",
                link: "https://www.teslarati.com/tesla-dedicated-optimus-factory-construction-officially-underway-giga-texas/"
            },
            {
                category: "Robotics",
                title: "JAL, 일본 공항에서 Unitree 기반 휴머노이드 로봇 시범 운영 개시",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-red-800">▸ 중국 휴머노이드의 일본 진출:</span> JAL이 GMO AI & Robotics와 파트너십으로 5월부터 2대의 Unitree 휴머노이드를 공항에 배치. 중국 휴머노이드가 일본 주요 기업에 채택된 최초 사례.</p>
                    <p><span class="font-bold text-red-800">▸ 실용적 업무 수행 검증:</span> 수하물 운반·안내 등 실용적 업무 수행 능력을 실제 공항 환경에서 검증하며 아시아 내 확산 가속화 시사.</p>
                </div>`,
                color: "red",
                link: "https://kraneshares.com/humanoid-robotics-in-2026-the-race-from-pilot-to-platform/"
            },
            // ── Texas ──
            {
                category: "Texas",
                title: "텍사스 발전소, 연간 1,000억 갤런 물 사용 — 데이터센터 수요와 이중 압박",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-orange-800">▸ 기존 수자원 부담:</span> 텍사스 발전소가 이미 연간 1,000억 갤런의 물을 소비하고 있어 수자원 부담이 상당한 수준.</p>
                    <p><span class="font-bold text-orange-800">▸ 데이터센터 냉각 수요 추가:</span> 데이터센터 냉각 수요까지 더해지면 2030년까지 현재의 6배 물 소비 가능성이 전문가 분석으로 제기.</p>
                    <p><span class="font-bold text-orange-800">▸ 이중 제약 요인:</span> 수자원 관리가 전력 인프라와 함께 텍사스 데이터센터 성장의 핵심 이중 제약으로 부상.</p>
                </div>`,
                color: "orange",
                link: "https://www.houstonchronicle.com/business/energy/article/texas-power-plant-water-22240797.php"
            }
        ]
    },
    // =====================================================
    // 2026년 5월 2주차
    // =====================================================
    {
        week: "2026년 5월 2주차",
        date: "May 8, 2026",
        items: [
            // ── California ──
            {
                category: "California",
                title: "캘리포니아, $100억 저렴 주택 채권 법안 등 주택 공급 정책 6건 동시 추진",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-blue-800">▸ 대규모 주택 채권:</span> 주 의회의 저렴 주택 채권, 대중교통 중심 개발(TOD) 법률 재정비 등 다수 법안 발의.</p>
                    <p><span class="font-bold text-blue-800">▸ TOD 법 우선 적용:</span> LA 카운티의 새 TOD 법 우선 적용을 통한 고밀도 주거지 개발 가속화 계획.</p>
                    <p><span class="font-bold text-blue-800">▸ 100만 호 부족:</span> 캘리포니아 내 약 100만 호에 달하는 저렴 주택 부족 현황.</p>
                </div>`,
                color: "blue",
                link: "https://www.multifamilydive.com/news/california-housing-policy-bills-lawsuits-2026/811018/"
            },
            // ── Economy ──
            {
                category: "Economy",
                title: "트럼프-시진핑 5/14~15 베이징 정상회담 확정 — 무역 긴장 지속",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-gray-800">▸ 교착 속 리스크 관리:</span> 실질적 관세 해소보다 리스크 관리 중심이 될 것이라는 전문가 전망.</p>
                    <p><span class="font-bold text-gray-800">▸ 다전선 무역 분쟁:</span> EU 관세 25% 인상 경고 등 다전선 무역 분쟁 동시 진행.</p>
                    <p><span class="font-bold text-gray-800">▸ 전략적 의제 병행:</span> 무역 외 이란전쟁·대만·사이버 안보 등 전략적 의제 병행 논의 필요성에 대한 브루킹스 연구소 지적.</p>
                </div>`,
                color: "gray",
                link: "https://www.reuters.com/commentary/breakingviews/trump-xi-summit-augurs-more-risk-than-relief-2026-05-06/"
            },
            {
                category: "Economy",
                title: "Q1 2026 글로벌 벤처 펀딩 $3,000억 사상 최대 — AI가 절반 차지",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-gray-800">▸ 역대 분기 최대:</span> 6,000개 스타트업 대상 전 분기 대비 150% 이상 증가한 역대 분기 최대 투자.</p>
                    <p><span class="font-bold text-gray-800">▸ AI 투자 집중:</span> 전체 투자의 약 50%를 AI가 흡수하며 2025년 연간 AI 투자 $2,023억을 한 분기 만에 초과하는 페이스.</p>
                </div>`,
                color: "gray",
                link: "https://news.crunchbase.com/venture/record-breaking-funding-ai-global-q1-2026/"
            },
            {
                category: "Economy",
                title: "반도체 산업, 2026년 매출 $1.3조 — 메모리 부족이 소비자 가격 인상 초래",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-gray-800">▸ HBM 수요 폭증:</span> AI 서버용 HBM 수요 폭증에 따른 글로벌 메모리 공급 부족과 소비자 전자제품 가격 상승.</p>
                    <p><span class="font-bold text-gray-800">▸ 멀티 조 달러 사이클:</span> SEMI CEO의 "멀티 조 달러 성장 사이클 예상보다 빠른 도래" 발언.</p>
                </div>`,
                color: "gray",
                link: "https://finance.yahoo.com/sectors/technology/article/semiconductor-industry-revenue-to-hit-13-trillion-in-2026-as-memory-crunch-hits-consumers-151202545.html"
            },
            {
                category: "Economy",
                title: "미국 관세 부담 90%, 자국 기업·소비자에 전가 — 뉴욕 연준",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-gray-800">▸ 뉴욕 연준 연구:</span> 관세 경제적 부담 대부분의 미국 국내 흡수를 보여주는 뉴욕 연준 연구 결과.</p>
                    <p><span class="font-bold text-gray-800">▸ 여론 지지 하락:</span> 트럼프 경제 정책에 대한 여론 지지 하락을 초래한 소비자 불만 고조.</p>
                </div>`,
                color: "gray",
                link: "https://www.ms.now/ali-velshi/trump-economy-inflation-polling-americans-unhappy-gdp"
            },
            // ── Energy ──
            {
                category: "Energy",
                title: "미국 데이터센터 전력 수요 64 GW, 2030년 183 GW로 3배 추가 전망",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-orange-800">▸ 전력 수요 급증:</span> 2025년 전년 대비 25% 증가하여 64.4 GW에 도달한 미국 데이터센터 전력 수요.</p>
                    <p><span class="font-bold text-orange-800">▸ 성장 선도 지역:</span> 텍사스(13.5 GW, +35.9%), 버지니아(16.6 GW, +27.7%) 순의 성장 속도.</p>
                </div>`,
                color: "orange",
                link: "https://www.spglobal.com/energy/en/news-research/latest-news/electric-power/050626-surging-us-data-center-power-demand-tests-sustainability-targets"
            },
            {
                category: "Energy",
                title: "미국, 5 GW 원전 출력 증대 위한 저비용 금융 지원 개시",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-orange-800">▸ 원전 출력 확대:</span> 기존 원전 출력 확대(uprate)를 위한 저금리 파이낸싱 제공 및 2029년까지 5 GW 추가 목표.</p>
                </div>`,
                color: "orange",
                link: "https://www.reuters.com/business/energy/us-targets-5-gw-more-nuclear-power-through-low-cost-finance--reeii-2026-04-21/"
            },
            // ── Etc ──
            {
                category: "Etc",
                title: "SoftBank, Nvidia·Foxconn과 일본 내 AI 서버 자체 생산 협의",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-gray-800">▸ 일본 내 AI 서버 생산:</span> Nvidia 칩과 Foxconn 제조 역량을 결합한 일본 내 AI 서버 직접 생산 추진.</p>
                </div>`,
                color: "gray",
                link: "https://www.reuters.com/business/media-telecom/softbank-talks-with-nvidia-build-homegrown-ai-servers-nikkei-reports-2026-05-07/"
            },
            {
                category: "Etc",
                title: "SpaceX, 4월까지 올해 50번째 발사 — 사상 최빠른 50회 달성",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-gray-800">▸ 최빠른 기록:</span> 역대 가장 빠른 속도로 완료된 연간 50회 궤도 발사.</p>
                </div>`,
                color: "gray",
                link: "https://www.space.com/space-exploration/launches-spacecraft/spacex-starlink-launch-group-17-14-50th-mission-2026"
            },
            {
                category: "Etc",
                title: "OpenAI, 2026년 1분기만 6건 인수 — 역대 최다 M&A 페이스",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-gray-800">▸ M&A 가속화:</span> TBPN 미디어 인수 포함 올해 1분기 6건 완료로 연간 최다 기록 경신 중.</p>
                </div>`,
                color: "gray",
                link: "https://news.crunchbase.com/ma/data-openai-2023-2026-acquisitions-open-source-astral-promptfoo/"
            },
            // ── M&A ──
            {
                category: "M&A",
                title: "Foxconn, 폴란드 EMP와 EV 제조 허브 합작 설립",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-indigo-800">▸ 유럽 EV 진출:</span> 폴란드 EMP와 협력을 통한 유럽 내 전기차 제조 허브 건설.</p>
                </div>`,
                color: "indigo",
                link: "https://www.reuters.com/world/asia-pacific/polands-emp-teams-up-with-foxconn-build-ev-manufacturing-hub-2026-05-07/"
            },
            // ── Politics ──
            {
                category: "Politics",
                title: "펜타곤, 7개 빅테크와 AI 기밀 네트워크 계약 — Anthropic 배제",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-blue-800">▸ AI 기밀 계약:</span> SpaceX·OpenAI·Google·Microsoft·Nvidia·AWS·Oracle·Reflection의 '모든 합법적 작전 사용' 계약 체결.</p>
                </div>`,
                color: "blue",
                link: "https://www.bbc.com/news/articles/cy02gjq2987o"
            },
            {
                category: "Politics",
                title: "2026 중간선거 — 상원 9명 은퇴, 11석 오픈시트로 판도 변화 가능",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-blue-800">▸ 대규모 오픈시트:</span> 공화당 5명·민주당 4명 은퇴에 따른 사상 최대 규모 오픈시트 발생.</p>
                </div>`,
                color: "blue",
                link: "https://www.nytimes.com/interactive/polls/kansas-us-senate-election-polls-2026.html"
            },
            {
                category: "Politics",
                title: "DARPA, 자율 드론 군집 전투용 '물리적 AI' 및 분산 조직화 연구 착수",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-blue-800">▸ 두 개 프로그램:</span> 로봇의 재료 수준 지능(화학·물리 기반)과 P2P 자율 팀 편성 능력을 다루는 두 개 프로그램.</p>
                </div>`,
                color: "blue",
                link: "https://www.defenseone.com/technology/2026/05/pentagon-drones-autonomous-warfare/413323/"
            },
            // ── Robotics ──
            {
                category: "Robotics",
                title: "Figure AI, 120일 만에 생산 속도 24배 — 시간당 1대, 총 350대 이상 출하",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-red-800">▸ 생산 속도 24배 증가:</span> 하루 1대에서 시간당 1대로 확대된 Figure 03 생산과 150개 워크스테이션·전용 라인 가동.</p>
                </div>`,
                color: "red",
                link: "https://theaiinsider.tech/2026/05/01/figure-ai-ramps-up-production-to-one-humanoid-robot-per-hour/"
            },
            {
                category: "Robotics",
                title: "Amazon, 100만 대 이상 산업용 로봇에 AI 파운데이션 모델 탑재",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-red-800">▸ AI 모델 적용:</span> 세계 최대 산업용 모바일 로봇 함대에 자체 개발 AI 모델을 적용한 자율 판단력 강화.</p>
                </div>`,
                color: "red",
                link: "https://www.aboutamazon.com/news/operations/amazon-million-robots-ai-foundation-model"
            },
            // ── Tech ──
            {
                category: "Tech",
                title: "Google Cloud Next '26 — 엔터프라이즈 AI '실전 단계' 선언",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-green-800">▸ AI 실전 단계:</span> 고객 75% AI 제품 사용, 분당 160억 토큰 처리, 330개 고객의 연간 1조 토큰 이상 소비.</p>
                </div>`,
                color: "green",
                link: "https://www.reuters.com/technology/artificial-intelligence/google-finds-its-place-ai-battle-enterprise-2026-04-22/"
            },
            {
                category: "Tech",
                title: "미국, AI 칩 수출에 글로벌 라이선스 체계 검토 — Nvidia·AMD 영향 불가피",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-green-800">▸ 수출 라이선스 검토:</span> 외국 구매자 대상 미국 내 투자를 조건으로 한 수출 라이선스 부여 방안 논의.</p>
                </div>`,
                color: "green",
                link: "https://www.reuters.com/world/us-mulls-new-rules-ai-chip-exports-including-requiring-investments-by-foreign-2026-03-05/"
            },
            // ── Texas ──
            {
                category: "Texas",
                title: "Samsung, Taylor 텍사스 $170억 팹 2026년 개장 — 2nm 전환 시사",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-orange-800">▸ 대규모 팹 가동:</span> 1,200에이커 부지, 상시 직원 1,500명 규모의 올해 내 가동 개시 목표.</p>
                </div>`,
                color: "orange",
                link: "https://www.mysanantonio.com/business/article/samsung-chip-factory-taylor-texas-22232085.php"
            },
            {
                category: "Texas",
                title: "ERCOT, 2028년 계획 예비율 마이너스 전망 — 송전 확충 시급",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-orange-800">▸ 예비율 하락:</span> 2026~2030년 여름·겨울 예비율 하락세와 2028년 마이너스 진입 전망.</p>
                </div>`,
                color: "orange",
                link: "https://www.reuters.com/business/energy/texas-power-supply-margins-squeezed-until-grid-expansions-kick--reeii-2026-04-21/"
            },
            {
                category: "Texas",
                title: "텍사스, 데이터센터 수요 대응 위해 전력 시장 구조 개편 검토",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-orange-800">▸ 전력 시장 개혁:</span> CERAWeek에서 데이터센터 전력 시장 개혁 방안을 공개 논의한 공공사업위원회(PUC) 의장.</p>
                </div>`,
                color: "orange",
                link: "https://www.eenews.net/articles/texas-may-overhaul-power-market-to-handle-data-center-boom/"
            }
        ]
    },
    // =====================================================
    // 2026년 4월 4주차
    // =====================================================
    {
        week: "2026년 4월 4주차",
        date: "April 23, 2026",
        items: [
            // ── Case Study ──
            {
                category: "Case Study",
                title: "Hilti: '건설업의 애플' — 전동공구 제조를 넘어 건설 현장 통합 플랫폼 기업으로의 진화",
                desc: `<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p class="font-bold text-blue-800 mb-1">■ 직접 판매 모델 및 Fleet Management 구독 전환</p>
                        전 세계 15,000명의 영업 담당자가 매일 건설 현장을 직접 방문하여 하루 20만 건 이상의 고객 접점을 생성하는 100% B2B 직접 판매 모델 운영.<br>
                        2000년대 초 개별 공구 판매에서 월정액 구독형 Fleet Management(공구 사용 + 수리·도난보상·업그레이드 일체 포함)로 전환, 현재 100만 대 이상의 장비를 서비스로 운용.
                    </div>
                    <div>
                        <p class="font-bold text-blue-800 mb-1">■ 디지털 생태계 및 비즈니스 모델 수직 계열화 시사점</p>
                        Nuron(22V 단일 배터리 무선 플랫폼)으로 70개 이상의 공구를 하나의 배터리 생태계로 통합하고, 모든 장비를 클라우드에 연결하여 사용 데이터를 자동 수집·분석.<br>
                        Fieldwire(현장 관리), ON!Track(자산 추적), 4PS(ERP 연동), CrewCenter(인력 관리)를 통합하여 건설 현장의 '운영 시스템(OS)' 역할 수행, 고객 생산성 12% 향상 달성.
                    </div>
                </div>`,
                color: "purple",
                link: ""
            },
            // ── California ──
            {
                category: "California",
                title: "캘리포니아, AI 규제 '국가 시험장'으로 부상 — SB 1000·SB 53 법안 추진",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-blue-800">▸ SB 1000:</span> AI 생성 콘텐츠의 출처 공개 의무화(2026년 8월 시행 예정). 콘텐츠 투명성 강화를 통한 딥페이크·허위정보 대응.</p>
                    <p><span class="font-bold text-blue-800">▸ SB 53:</span> AI 기업의 리스크 보고 프레임워크 도입. 연방 의회가 교착 상태인 가운데 캘리포니아가 사실상의 국가 표준을 선도.</p>
                </div>`,
                color: "blue",
                link: "https://www.axios.com/2026/04/03/california-national-testing-ground-ai-rules"
            },
            {
                category: "California",
                title: "캘리포니아, 조립식 공장 제조 주택(Factory-Built Housing) 보험 파일럿 프로그램 시행",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-blue-800">▸ 보험 파일럿:</span> 공장 제조 주택의 보험 접근성을 개선하기 위한 주 차원의 시범 프로그램 도입.</p>
                    <p><span class="font-bold text-blue-800">▸ 주택 공급 가속화:</span> 기존 현장 건설 대비 공기 단축 및 비용 절감이 가능한 공장 제조 방식의 확산 지원.</p>
                </div>`,
                color: "blue",
                link: "https://calmatters.org/housing/2026/03/factory-built-housing-insurance/"
            },
            // ── Economy ──
            {
                category: "Economy",
                title: "연준 금리 동결 전망 — 이란전쟁발 인플레이션 압력 속 3.5~3.75% 유지",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-gray-800">▸ 금리 전망:</span> 정책 금리 3.5~3.75% 유지, CPI +3.3% YoY. Polymarket 기준 금리 인하 미시행 확률 34%.</p>
                    <p><span class="font-bold text-gray-800">▸ 이란전쟁 영향:</span> 유가 $100/배럴 돌파 가능성과 중동 지정학적 리스크가 인플레이션 압력으로 작용.</p>
                </div>`,
                color: "gray",
                link: "https://fortune.com/2026/04/13/investors-write-off-fed-rate-cut-iran-inflation/"
            },
            {
                category: "Economy",
                title: "트럼프 관세 1년 — 가구당 연간 $700 세금 부담 증가",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-gray-800">▸ 가계 부담:</span> 관세 전쟁으로 인한 미국 가구당 연간 약 $700의 추가 세금 부담 발생.</p>
                    <p><span class="font-bold text-gray-800">▸ IMF 전망:</span> IMF, 미국 2026년 GDP 성장률 2.4% 전망. 관세 불확실성이 기업 투자 위축의 주요 요인.</p>
                </div>`,
                color: "gray",
                link: "https://www.cnbc.com/2026/04/03/trump-tariffs-trade-war-impact.html"
            },
            {
                category: "Economy",
                title: "IMF, 미국 2026년 GDP 성장률 2.4% 전망",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-gray-800">▸ 성장 전망:</span> 관세 불확실성에도 불구하고 AI 투자와 소비 회복력에 힘입어 2.4% 성장 유지 전망.</p>
                </div>`,
                color: "gray",
                link: "https://www.imf.org/en/news/articles/2026/04/01/pr-26102-usa-imf-executive-board-concludes-2026-article-iv-consult"
            },
            {
                category: "Economy",
                title: "글로벌 반도체 매출 $1.3조 돌파 전망 — 전년 대비 64% 성장",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-gray-800">▸ Gartner 전망:</span> 2026년 글로벌 반도체 매출 $1.3조 초과 전망(+64% YoY).</p>
                    <p><span class="font-bold text-gray-800">▸ 메모리 가격 폭등:</span> 메모리 가격 +125%, 스토리지 칩 가격 +234%로 AI 수요 주도 슈퍼사이클 진입.</p>
                </div>`,
                color: "gray",
                link: "https://www.gartner.com/en/newsroom/press-releases/2026-04-08-gartner-forecasts-worldwide-semiconductor-revenue-to-exceed-us-dollars-one-point-3-trillion-in-2026"
            },
            // ── Energy ──
            {
                category: "Energy",
                title: "SMR(소형 모듈 원전) 르네상스 — AI 데이터센터 전력 공급의 핵심 대안으로 부상",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-orange-800">▸ 전력 수요 폭증:</span> IEA, 2025년 데이터센터 전력 소비 1,000 TWh 초과 전망. AI 워크로드는 일반 대비 2.5배(80 MW) 전력 필요.</p>
                    <p><span class="font-bold text-orange-800">▸ SMR 장점:</span> 모듈식 건설로 데이터센터 인접 설치 가능, 안정적 기저 전력 공급원으로 Big Tech 기업들의 관심 집중.</p>
                </div>`,
                color: "orange",
                link: "https://www.softwareseni.com/what-the-nuclear-power-renaissance-means-for-the-future-of-ai-infrastructure/"
            },
            {
                category: "Energy",
                title: "이란전쟁 에너지 충격 — 유가 $100/배럴 돌파 가능성",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-orange-800">▸ 공급 충격 비교:</span> 과거 중동 분쟁 시 에너지 공급 충격과 비교 분석. 호르무즈 해협 통행 위험 시 글로벌 원유 공급의 20% 영향.</p>
                </div>`,
                color: "orange",
                link: "https://www.reuters.com/business/energy/how-iran-war-oil-gas-supply-shock-compares-with-past-disruptions-2026-04-22/"
            },
            {
                category: "Energy",
                title: "미국, 데이터센터 전력 사용량 보고 의무화 — EIA 주도",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-orange-800">▸ 보고 의무화:</span> 에너지정보청(EIA)이 데이터센터 운영자에게 전력 사용량 보고를 의무화하는 최초의 연방 수준 조치.</p>
                </div>`,
                color: "orange",
                link: "https://www.wired.com/story/the-us-government-to-ask-data-centers-how-much-power-they-use/"
            },
            {
                category: "Energy",
                title: "ERCOT 텍사스 전력망, 2028년 예비 마진 마이너스 전망 — 대기열 233 GW 돌파",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-orange-800">▸ 예비율 위기:</span> 데이터센터·제조업 수요 급증으로 2028년 예비 마진 마이너스 진입 전망.</p>
                    <p><span class="font-bold text-orange-800">▸ 연결 대기열:</span> 전력 계통 연결 대기열 233 GW 초과(+269% YoY)로 송전 인프라 병목 심화.</p>
                </div>`,
                color: "orange",
                link: "https://www.reuters.com/business/energy/texas-power-supply-margins-squeezed-until-grid-expansions-kick--reeii-2026-04-21/"
            },
            // ── Etc ──
            {
                category: "Etc",
                title: "AI 군비 경쟁 가속 — 미국·중국·러시아 3강 구도",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-gray-800">▸ 3강 경쟁:</span> 미국·중국·러시아가 AI 무기 개발에 국가적 역량을 집중하며 새로운 군비 경쟁 국면 진입.</p>
                </div>`,
                color: "gray",
                link: "https://www.nytimes.com/2026/04/12/technology/china-russia-us-ai-weapons.html"
            },
            {
                category: "Etc",
                title: "SpaceX, 2026년 1,000번째 Starlink 위성 발사 & 600번째 Falcon 9 착륙 달성",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-gray-800">▸ 이정표:</span> 4월 14일 올해 1,000번째 Starlink 위성 발사와 동시에 Falcon 9 부스터의 600번째 착륙을 달성.</p>
                </div>`,
                color: "gray",
                link: "https://spaceflightnow.com/2026/04/14/live-coverage-spacex-to-launch-1000th-starlink-satellite-of-2026-on-falcon-9-rocket-from-cape-canaveral/"
            },
            // ── M&A ──
            {
                category: "M&A",
                title: "IBM, Confluent $110억 인수 완료 — 주당 $31",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-indigo-800">▸ 대형 인수:</span> IBM이 데이터 스트리밍 플랫폼 Confluent을 $110억에 인수 완료. 실시간 데이터 처리 역량 대폭 강화.</p>
                </div>`,
                color: "indigo",
                link: "https://www.wsj.com/cio-journal/ibm-closes-11-billion-deal-for-confluent-13fcbea0"
            },
            // ── Politics ──
            {
                category: "Politics",
                title: "트럼프, $1.5조 국방 예산안 제출 — AI·자율 무기에 집중",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-blue-800">▸ AI 전쟁 전환:</span> 펜타곤이 $540억 규모의 AI·자율 무기 중심 예산 배분을 요청하며 전통 무기 체계에서 AI 전력으로의 피벗 가속화.</p>
                </div>`,
                color: "blue",
                link: "https://www.theguardian.com/us-news/2026/apr/22/pentagon-asks-for-54bn-in-pivot-towards-ai-powered-war"
            },
            {
                category: "Politics",
                title: "미중 5월 무역 정상회담 예정 — 관세 분쟁 지속 속 대화 재개",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-blue-800">▸ 정상회담 배경:</span> 양국 간 관세 분쟁이 지속되는 가운데 5월 정상회담을 통한 협상 재개 시도.</p>
                </div>`,
                color: "blue",
                link: "https://www.reuters.com/world/china/trumps-trade-war-with-china-focus-ahead-may-summit-2026-04-06/"
            },
            {
                category: "Politics",
                title: "AI 효율화 명목 기업 해고 물결 — 정치적 반발 확산",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-blue-800">▸ AI 구조조정:</span> AI 투자 확대와 동시에 기존 인력 감축이 가속화되며 노동시장 불안과 정치적 반발 동시 확산.</p>
                </div>`,
                color: "blue",
                link: "https://www.reuters.com/business/world-at-work/companies-cutting-jobs-investments-shift-toward-ai-2026-04-15/"
            },
            // ── Robotics ──
            {
                category: "Robotics",
                title: "Tesla Optimus 3, 2026년 여름 양산 개시 — 연간 100만 대 목표",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-red-800">▸ 양산 임박:</span> 2026년 여름 Optimus 3 양산 개시 예정. 궁극적으로 연간 100만 대 생산 목표.</p>
                </div>`,
                color: "red",
                link: "https://www.greendrive-accessories.com/blog/language/en/tesla-optimus-3-robot-humanoide-2026-2/"
            },
            {
                category: "Robotics",
                title: "중국, 2026년 휴머노이드 로봇 20,000대 배치 목표",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-red-800">▸ 국가 전략:</span> 중국 정부가 2026년 내 20,000대의 휴머노이드 로봇 배치를 국가 목표로 설정.</p>
                </div>`,
                color: "red",
                link: "https://unteachablecourses.com/humanoid-robots-2026/"
            },
            {
                category: "Robotics",
                title: "Amazon 물류 로봇 100만 대 돌파 — AI 경로 최적화로 이동 시간 10% 단축",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-red-800">▸ 100만 대 돌파:</span> Amazon 물류센터 로봇이 100만 대를 초과하며 AI 기반 경로 최적화로 이동 시간 10% 단축 달성.</p>
                </div>`,
                color: "red",
                link: "https://www.forbes.com/sites/ronschmelzer/2025/07/07/amazons-millionth-warehouse-robot-is-here-and-its-getting-smarter/"
            },
            // ── Tech ──
            {
                category: "Tech",
                title: "Google, 엔터프라이즈 AI 에이전트 출시 — Workspace Studio·Project Mariner",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-green-800">▸ AI 에이전트:</span> Google Cloud Next '26에서 Workspace Studio, Project Mariner 등 엔터프라이즈 AI 에이전트 공개.</p>
                </div>`,
                color: "green",
                link: "https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/next-2026/"
            },
            {
                category: "Tech",
                title: "Anthropic, $300억 Series G 투자 유치 — 기업 가치 $3,800억",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-green-800">▸ 대규모 투자:</span> Anthropic이 $300억 Series G 라운드를 완료하며 포스트머니 밸류에이션 $3,800억 달성.</p>
                </div>`,
                color: "green",
                link: "https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation"
            },
            // ── Texas ──
            {
                category: "Texas",
                title: "텍사스 경제 규모 $2.9조 — 세계 8위 경제권",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-orange-800">▸ 경제 규모:</span> 2025년 텍사스 GDP $2.9조 달성으로 독립 국가 기준 세계 8위 경제 규모.</p>
                </div>`,
                color: "orange",
                link: "https://gov.texas.gov/news/post/texas-economy-hits-record-2.9-trillion"
            },
            {
                category: "Texas",
                title: "Samsung·Tesla AI 칩 공장 — Taylor, TX 2nm 생산 2027년 하반기 목표",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-orange-800">▸ 차세대 AI 칩:</span> Samsung이 텍사스 Taylor에서 Tesla의 차세대 AI 프로세서를 2nm 공정으로 생산. 2027년 하반기 양산 목표.</p>
                </div>`,
                color: "orange",
                link: "https://www.cxodigitalpulse.com/samsung-nears-launch-of-texas-chip-plant-to-produce-teslas-next-gen-ai-processors/"
            }
        ]
    },
    // =====================================================
    // 2026년 4월 2주차
    // =====================================================
    {
        week: "2026년 4월 2주차",
        date: "April 9, 2026",
        items: [
            {
                category: "Economy",
                title: "트럼프 관세 전쟁 1년 — 글로벌 무역 질서 재편과 미국 경제 영향",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-gray-800">▸ 무역 전쟁 확대:</span> 중국·EU·캐나다 등 주요 교역국과의 관세 분쟁이 1년간 지속되며 글로벌 공급망 재편 가속화.</p>
                    <p><span class="font-bold text-gray-800">▸ 소비자 영향:</span> 관세로 인한 수입품 가격 상승이 미국 소비자 물가에 직접적 영향. 가전·자동차·의류 등 주요 품목 가격 상승.</p>
                </div>`,
                color: "gray",
                link: "https://www.cnbc.com/2026/04/03/trump-tariffs-trade-war-impact.html"
            },
            {
                category: "Tech",
                title: "AI 인프라 투자 경쟁 가속 — 빅테크 데이터센터 CapEx 사상 최대",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-green-800">▸ 투자 규모:</span> Microsoft·Google·Amazon·Meta의 2026년 데이터센터 자본 지출이 합산 $2,000억을 초과하며 사상 최대 기록.</p>
                    <p><span class="font-bold text-green-800">▸ GPU 수요:</span> Nvidia H200·B100 GPU 수요가 공급을 크게 초과하며 납기 6개월 이상으로 확대.</p>
                </div>`,
                color: "green",
                link: ""
            }
        ]
    },
    // =====================================================
    // 2026년 3월 4주차
    // =====================================================
    {
        week: "2026년 3월 4주차",
        date: "March 26, 2026",
        items: [
            {
                category: "Economy",
                title: "연준, 3월 FOMC 금리 동결 — '데이터 의존' 기조 유지",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-gray-800">▸ 금리 동결:</span> 정책 금리 3.5~3.75% 유지. 인플레이션 둔화 속도가 예상보다 느리다는 판단.</p>
                    <p><span class="font-bold text-gray-800">▸ 향후 전망:</span> 2026년 내 1~2회 인하 가능성을 시사하나 시점은 경제 지표에 따라 결정.</p>
                </div>`,
                color: "gray",
                link: ""
            },
            {
                category: "Energy",
                title: "미국 원전 르네상스 — SMR 건설 허가 신청 급증",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-orange-800">▸ SMR 허가 러시:</span> NRC에 접수된 SMR 건설 허가 신청이 전년 대비 3배 증가. AI 데이터센터 전력 수요가 주요 동인.</p>
                    <p><span class="font-bold text-orange-800">▸ Big Tech 참여:</span> Microsoft·Google·Amazon이 직접 원전 전력 구매 계약(PPA)을 체결하며 원전 투자에 적극 참여.</p>
                </div>`,
                color: "orange",
                link: ""
            },
            {
                category: "Robotics",
                title: "휴머노이드 로봇 시장, 2026년 본격 상업화 원년",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-red-800">▸ 시장 성장:</span> 글로벌 휴머노이드 로봇 시장이 2026년 $50억 규모로 성장하며 본격 상업화 단계 진입.</p>
                    <p><span class="font-bold text-red-800">▸ 주요 플레이어:</span> Tesla Optimus·Figure AI·Unitree·AgiBot 등이 양산 경쟁에 돌입.</p>
                </div>`,
                color: "red",
                link: ""
            }
        ]
    },
    // =====================================================
    // 2026년 3월 2주차
    // =====================================================
    {
        week: "2026년 3월 2주차",
        date: "March 12, 2026",
        items: [
            {
                category: "Tech",
                title: "Anthropic Claude 4 출시 — 멀티모달·코딩·추론 성능 대폭 향상",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-green-800">▸ Claude 4:</span> Anthropic이 차세대 모델 Claude 4를 출시하며 GPT-5·Gemini 2와의 3강 경쟁 구도 형성.</p>
                    <p><span class="font-bold text-green-800">▸ 성능:</span> 코딩·수학·추론 벤치마크에서 전 세대 대비 40% 이상 성능 향상. 200K 컨텍스트 윈도우 지원.</p>
                </div>`,
                color: "green",
                link: ""
            },
            {
                category: "California",
                title: "캘리포니아 주지사 뉴섬, AI 행정명령 서명 — 주 계약 AI 기업에 공개 의무 부과",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-blue-800">▸ 행정명령:</span> 주 정부 계약을 원하는 AI 기업에 불법 콘텐츠·모델 편향·시민권·언론 자유 영향에 대한 공개 의무 부과.</p>
                    <p><span class="font-bold text-blue-800">▸ 국가 표준 선도:</span> 연방 의회 교착 속 캘리포니아가 거대 시장 접근 조건을 통해 사실상의 국가 표준을 수립.</p>
                </div>`,
                color: "blue",
                link: ""
            }
        ]
    },
    // =====================================================
    // 2026년 2월 4주차
    // =====================================================
    {
        week: "2026년 2월 4주차",
        date: "February 26, 2026",
        items: [
            {
                category: "Economy",
                title: "미국 GDP 2025년 4분기 성장률 2.8% — 소비·AI 투자 견인",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-gray-800">▸ 소비 견인:</span> 개인 소비 지출이 3.2% 증가하며 성장의 주요 동력. 서비스 부문이 특히 강세.</p>
                    <p><span class="font-bold text-gray-800">▸ AI 투자 효과:</span> 기업의 AI 인프라 투자가 설비 투자를 15% 이상 끌어올리며 성장에 기여.</p>
                </div>`,
                color: "gray",
                link: ""
            },
            {
                category: "Texas",
                title: "텍사스, 미국 내 데이터센터 투자 유치 1위 — 2025년 $300억 초과",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-orange-800">▸ 투자 유치:</span> 저렴한 전력·토지·우호적 규제 환경으로 2025년 텍사스 데이터센터 투자가 $300억을 초과.</p>
                    <p><span class="font-bold text-orange-800">▸ 주요 프로젝트:</span> Microsoft·Google·Oracle·xAI 등이 텍사스에 대규모 데이터센터 건설 발표.</p>
                </div>`,
                color: "orange",
                link: ""
            }
        ]
    },
    // =====================================================
    // 2026년 2월 2주차
    // =====================================================
    {
        week: "2026년 2월 2주차",
        date: "February 12, 2026",
        items: [
            {
                category: "Politics",
                title: "트럼프, 이란에 대한 군사적 옵션 경고 — 핵 협상 결렬 후 긴장 고조",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-blue-800">▸ 핵 협상 결렬:</span> 이란 핵 프로그램 협상이 결렬되며 미국이 군사적 옵션을 공개적으로 언급.</p>
                    <p><span class="font-bold text-blue-800">▸ 중동 긴장:</span> 호르무즈 해협 인근 미 해군 증강 배치와 이란의 군사 훈련 확대로 긴장 고조.</p>
                </div>`,
                color: "blue",
                link: ""
            },
            {
                category: "Tech",
                title: "OpenAI, GPT-5 출시 — 에이전트 기능 및 실시간 추론 강화",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-green-800">▸ GPT-5:</span> OpenAI가 GPT-5를 공개하며 자율적 작업 수행이 가능한 에이전트 기능을 핵심으로 내세움.</p>
                    <p><span class="font-bold text-green-800">▸ 실시간 추론:</span> 복잡한 다단계 추론 작업에서 전 세대 대비 2배 이상의 성능 향상.</p>
                </div>`,
                color: "green",
                link: ""
            }
        ]
    },
    // =====================================================
    // 2026년 1월 4주차
    // =====================================================
    {
        week: "2026년 1월 4주차",
        date: "January 22, 2026",
        items: [
            {
                category: "Economy",
                title: "2026년 글로벌 경제 전망 — IMF '불확실성의 해' 경고",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-gray-800">▸ IMF 전망:</span> 글로벌 GDP 성장률 3.1% 전망. 관세 분쟁·지정학적 리스크·인플레이션 잔존이 주요 하방 위험.</p>
                    <p><span class="font-bold text-gray-800">▸ AI 성장 동력:</span> AI 투자와 생산성 향상이 유일한 상방 요인으로 작용할 전망.</p>
                </div>`,
                color: "gray",
                link: ""
            },
            {
                category: "Robotics",
                title: "CES 2026 — 휴머노이드 로봇이 주인공으로 등극",
                desc: `<div class="space-y-2">
                    <p><span class="font-bold text-red-800">▸ CES 하이라이트:</span> 20개 이상의 휴머노이드 로봇 기업이 CES 2026에 참가하며 전시회 최대 화제.</p>
                    <p><span class="font-bold text-red-800">▸ 상용화 경쟁:</span> Figure AI·Unitree·1X·Agility Robotics 등이 2026년 내 상용 배치 계획을 발표.</p>
                </div>`,
                color: "red",
                link: ""
            }
        ]
    }
];
