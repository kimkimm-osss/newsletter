const newsData = [
    {
        week: "2026년 4월 4주차",
        date: "April 23, 2026",
        items: [
            // ── Case Study ──
            {
                category: "Case Study",
                title: "Hilti: '건설업의 애플' — 전동공구 제조를 넘어 건설 현장 통합 플랫폼 기업으로의 진화",
                desc: `
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p class="font-bold text-blue-800 mb-1">■ 직접 판매 모델 및 Fleet Management 구독 전환</p>
                            - 전 세계 15,000명의 영업 담당자가 매일 건설 현장을 직접 방문하여 하루 20만 건 이상의 고객 접점을 생성하는 100% B2B 직접 판매 모델 운영.<br>
                            - 2000년대 초 개별 공구 판매에서 월정액 구독형 Fleet Management(공구 사용 + 수리·도난보상·업그레이드 일체 포함)로 비즈니스 모델을 전환, 현재 100만 대 이상의 장비를 서비스로 운용.<br>
                            - 반복 매출(recurring revenue) 구조 덕분에 2008년 금융위기 당시 건설 산업 전반이 정체한 상황에서도 안정적 실적을 유지 (하버드 비즈니스 스쿨 케이스 스터디로 채택).
                        </div>
                        <div>
                            <p class="font-bold text-blue-800 mb-1">■ 디지털 생태계 및 비즈니스 모델 수직 계열화 시사점</p>
                            - Nuron(22V 단일 배터리 무선 플랫폼)으로 70개 이상의 공구를 하나의 배터리 생태계로 통합하고, 모든 장비를 클라우드에 연결하여 사용 데이터를 자동 수집·분석.<br>
                            - Fieldwire(현장관리, $3억 인수) + ON!Track(IoT 자산추적) + 4PS(건설 ERP) + CrewCenter(근무관리)로 구성된 소프트웨어 스택이 생산성을 12% 이상 향상시키며, 하드웨어·소프트웨어·서비스가 하나로 엮인 고객 Lock-in 생태계를 완성.<br>
                            - 단순 공구 판매 중심에서 <strong>'장비 하드웨어 → 데이터 플랫폼 → 구독 서비스 → 디지털 건설 관리'</strong>로 이어지는 제조 기업의 성공적인 플랫폼 전환 경로를 제시.
                        </div>
                    </div>
                `,
                color: "purple",
                link: ""
            },
            // ── California ──
            {
                category: "California",
                title: "캘리포니아, 미국 AI 규제의 '국가적 시험장'으로 부상",
                desc: "- 캘리포니아 주의회에서 AI 투명성법(SB 1000) 등 복수의 AI 규제 법안이 동시 진행 중. 2026년 8월부터 AI 생성 콘텐츠 출처 공개 의무화.<br>- 1월 발효된 SB 53은 대형 AI 모델 개발자에게 안전 프레임워크 공개와 리스크 보고를 요구.<br>- 연방 AI 규제가 부재한 상황에서 캘리포니아법이 글로벌 AI 기업의 사실상 규범으로 작용.",
                color: "blue",
                link: "https://www.axios.com/2026/04/03/california-national-testing-ground-ai-rules"
            },
            {
                category: "California",
                title: "캘리포니아, 공장 조립식 주택 활성화 위해 주정부 보험 사업 검토",
                desc: "- 캘리포니아 주정부가 공장 조립식 주택(factory-built housing) 장려를 위해 건설 보험 사업에 직접 참여하는 방안을 검토.<br>- 기존 보험사들이 조립식 주택을 기피해 개발사 참여가 저조했던 문제를 해소하려는 조치.<br>- 산불 피해 복구·만성적 주택 부족 대응으로, 제조업 역량을 주거 인프라에 접목하는 혁신 사례.",
                color: "blue",
                link: "https://calmatters.org/housing/2026/03/factory-built-housing-insurance/"
            },
            // ── Economy ──
            {
                category: "Economy",
                title: "연준 4월 회의 금리 동결 전망 — 이란전쟁·관세 인플레 이중 압박",
                desc: "- 기준금리 3.5~3.75% 유지 중이며 4/28-29 FOMC 회의에서도 동결 유력. CPI 전년비 3.3% 상승으로 인하 기대 후퇴.<br>- Polymarket에서 \"2026년 내 금리 인하 없음\" 확률이 34%까지 상승 → 이란전쟁발 유가 급등이 인플레를 자극.<br>- IMF는 관세 효과 소멸과 유가 하락이 전제될 경우 핵심 PCE 인플레이션 2%대 회귀 가능하다고 조건부 전망.",
                color: "gray",
                link: "https://fortune.com/2026/04/13/investors-write-off-fed-rate-cut-iran-inflation/"
            },
            {
                category: "Economy",
                title: "트럼프 관세 1년 — 무역전쟁 장기 영향, 산업별 타격 차별화",
                desc: "- 트럼프 관세 정책 1주년. 일부 산업은 대체 공급망을 구축했으나 농업·소비재 등은 비용 상승 부담 지속.<br>- Tax Foundation에 따르면 현행 관세 체계로 미국 가구당 연평균 $700의 세금 부담 증가.<br>- CNBC 분석: \"관세가 무역적자를 의미 있게 변화시키지 못했다\"는 평가. 5월 미·중 정상회담이 분수령.",
                color: "gray",
                link: "https://www.cnbc.com/2026/04/03/trump-tariffs-trade-war-impact.html"
            },
            {
                category: "Economy",
                title: "IMF, 2026년 미국 성장률 2.4% 전망",
                desc: "- IMF 연례 점검(Article IV) 결과, 2026년 미국 GDP 성장률 2.4% 전망 → 관세 효과 소멸·유가 하락 시 물가 안정 가능.<br>- Goldman Sachs는 현행 관세가 하반기까지 인플레이션을 1%p 끌어올릴 것으로 추정.<br>- 이란전쟁으로 인한 에너지 가격 불확실성이 최대 하방 리스크로 지목.",
                color: "gray",
                link: "https://www.imf.org/en/news/articles/2026/04/01/pr-26102-usa-imf-executive-board-concludes-2026-article-iv-consult"
            },
            {
                category: "Economy",
                title: "글로벌 반도체 매출 $1.3조 돌파 전망 — 20년 만에 최대 성장",
                desc: "- 2026년 글로벌 반도체 매출 $1.3조 초과, 전년비 64% 성장 전망. 20년 내 최고 성장률.<br>- 메모리 가격 125% 상승·스토리지칩 234% 상승하는 '멤플레이션(Memflation)' 현상 발생. 소비자 비용 부담 전이.<br>- AI 훈련·추론칩 수요가 전체 반도체 성장의 핵심 동력. Bank of America도 매출 목표를 $1.3조로 상향.",
                color: "gray",
                link: "https://www.gartner.com/en/newsroom/press-releases/2026-04-08-gartner-forecasts-worldwide-semiconductor-revenue-to-exceed-us-dollars-one-point-3-trillion-in-2026"
            },
            // ── Energy ──
            {
                category: "Energy",
                title: "원자력 르네상스 — SMR이 AI 인프라의 전력 해법으로 부상",
                desc: "- IEA 4월 기준 글로벌 데이터센터 전력 소비가 2025년 1,000 TWh 돌파. AI 시설은 기존 대비 2.5배(80MW) 전력 필요.<br>- NuScale·Oklo 등 SMR 기업 주가 4월 3주차 일제히 급등 → Meta와 1.2GW 시스템 계약(2030년 가동) 등 구체 수주 진행.<br>- Siemens Energy가 SMR & Advanced Reactor 2026 행사 주최, 원자력이 AI 시대 핵심 전력원으로 재조명.",
                color: "orange",
                link: "https://www.softwareseni.com/what-the-nuclear-power-renaissance-means-for-the-future-of-ai-infrastructure/"
            },
            {
                category: "Energy",
                title: "이란전쟁 에너지 충격, 역대 사태와 비교 분석",
                desc: "- Reuters 분석: 이란전쟁발 공급 차질은 1973년 석유파동, 1990년 걸프전 이후 최대 규모.<br>- Al Jazeera: \"500만 배럴 이상의 일일 공급 차질은 대체 불가\". 유가 $100 이상 장기화 가능성 제기.<br>- 글로벌 에너지 흐름이 재편되며 아시아·유럽의 대체 공급원 확보 경쟁 심화.",
                color: "orange",
                link: "https://www.reuters.com/business/energy/how-iran-war-oil-gas-supply-shock-compares-with-past-disruptions-2026-04-22/"
            },
            {
                category: "Energy",
                title: "미 정부, 데이터센터 전력 사용량 공개 의무화 추진",
                desc: "- EIA가 데이터센터 사업자에게 전력 사용량 의무 보고 조사를 추진 (기존 발전소·정유사만 대상이던 것을 확대).<br>- AI 데이터센터의 전력 소비가 국가 에너지 안보 이슈로 부상한 것이 배경.<br>- 데이터센터 전력 소비의 실체적 규모가 처음으로 공식 집계될 전망 (에너지·테크 기업 간 전력 배분 갈등 예상).",
                color: "orange",
                link: "https://www.wired.com/story/the-us-government-to-ask-data-centers-how-much-power-they-use/"
            },
            {
                category: "Energy",
                title: "텍사스 전력망 예비율, 2028년까지 마이너스 전망 — AI 부하 급증",
                desc: "- ERCOT(텍사스 전력망) 여름·겨울 예비율이 2026~2030년 감소하며, 2028년에는 마이너스 수준에 도달 전망.<br>- ERCOT의 대형 부하 접속 대기 큐가 233GW 이상으로 전년비 269% 급증 (대부분 AI 데이터센터 관련).<br>- 텍사스 전력 당국(PUC)은 4/17 공개 회의에서 2032년 피크 수요가 현재의 4배 이상이 될 수 있다는 예측 논의.",
                color: "orange",
                link: "https://www.reuters.com/business/energy/texas-power-supply-margins-squeezed-until-grid-expansions-kick--reeii-2026-04-21/"
            },
            // ── Etc ──
            {
                category: "Etc",
                title: "글로벌 AI 군비 경쟁 심화 — 미·중·러, AI 무기 개발 가속",
                desc: "- NYT 심층 보도. 미국·중국·러시아가 AI 기반 무기·군사 시스템 개발을 전면적으로 가속화.<br>- 자율 드론, AI 지휘통제 시스템, 사이버전 AI 등이 핵심 경쟁 영역. 윤리적·법적 프레임워크 마련은 후행.<br>- 이란전쟁에서 AI 자율 무기의 실전 사용이 확인되며 향후 분쟁에서 AI의 결정적 역할 전망 확산.",
                color: "gray",
                link: "https://www.nytimes.com/2026/04/12/technology/china-russia-us-ai-weapons.html"
            },
            {
                category: "Etc",
                title: "SpaceX, 2026년 1,000번째 Starlink 위성 발사 달성",
                desc: "- SpaceX가 4월 14일 Falcon 9 로켓으로 2026년 기준 1,000번째 Starlink 위성 발사. 4개월도 안 되어 달성.<br>- 같은 주에 Falcon 9 누적 600번째 착륙 성공 기록도 수립 → 재사용 로켓의 신뢰성 입증.<br>- Blue Origin New Glenn 로켓도 4월 19일 발사 (상업 우주 시장 경쟁 본격화).",
                color: "gray",
                link: "https://spaceflightnow.com/2026/04/14/live-coverage-spacex-to-launch-1000th-starlink-satellite-of-2026-on-falcon-9-rocket-from-cape-canaveral/"
            },
            // ── M&A ──
            {
                category: "M&A",
                title: "IBM, Confluent $11B 인수 완료 — 실시간 데이터를 AI 에이전트 엔진으로",
                desc: "- IBM이 데이터 스트리밍 플랫폼 Confluent 인수 3월 17일 완료 (주당 $31, 기업가치 $11B).<br>- 실시간 데이터 처리를 AI 에이전트 핵심 인프라로 통합 → \"에이전틱 AI 시대의 데이터 엔진\" 구축.<br>- 2026년 대형 테크 M&A 키워드가 '에이전틱 AI 인프라'로 수렴하는 추세.",
                color: "indigo",
                link: "https://www.wsj.com/cio-journal/ibm-closes-11-billion-deal-for-confluent-13fcbea0"
            },
            // ── Politics ──
            {
                category: "Politics",
                title: "트럼프 $1.5조 국방예산 — AI·자율무기 중심 군사 패러다임 전환",
                desc: "- 역대 최대 $1.5조 국방예산 요구안에 '대통령 우선순위 기금' 신설. 미사일·드론·AI에 집중 배분.<br>- Guardian: \"AI 기반 전쟁으로의 피봇\". 전통 군사 하드웨어에서 AI 자율 시스템으로 구조적 전환.<br>- 공화당 상하원 장악으로 통과 가능성 높으나, 재정적자 우려로 일부 의원 반발 가능성.",
                color: "blue",
                link: "https://www.theguardian.com/us-news/2026/apr/22/pentagon-asks-for-54bn-in-pivot-towards-ai-powered-war"
            },
            {
                category: "Politics",
                title: "미·중 무역전쟁, 5월 정상회담이 분수령",
                desc: "- Reuters: \"관세가 교착된 채 트럼프의 대중 정책이 표류 중\". 중국은 합의 위반 주장, 미국은 핵심 광물 수출 제한 문제 제기.<br>- 5월 미·중 정상회담이 무역 갈등의 돌파구가 될지 주목. 양측 입장 차이 여전.<br>- 관세 불확실성이 미국 제조업체의 투자 결정을 지연시키는 핵심 요인.",
                color: "blue",
                link: "https://www.reuters.com/world/china/trumps-trade-war-with-china-focus-ahead-may-summit-2026-04-06/"
            },
            {
                category: "Politics",
                title: "기업 해고 러시, AI 투자 전환이 원인 — 정치적 파장 확대",
                desc: "- Reuters 종합 보도. Snap·Disney·Meta 등 대기업이 연쇄적으로 AI 효율화를 이유로 대규모 감원.<br>- 민주당은 \"AI 시대 노동자 보호법\" 입법을 추진, 공화당은 \"기업 자율에 맡겨야\"로 맞서며 정치적 쟁점화.<br>- AI로 인한 고용 변화가 2026 중간선거의 핵심 유권자 이슈로 부상.",
                color: "blue",
                link: "https://www.reuters.com/business/world-at-work/companies-cutting-jobs-investments-shift-toward-ai-2026-04-15/"
            },
            // ── Robotics ──
            {
                category: "Robotics",
                title: "Tesla, Optimus 3 로봇 2026년 여름 양산 시작 선언",
                desc: "- 머스크가 Abundance Summit에서 Optimus 3(Gen 3) 양산을 2026년 여름(7~8월)에 시작한다고 공식 발표.<br>- 초기 소량 생산 후 S-커브 램프업 → 2027년 여름 대량 생산 돌입 목표 (연간 100만 대 생산 능력 확보 계획).<br>- 새 다리 구조로 시속 8마일 보행 달성. 완전 자율 작업 수행에는 아직 한계가 있다는 분석도 존재.",
                color: "red",
                link: "https://www.greendrive-accessories.com/blog/language/en/tesla-optimus-3-robot-humanoide-2026-2/"
            },
            {
                category: "Robotics",
                title: "중국, 2026년 휴머노이드 로봇 2만 대 출하 목표",
                desc: "- 중국이 2026년 약 20,000대 휴머노이드 로봇 출하를 목표 (Unitree·Agibot 등이 저가 양산 전략으로 시장 공략).<br>- 미국(Tesla, BD, Figure AI)과 기술격차는 있으나 가격 경쟁력에서 우위.<br>- 글로벌 제조 현장 투입을 위한 안전·품질 인증 표준화 논의도 시작.",
                color: "red",
                link: "https://unteachablecourses.com/humanoid-robots-2026/"
            },
            {
                category: "Robotics",
                title: "Amazon 창고 로봇 100만 대 돌파 — AI 실시간 경로 최적화",
                desc: "- Amazon 창고 로봇 100만 대 돌파. AI 모델이 실시간으로 로봇 경로를 학습·최적화해 이동 시간 10% 단축.<br>- Covariant 인수 후 비정형 물체 인식·처리 능력 크게 향상 → 2033년까지 창고 업무 75% 자동화 목표.<br>- 차세대 루이지애나 풀필먼트 센터는 기존 대비 로봇 밀도 10배 (물류 자동화의 벤치마크).",
                color: "red",
                link: "https://www.forbes.com/sites/ronschmelzer/2025/07/07/amazons-millionth-warehouse-robot-is-here-and-its-getting-smarter/"
            },
            // ── Tech ──
            {
                category: "Tech",
                title: "Google, AI 에이전트 신규 출시 — OpenAI·Anthropic에 정면 도전",
                desc: "- Google이 기업용 AI 에이전트 제품군을 대거 출시 (코딩 없이 에이전트를 구축할 수 있는 Workspace Studio 등 제공).<br>- Project Mariner 등을 통해 에이전트 빌딩 도구+배포 인프라를 한꺼번에 제공하는 '원스톱 솔루션' 전략.<br>- 클라우드 인프라+칩+모델 통합이 Google의 차별화 포인트.",
                color: "green",
                link: "https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/next-2026/"
            },
            {
                category: "Tech",
                title: "Anthropic, Series G $30B 펀딩 — 밸류에이션 $380B 돌파",
                desc: "- Claude 개발사 Anthropic이 GIC·Coatue 공동 주도의 Series G에서 $30B 조달 (기업가치 $380B 포스트 머니).<br>- 이전 Series F($13B, $183B 밸류에이션)에서 수개월 만에 두 배 이상 밸류 상승.<br>- Broadcom과 기가와트급 AI 컴퓨팅 계약 체결. 거대 자본이 AI 인프라에 집중 투입되는 추세 반영.",
                color: "green",
                link: "https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation"
            },
            // ── Texas ──
            {
                category: "Texas",
                title: "텍사스 경제 $2.9조 사상 최대 — 세계 8위 규모",
                desc: "- 2025년 텍사스 GDP가 사상 최초 $2.9조 달성 (미국 전체 및 세계 주요국 대비 높은 성장률).<br>- 독립 국가 기준 세계 8위 경제 규모 (에너지·테크·방산·제조업이 복합적으로 성장 견인).<br>- AI 데이터센터·반도체 투자가 새로운 성장축으로 부상.",
                color: "orange",
                link: "https://gov.texas.gov/news/post/texas-economy-hits-record-2.9-trillion"
            },
            {
                category: "Texas",
                title: "Samsung, 텍사스 테일러 공장에서 Tesla AI칩 양산 확정",
                desc: "- Samsung이 텍사스 테일러 공장에서 Tesla AI6 칩을 2nm 공정으로 2027년 하반기부터 양산 확정.<br>- Tesla는 AI6 칩 주문을 기존 대비 2배 이상 확대 계획.<br>- 텍사스가 AI 반도체의 핵심 생산 허브로 부상.",
                color: "orange",
                link: "https://www.cxodigitalpulse.com/samsung-nears-launch-of-texas-chip-plant-to-produce-teslas-next-gen-ai-processors/"
            }
        ]
    },
    {
        week: "2026년 4월 2주차",
        date: "April 10, 2026",
        items: [
            // ── Case Study ──
            {
                category: "Case Study",
                title: "Caterpillar: '철강 제조'를 넘어 AI·데이터 서비스 기업으로의 진화",
                desc: `
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p class="font-bold text-blue-800 mb-1">■ 자율 주행 광산 트럭 및 Helios 플랫폼</p>
                            전 세계 광산 현장에서 690대의 자율 주행 트럭을 운영하며 건설·광산 산업의 패러다임 전환 주도.<br>
                            NVIDIA와의 파트너십을 통해 구축된 16 PB 규모의 데이터 플랫폼 'Helios'로 장비의 물리적 상태 실시간 관리.<br>
                            자율화를 통해 운영 효율 극대화 및 예측 정비(Predictive Maintenance)를 실현하여 가동 중지 시간 최소화.
                        </div>
                        <div>
                            <p class="font-bold text-blue-800 mb-1">■ 디지털 트윈 및 비즈니스 모델 전환 시사점</p>
                            디지털 트윈과 물리적 AI를 결합, 가상 환경에서의 시뮬레이션을 통해 건설 현장의 완전 자율화 비전 구체화.<br>
                            단순한 중장비 판매 중심에서 데이터 기반 구독 및 운영 서비스로의 비즈니스 모델 수직 계열화 달성.<br>
                            '장비 하드웨어 → 데이터 플랫폼 → AI 최적화 서비스'로 이어지는 제조 기업의 성공적인 디지털 트랜스포메이션 경로 제시.
                        </div>
                    </div>
                `,
                color: "purple",
                link: "https://www.constellationr.com/insights/news/caterpillars-ai-vision-takes-shape-data-cloud-focus-was-precursor"
            },
            // ── Politics ──
            {
                category: "Politics",
                title: "미-이란 2주 휴전 합의 — 양측 '승리' 주장, 이스라엘 행동으로 즉시 위태",
                desc: "- 트럼프 '결정적 승리' vs 이란 '자국 승리' — 양측 모두 승리를 주장하는 이례적 구도.<br>- 이스라엘의 레바논 공격(250명+ 사망)으로 휴전 지속 불투명, 이란의 10개항 제안 공개.<br>- 호르무즈 해협 통제 문제가 핵심 쟁점으로 에너지 시장 안정화에 직결.",
                color: "blue",
                link: "https://www.aljazeera.com/news/2026/4/8/iranians-breathe-a-ceasefire-sigh-of-relief-as-all-sides-claim-victory"
            },
            {
                category: "Politics",
                title: "트럼프, NATO 비협조에 분노 — 탈퇴 위협까지 등장",
                desc: "- 트럼프가 NATO 동맹국들의 이란 전쟁 불참을 '매우 어리석은 실수'라고 비난, NATO 탈퇴 검토 언급.<br>- Rutte 사무총장이 긴급 방미하여 '트럼프 설득자' 역할 시도.<br>- 미-NATO 간 이란 대응 갈등이 표면화되며 대서양 동맹 균열 심화.",
                color: "blue",
                link: "https://www.reuters.com/business/aerospace-defense/trumps-anger-over-iran-thrusts-nato-into-fresh-crisis-2026-04-03/"
            },
            // ── Economy ──
            {
                category: "Economy",
                title: "연준, 금리 3.50~3.75% 동결 — 이란전쟁·유가 급등에 연내 인상 확률까지 거론",
                desc: "- 3월 FOMC에서 금리 동결 결정, 이란 전쟁으로 에너지 비용 상승 → 인플레이션 재점화 우려.<br>- 시장에서는 연내 금리 인상 확률이 52%까지 치솟는 순간도 발생, Fed 내 비둘기파까지 신중론으로 전환.<br>- 유가 상승이 소비자물가에 전이되는 경로가 확인되며 금리 인하 전망 급격히 후퇴.",
                color: "gray",
                link: "https://www.wsj.com/economy/central-banking/fed-holds-steady-and-maintains-rate-cut-projection-2c378384"
            },
            {
                category: "Economy",
                title: "미국 3월 고용 178,000명 증가 — 15개월 만에 최대 반등, 예상치의 3배",
                desc: "- 의료 파업 종료와 겨울 한파 해소로 2월(-133K)에서 대반전, 예상치 60K를 크게 상회.<br>- 실업률 4.3%로 소폭 개선, 의료·교육·건설 분야가 고용 증가 주도.<br>- 다만 전체적으로는 '저고용·저해고(low-hire, low-fire)' 패턴이 지속되는 구조적 변화 진행 중.",
                color: "gray",
                link: "https://www.reuters.com/world/us/us-employment-growth-rebounded-march-unemployment-rate-falls-43-2026-04-03/"
            },
            // ── Tech ──
            {
                category: "Tech",
                title: "Siemens, CES 2026에서 Digital Twin Composer 공개 — 제조업 AI 가속",
                desc: "- Siemens CEO Roland Busch가 CES 키노트에서 실시간 디지털 트윈 + AI 결합 솔루션 발표.<br>- NVIDIA와 협력해 산업용 메타버스 환경을 대규모로 구축, 공장을 가상에서 먼저 설계·시뮬레이션·최적화.<br>- 2026년 중 Siemens Xcelerator 마켓플레이스에서 출시 예정.",
                color: "green",
                link: "https://www.reuters.com/video/watch/idRW470906012026RP1/"
            },
            {
                category: "Tech",
                title: "Google, 오프라인 AI 딕테이션 앱 출시 — 온디바이스 AI 시대 가속",
                desc: "- Google의 경량 AI 모델 Gemma를 활용해 오프라인에서 작동하는 고품질 음성인식 앱 'AI Edge Eloquent' 출시.<br>- 클라우드 의존 없는 온디바이스 AI의 실용적 구현 사례로 개인정보 보호 측면에서도 주목.<br>- 인터넷 없이 음성→텍스트 변환이 가능한 완전 로컬 처리 구조.",
                color: "green",
                link: "https://techcrunch.com/2026/04/06/google-quietly-releases-an-offline-first-ai-dictation-app-on-ios/"
            },
            // ── Energy ──
            {
                category: "Energy",
                title: "미국 전력 수요, 2026~2027년 사상 최고치 경신 전망 — AI 데이터센터가 핵심",
                desc: "- EIA 전망: 미국 전력 사용량 2026년 4,260B kWh → 2027년 4,388B kWh로 사상 최고치 연속 경신.<br>- AI 데이터센터 확산으로 전력 수요 전년 대비 1.9% 증가 전망.<br>- 데이터센터 전력 소비가 화석연료 발전 확대를 촉발할 수 있다는 분석도 제기.",
                color: "orange",
                link: "https://www.reuters.com/business/energy/us-power-use-beat-record-highs-2026-2027-ai-use-surges-eia-says-2026-03-10/"
            },
            {
                category: "Energy",
                title: "미-이란 2주 휴전 합의 후 유가 급락 — 그러나 호르무즈 해협 불안 지속",
                desc: "- 미-이란 휴전 합의 직후 원유·가스 가격 급락, 시장에 일시적 안도감 확산.<br>- 그러나 이란이 호르무즈 해협 통제력을 유지하고 있어 에너지 시장 안정화에는 시간 필요.<br>- 이스라엘의 레바논 공격으로 휴전 자체도 위태, 에너지 공급 리스크 상존.",
                color: "orange",
                link: "https://www.aljazeera.com/news/2026/3/8/iran-war-threatens-prolonged-impact-on-energy-markets-as-oil-prices-rise"
            },
            // ── Robotics ──
            {
                category: "Robotics",
                title: "Unitree Robotics, 상하이 $610M IPO 신청 — 최초의 대형 휴머노이드 상장",
                desc: "- 2025년 세계 최다 휴머노이드 판매 기업, 로봇 가격을 $85K→$25K로 3분의 1 수준으로 인하하면서도 매출 335% 성장·순이익 8배 증가.<br>- 글로벌 휴머노이드 시장이 고급/중급/보급형 3단계로 분화되는 신호.<br>- 중국 최대 테크 IPO 중 하나로 로봇 산업의 자본시장 진출 본격화.",
                color: "red",
                link: "https://www.reuters.com/world/asia-pacific/unitree-plans-shanghai-ipo-testing-interest-humanoid-robots-2026-03-20/"
            },
            {
                category: "Robotics",
                title: "Boston Dynamics, 양산형 Atlas 공개 — 연 30,000대 생산 체제 구축",
                desc: "- CES 2026에서 발표된 양산형 Atlas가 제조 현장에서 자동차 부품 정렬 등 실제 업무 수행 확인.<br>- 모회사 Hyundai가 조지아 공장에 '수만 대' 배치 계획 언급, Google DeepMind에도 2026년 배치 확정.<br>- 전용 생산시설에서 연 30,000대 양산 가능 체제 구축.",
                color: "red",
                link: "https://bostondynamics.com/blog/boston-dynamics-unveils-new-atlas-robot-to-revolutionize-industry/"
            },
            {
                category: "Robotics",
                title: "MIT, 창고 로봇 군집 이동 최적화 AI 시스템 개발",
                desc: "- MIT + Symbotic 공동 연구 — 기존 정적 알고리즘은 로봇 밀도가 높아지면 복잡도가 기하급수적으로 증가.<br>- MIT의 새 AI 시스템은 동적 환경에서 실시간 적응하며 물류 창고의 로봇 군집 운영 효율을 획기적으로 개선.<br>- 로봇 교통 체증 해결로 대규모 자동화 창고의 핵심 병목 해소.",
                color: "red",
                link: "https://news.mit.edu/2026/ai-system-keeps-warehouse-robot-traffic-running-smoothly-0326"
            },
            {
                category: "Robotics",
                title: "휴머노이드 로봇, 제조·물류·소매 현장 시범 도입 본격화",
                desc: "- 2026년이 '휴머노이드 상용화 원년' — Boston Dynamics(Hyundai), Figure AI(BMW·물류), Unitree(범용) 등이 각각 제조·물류·가정용 시장에서 시범 운영 중.<br>- 시범 수준을 넘어 상업적 배치가 시작되는 전환점으로 평가.<br>- 공장·창고·매장에서 실제 업무를 수행하는 단계에 진입.",
                color: "red",
                link: "https://toborlife.ai/latest-news/humanoid-robots-in-manufacturing-why-are-factories-starting-to-adopt-them-in-2026/"
            },
            // ── Texas ──
            {
                category: "Texas",
                title: "텍사스, 미국 최대 데이터센터 허브로 부상 — 전력망 한계가 관건",
                desc: "- Google 등 빅테크의 10곳+ 하이퍼스케일 캠퍼스 투자가 텍사스에 집중, 태양광·배터리 저장소도 동반 투자.<br>- 다만 전력망(ERCOT) 용량이 최대 병목으로 지적.<br>- 2~3년 내 미국 최대 데이터센터 주 등극 전망.",
                color: "orange",
                link: "https://www.realclearenergy.org/articles/2026/02/04/data_centers_are_powering_texas_next_era_of_growth_1162697.html"
            },
            {
                category: "Texas",
                title: "텍사스 반도체 리더십 강화 — CHIPS Act 17개 프로젝트, $6B 투자",
                desc: "- CHIPS Act 보조금을 통해 17개 반도체 프로젝트 확정, 700개 이상 일자리 창출.<br>- GlobalWafers의 $7.5B 실리콘 웨이퍼 공장 6단계 확장 포함.<br>- 텍사스가 미국 반도체 생태계의 중심축으로 자리매김.",
                color: "orange",
                link: "https://www.txbiz.org/2026/01/22/texas-continues-to-lead-in-fortifying-americas-semiconductor-supply-chain/"
            },
            {
                category: "Texas",
                title: "Abbott, 중국 테크 금지 리스트 확대 — 알리바바·Shein 등 26개 기업 추가",
                desc: "- 기존 TikTok, WeChat 등에 이어 알리바바, Shein 등 26개 기업을 금지 리스트에 추가.<br>- 텍사스 사이버 사령부와 협의, 데이터 보안 우려로 주 기관의 중국 기술 사용 금지 범위 대폭 확대.<br>- 주 차원의 대중국 기술 디커플링 가속.",
                color: "orange",
                link: "https://gov.texas.gov/news/post/governor-abbott-updates-texas-prohibited-technologies-list"
            },
            {
                category: "Texas",
                title: "텍사스, 소형모듈원자로(SMR) 테스트 선도 주로 부상",
                desc: "- 텍사스가 미국 내 SMR 상용화의 핵심 시험장으로 부상, 2030년대 초 가동 목표.<br>- 산업용 전력 공급을 위한 소형 원자로가 데이터센터·제조시설의 전력 대안으로 주목.<br>- EU도 2030년대 초 SMR 온라인화 전략 발표하며 글로벌 트렌드 형성.",
                color: "orange",
                link: "https://www.texastribune.org/2026/02/17/texas-small-modular-nuclear-reactors-grid-energy/"
            },
            // ── California ──
            {
                category: "California",
                title: "뉴섬 주지사, AI 기업 대상 행정명령 발동 — 주 계약 시 안전·투명성 의무화",
                desc: "- CA 주정부와 계약하는 AI 기업에 안전 장치, AI 생성 콘텐츠 워터마크, 개인정보 보호 등을 의무화하는 행정명령 발동(3/30).<br>- 트럼프 행정부의 AI 규제 완화 기조와 정반대 방향으로 전국 최초 시행.<br>- 20개 이상의 CA 주 AI 법률도 2026년부터 발효되어 기업 컴플라이언스 부담 급증.",
                color: "blue",
                link: "https://www.reuters.com/sustainability/society-equity/california-ai-order-requires-firms-seeking-state-contracts-have-safeguards-2026-03-31/"
            },
            // ── M&A ──
            {
                category: "M&A",
                title: "OpenAI, $852B 밸류에이션으로 $122B 메가 라운드 완료",
                desc: "- SoftBank, Microsoft, Thrive Capital 등 참여, 당초 $110B에서 $122B으로 확대된 역대 최대 단일 펀딩 라운드.<br>- 기업가치 기준 글로벌 Top 10 진입, 2026년 하반기 IPO 추진 중.<br>- AI 기업의 자본 조달 규모가 국가 GDP급에 근접하는 새로운 시대 도래.",
                color: "indigo",
                link: "https://www.bloomberg.com/news/articles/2026-03-31/openai-valued-at-852-billion-after-completing-122-billion-round"
            },
            // ── Etc ──
            {
                category: "Etc",
                title: "Anthropic, 매출 런레이트 $300억 돌파 — 1년 만에 3배 이상 성장",
                desc: "- 2025년 말 $90억이던 매출 런레이트가 $300억 돌파, Google TPU 기반 기가와트급 컴퓨팅 용량 확보 계약 체결.<br>- Google·Broadcom과 기가와트급 AI 컴퓨팅 파트너십 체결.<br>- OpenAI에 이어 AI 기업 중 두 번째로 큰 매출 규모 달성.",
                color: "gray",
                link: "https://www.bloomberg.com/news/articles/2026-04-06/broadcom-confirms-deal-to-ship-google-tpu-chips-to-anthropic"
            },
            {
                category: "Etc",
                title: "트럼프 관세 1년 — Tax Foundation 종합 분석: 가구당 $700~$1,300 부담 증가",
                desc: "- $3.2조 규모의 사실상 세금 인상 효과, 실업률 0.3%p 상승 및 장기 GDP 축소 전망.<br>- 무역적자 개선은 미미한 반면 소비자·기업 부담만 가중되는 구조.<br>- 대법원의 IEEPA 위헌 판결로 향후 관세 구조에 근본적 변화 예상.",
                color: "gray",
                link: "https://taxfoundation.org/research/all/federal/trump-tariffs-trade-war/"
            }
        ]
    },
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
                desc: "- 전쟁 4주차 여론조사에서 미국인 과반이 군사 행동이 '지나쳤다'고 응답.<br>- 가스비 부담 '매우 우려' 응답 45%(2월 30% 대비 급등).<br>- 트럼프 전반 지지율은 유지되나, 전쟁 장기화와 유가 상승이 공화당 지지층 이탈의 잠재적 변수로 부상.",
                color: "blue",
                link: "https://apnews.com/article/poll-iran-trump-war-oil-gas-prices-2abd1ea4a81f3339cebadd5480fb863b"
            },
            {
                category: "Politics",
                title: "WTO 사무총장, '지난 80년간 최악의 무역 교란' 경고",
                desc: "- WTO 사무총장 Ngozi Okonjo-Iweala가 3/26 각료회의 개회사에서 미국 관세 확대와 중동 전쟁의 이중 충격으로 세계 무역 체계가 80년 만에 최악의 교란을 겪고 있다고 경고.<br>- 2026년 상품·서비스 무역 성장률 2.7%, GDP 성장률 2.8%로 하향 전망 제시.",
                color: "blue",
                link: "https://www.aljazeera.com/news/2026/3/26/wto-holds-crunch-meeting-amid-collapsing-multilateral-system"
            },
            // ── Economy ──
            {
                category: "Economy",
                title: "연준, 금리 3.5–3.75% 동결 — Powell 퇴임 전 마지막 결정에서 '호키시 홀드'",
                desc: "- 3/18 FOMC 11:1로 금리 동결 결정.<br>- 2026년 GDP 전망 2.4%로 상향, PCE 물가 전망 2.7%로 상향.<br>- 올해 1회 인하 시그널 유지하나, 유가 급등·물가 상방 압력으로 시장은 인하 기대 후퇴. Powell 의장 5월 퇴임 예정이나 Kevin Warsh 인준 전까지 잔류 선언.",
                color: "gray",
                link: "https://www.cnbc.com/2026/03/18/fed-interest-rate-decision-march-2026.html"
            },
            {
                category: "Economy",
                title: "WTO, 중동 분쟁 장기화 시 세계 무역·성장 둔화 전망 보고서 발표",
                desc: "- 3/19 WTO 보고서에서 호르무즈 해협 봉쇄 장기화 시 2026년 세계 상품 무역 성장률이 기존 2.7%에서 추가 하락 가능성 경고.<br>- 미국 관세 정책(Section 122)과 중동 전쟁이 '이중 충격'으로 작용하며, 1940년대 이후 최악의 무역 체계 교란 진행 중.",
                color: "gray",
                link: "https://www.nytimes.com/2026/03/19/business/economy/mideast-conflict-trade-wto.html"
            },
            // ── Tech ──
            {
                category: "Tech",
                title: "Meta·Google, 아동 소셜미디어 중독 소송에서 패소 — $600만 배심 평결",
                desc: "- LA 배심원단이 인스타그램의 '무한 스크롤' 등 설계 결함을 과실로 인정.<br>- Meta CEO 저커버그가 직접 증인석에 출석해 뷰티 필터 재허용 결정을 변호. Snap·TikTok은 재판 전 합의.<br>- 연방법(Section 230) 우회 판례로서 수천 건 후속 소송에 영향 전망.",
                color: "green",
                link: "https://www.reuters.com/legal/litigation/jury-reaches-verdict-meta-google-trial-social-media-addiction-2026-03-25/"
            },
            {
                category: "Tech",
                title: "Anthropic, '공급망 리스크' 지정 차단 승소 — 연방 판사 \"수정헌법 제1조 보복\"",
                desc: "- 3/26 캘리포니아 연방지법이 국방부의 Anthropic '공급망 리스크' 지정을 무기한 차단, \"정부 이견을 이유로 적국 협력자로 낙인찍는 것은 오웰적 발상\"이라고 판시.<br>- Claude AI의 자율무기·시민감시 사용 거부에 대한 보복성 지정으로 판단, 수정헌법 제1조 위반 인정.<br>- 정부에 1주 항소 유예 부여, DC 별도 소송은 계속 진행 중.",
                color: "green",
                link: "https://www.cnn.com/2026/03/26/business/anthropic-pentagon-injunction-supply-chain-risk"
            },
            // ── Energy ──
            {
                category: "Energy",
                title: "IEA, 사상 최대 4억 배럴 전략비축유 방출 — 호르무즈 해협 봉쇄로 일 800만 배럴 공급 차질",
                desc: "- 2/28 미국·이스라엘의 이란 공습 이후 호르무즈 해협 봉쇄로 중동 걸프국 원유 생산 일 1,000만 배럴 감소.<br>- IEA 회원국이 3/11 4억 배럴 비축유 방출 합의(2022년 러시아 침공 시 1.82억 배럴의 2배 이상).<br>- 공급 정상화에 수주~수개월 소요 전망.",
                color: "orange",
                link: "https://www.reuters.com/business/energy/iea-proposes-largest-ever-oil-release-strategic-reserves-wsj-reports-2026-03-11/"
            },
            {
                category: "Energy",
                title: "미 EIA, AI 수요 급증으로 2026-27년 미국 전력 사용량 사상 최고치 전망",
                desc: "- EIA 보고서에서 2025년 4,195TWh → 2026년 4,260TWh → 2027년 4,388TWh로 전력 수요 연속 최고치 경신 전망.<br>- AI 데이터센터가 주요 수요 동력으로, 총 데이터센터 지출 $6,500억 이상(전년 대비 31.7% 증가) 예상.",
                color: "orange",
                link: "https://www.reuters.com/business/energy/us-power-use-beat-record-highs-2026-2027-ai-use-surges-eia-says-2026-03-10/"
            },
            // ── Robotics ──
            {
                category: "Robotics",
                title: "Figure 03 휴머노이드, 백악관 글로벌 교육 서밋에 등장",
                desc: "- $20,000 가정용 로봇 Figure 03가 멜라니아 트럼프와 함께 40개국 대표 앞에서 시연.<br>- 2026년 하반기 소비자 출시 예정, 가사·교육 보조 기능 탑재.",
                color: "red",
                link: "https://www.theguardian.com/technology/video/2026/mar/26/melania-trump-and-ai-powered-robot-named-figure-3-open-white-house-summit-video"
            },
            {
                category: "Robotics",
                title: "Boston Dynamics Atlas, 2026년 3월 정식 생산 돌입 — 현대·Google DeepMind 배치 예정",
                desc: "- CES 2026에서 공개된 기업용 Atlas 휴머노이드가 조지아 공장에서 정식 양산 개시.<br>- 현대자동차 공장 및 Google DeepMind 연구소에 2026년 내 배치 예정.<br>- 무거운 반복 작업(중량물 운반·조립)에 특화된 산업용 설계.",
                color: "red",
                link: "https://apnews.com/article/ces-humanoid-robots-atlas-hyundai-boston-dynamics-8de7b2470c23f5f22441ad1ad7555136"
            },
            {
                category: "Robotics",
                title: "IFR, 2026년 글로벌 로보틱스 5대 트렌드 발표 — 산업용 로봇 설치 $167억 사상 최대",
                desc: "- 국제로봇연맹(IFR)이 AI 기반 적응형 모션·음성 제어·협동로봇 등 5대 트렌드 발표.<br>- 산업용 로봇 글로벌 설치 금액 $167억으로 역대 최고치 경신.",
                color: "red",
                link: "https://ifr.org/ifr-press-releases/news/top-5-global-robotics-trends-2026"
            },
            // ── Texas ──
            {
                category: "Texas",
                title: "Valero Port Arthur 정유소 폭발 — 미국 10대 정유소 가동 중단",
                desc: "- 3/23 폭발로 디젤 생산 라인 장기 중단 전망, 도매 가솔린·디젤 즉시 급등.<br>- 일 43.5만 배럴 처리 시설로 770명 근무, 인명 피해는 보고되지 않음.<br>- 주변 지역 대피 후 해제.",
                color: "orange",
                link: "https://www.cnn.com/2026/03/24/business/oil-prices-rise-trump-iran-intl"
            },
            {
                category: "Texas",
                title: "텍사스, 2025년 태양광 발전량 미국 1위 — 58,634 GWh 시장 규모 $5,000억",
                desc: "- 유틸리티 규모 태양광에서 텍사스가 캘리포니아를 추월하여 미국 1위 달성.<br>- 풍력 발전도 포함 시 재생에너지 비중 지속 확대.<br>- 데이터센터 전력 수요와 맞물려 텍사스 에너지 시장 변동성 증가.",
                color: "orange",
                link: "https://insideclimatenews.org/news/05032026/inside-clean-energy-texas-utility-scale-solar/"
            },
            // ── California ──
            {
                category: "California",
                title: "LA 카운티, Paramount-WBD 합병의 지역 경제 영향 분석 착수",
                desc: "- 3/25 LA County 감독위원회가 Paramount Skydance와 Warner Bros Discovery 합병이 할리우드 고용·지역 경제에 미칠 영향을 분석하도록 명령.<br>- 합병 시 대규모 인력 구조조정·스튜디오 통합 우려.",
                color: "blue",
                link: "https://deadline.com/story-arc/paramount-wb/"
            },
            // ── M&A ──
            {
                category: "M&A",
                title: "Paramount Skydance-WBD 합병전 격화 — WBD 주주총회 3/20 예정, Netflix 합병안 추천",
                desc: "- WBD 이사회가 3/20 주주총회에서 Netflix 합병안 찬성 투표를 만장일치 권고, 동시에 Paramount Skydance에 '최종 제안' 협상 개시 요청.<br>- Paramount의 $30/주 전액현금 제안 vs Netflix의 기존 합의 사이에서 주주 선택 구도.",
                color: "indigo",
                link: "https://www.prnewswire.com/news-releases/warner-bros-discovery-sets-special-meeting-date-of-march-20-2026-and-unanimously-recommends-shareholders-vote-for-netflix-merger-warner-bros-discovery-to-initiate-discussions-with-paramount-skydance-for-their-best-and-final-o-302689237.html"
            },
            {
                category: "M&A",
                title: "Paul Weiss: 2월 글로벌 M&A 메가딜 급증, 딜 금액 대폭 상승 vs 건수 감소",
                desc: "- 전략적·스폰서 딜 모두 1월 대비 금액 큰 폭 증가.<br>- 미국 및 글로벌 모두 대형 거래가 시장 주도.<br>- 미국 내 스폰서(PE) 딜 금액은 감소세로, 양극화 구조 심화.",
                color: "indigo",
                link: "https://www.paulweiss.com/insights/client-memos/ma-at-a-glance-march-2026"
            },
            {
                category: "M&A",
                title: "Eli Lilly, Ventyx Biosciences $12억 인수 — 면역학 파이프라인 강화",
                desc: "- 1월 발표된 $12억 전액현금 인수(주당 $14)가 2026년 상반기 완료 예정.<br>- Ventyx의 경구용 면역 치료제 파이프라인을 통한 자가면역 질환 포트폴리오 확대 목적.",
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
                desc: "- 이스라엘군이 테헤란에 대한 '광범위한 새로운 공습' 개시를 공식 발표하며 강제 대피 명령 발동.<br>- 레바논 수도 베이루트에도 동시 공격을 감행, 중동 전역으로 확전 양상 본격화.<br>- 트럼프 대통령은 '전쟁이 잘 진행되고 있다'고 발언하며 미국의 이스라엘 지원 기조 재확인.",
                color: "blue",
                link: "https://www.aljazeera.com/news/liveblog/2026/3/13/iran-war-live-trump-says-war-going-well-as-gulf-under-wave-of-attacks"
            },
            {
                category: "Politics",
                title: "동남아 국가들, 중동 석유 충격 대비 긴급 에너지 절약 조치 시행",
                desc: "- 중동 전쟁 확전에 따른 유가 급등 우려로 동남아 각국이 재택근무 권고·주 4일제 도입 등 긴급 대응책 시행.<br>- 7억 명 이상 인구의 동남아 지역이 중동 석유·가스에 대한 높은 의존도로 경제성장·재정 건전성에 직접 타격 우려.<br>- 에너지 보조금 확대 약속과 카풀 장려 등 단기 충격 완화 조치와 장기 에너지 자립 전략의 병행 필요성 부각.",
                color: "blue",
                link: "https://www.ft.com/content/a46b54e4-7d52-4aa6-b5c3-8217d3ee536d"
            },
            {
                category: "Economy",
                title: "중국, 2026년 성장률 목표 하향 — 양적 팽창 대신 기술 자립 중심 체질 개선 선언",
                desc: "- 중국 전인대(NPC)에서 이전보다 낮은 성장률 목표를 설정하며 신질생산력(新質生産力) 기반 경제 체질 개선에 우선순위 부여.<br>- AI·양자 컴퓨팅·반도체 등 전략적 신산업에 국가 자원을 집중 투입하여 서구 기술 제재 정면 돌파 및 공급망 주도권 확보 추진.<br>- 5개년 계획의 핵심 기조가 GDP 수치 확대에서 핵심 기술 내재화와 산업 고도화로 명확히 전환.",
                color: "gray",
                link: "https://www.aljazeera.com/news/2026/3/12/chinas-key-npc-meeting-comes-to-a-close-as-lower-growth-target-set"
            },
            {
                category: "Economy",
                title: "미 연준 금리 인하 기대 후퇴 — 유가 급등·고용 둔화 복합 악재",
                desc: "- 중동 전쟁에 따른 유가 급등과 고용시장 둔화가 동시에 발생하며 연준의 정책 결정 난이도 상승.<br>- 인플레이션 억제와 경기 부양이라는 상충 목표 사이에서 올해 금리 인하 횟수에 대한 시장 기대치 하락.<br>- 투자자들이 금리 인하 베팅을 축소하며 채권·주식 시장 전반에 걸친 변동성 확대.",
                color: "gray",
                link: "https://www.ft.com/content/176a8568-5982-459a-a36a-d2cbf577568a"
            },
            {
                category: "Tech",
                title: "Anthropic, 미 정부를 상대로 '공급망 리스크' 지정에 대한 사상 초유의 소송 제기",
                desc: "- Anthropic이 미 국방부의 '공급망 리스크' 업체 지정에 맞서 연방정부를 상대로 업계 최초의 소송 제기.<br>- Google·Amazon·Apple·Microsoft 등 빅테크 4사가 Anthropic을 공개 지지하며 AI 기업의 자율성 수호에 연대.<br>- AI 모델의 군사적 활용 범위와 기업의 윤리적 거부권에 대한 법적 선례를 결정지을 핵심 소송으로 주목.",
                color: "green",
                link: "https://www.bbc.com/news/articles/c4g7k7zdd0zo"
            },
            {
                category: "Tech",
                title: "Nvidia, 중국향 칩(H200) 생산 전면 중단 — 규제 장벽 장기화 판단",
                desc: "- Nvidia가 중국 시장용으로 설계된 H200 칩의 생산을 전면 중단, 미·중 간 규제 장벽의 장기화를 기정사실화.<br>- 워싱턴과 베이징 양측의 규제가 중국향 판매를 지속적으로 제한할 것이라는 전략적 판단에 따른 선제적 결정.<br>- Q1 FY2027 가이던스에서 중국 데이터센터 매출 제로를 이미 반영한 데 이은 공급측 구조 조정 완료.",
                color: "green",
                link: "https://www.ft.com/content/47f1cf56-209f-46fb-a437-f769b9ccb2cb"
            },
            {
                category: "Energy",
                title: "빅테크 7사, 백악관에서 'Ratepayer Protection Pledge' 서명",
                desc: "- Google·MS·Meta·Amazon·Oracle·xAI·OpenAI가 AI 데이터센터 전력 비용 자체 부담 서약에 공식 서명.<br>- 트럼프 대통령이 '소비자 전기요금이 AI 때문에 올라가서는 안 된다'며 중간선거를 겨냥한 정치적 프레이밍 강화.<br>- 발전소·송전망 업그레이드 비용의 빅테크 전가 구조가 공식화되며 에너지 인프라 투자 책임 분담 체계 확립.",
                color: "orange",
                link: "https://www.reuters.com/sustainability/climate-energy/trump-meet-tech-giants-energy-pledge-ahead-midterms-2026-03-04/"
            },
            {
                category: "Energy",
                title: "중동 전쟁이 재생에너지 전환 가속의 계기 — 화석연료 의존 리스크 재부각",
                desc: "- 중동 분쟁 확전으로 글로벌 에너지 시장이 요동치며 화석연료 의존국의 취약성이 재차 노출.<br>- 풍력·태양광 등 재생에너지 비중이 높은 국가일수록 글로벌 에너지 충격에 대한 방어력이 우수하다는 전문가 분석.<br>- 안정적 에너지 공급을 위한 재생에너지 가속화에는 대규모 투자와 시스템 전환이 필수 과제.",
                color: "orange",
                link: "https://www.dw.com/en/iran-war-roils-oil-trade-casting-doubt-on-us-fossil-fuel-push/a-76294122"
            },
            {
                category: "Energy",
                title: "텍사스, 캘리포니아 제치고 유틸리티 태양광 발전 1위 등극",
                desc: "- 2025년 텍사스 유틸리티 태양광 발전량 58,634GWh로 전국 1위 확정, 시장 규모 $500억 돌파.<br>- 2025년 신규 설치 11GW 이상으로 미국 전체 43GW의 25% 이상을 차지하며 에너지 전환 주도.<br>- 배터리 저장 분야에서도 캘리포니아 추월 임박 — 2025년 미국 전체 57.6GWh(전년 대비 30% 증가).",
                color: "orange",
                link: "https://insideclimatenews.org/news/05032026/inside-clean-energy-texas-utility-scale-solar/"
            },
            {
                category: "Robotics",
                title: "2026년이 로보틱스의 '결정적 해' — MIT Sloan 분석",
                desc: "- 소프트웨어 주도 AI 성장에서 하드웨어 로봇 실전 배치로의 전환점 도래.<br>- '프로토타입에서 실세계 배치로' — 공장·창고·물류 현장에서 상용화 가속.<br>- 경제적 티핑포인트 도달: 산업용 로봇의 ROI가 인건비를 하회하기 시작하며 대규모 도입 촉발 전망.",
                color: "purple",
                link: "https://www.mitsloanme.com/article/how-2026-will-decide-the-future-of-robotics/"
            },
            {
                category: "Texas",
                title: "텍사스 상원 선거 본격 시동 — 민주당 Talarico 확정, 공화당은 5월 결선투표",
                desc: "- 2026 중간선거 텍사스 상원 예비선거에서 민주당 James Talarico가 후보로 확정.<br>- 공화당 경선은 승부가 갈리지 않아 5월 결선투표로 연장되며 경쟁 과열 양상.<br>- 텍사스가 1988년 이후 민주당 상원의원을 배출하지 못한 기록의 갱신 여부에 전국적 관심 집중.",
                color: "orange",
                link: "https://www.texastribune.org/2026/03/03/john-cornyn-ken-paxton-wesley-hunt-runoff-primary-texas-senate-republican/"
            },
            {
                category: "Texas",
                title: "AI 데이터센터 건설 붐이 낳은 'Man Camp' — 농촌 주거 인프라 위기",
                desc: "- AI 데이터센터 건설 붐으로 전력·수자원 접근성이 있는 외곽·농촌 지역에 대형 시설이 집중 입주.<br>- 수천 명의 건설 인력을 수용할 주거 인프라 부족으로 임시 숙소·식당·체육시설을 갖춘 'Man Camp' 형태의 주거단지 구축 확산.<br>- 전기공·용접공 등 숙련 노동자 유치를 위한 임시 주거 솔루션이 데이터센터 건설의 새로운 병목 해소 과제.",
                color: "orange",
                link: "https://www.bloomberg.com/news/features/2026-03-06/the-700-billion-ai-data-center-boom-is-fueling-a-boom-in-man-camp-housing"
            },
            {
                category: "California",
                title: "캘리포니아 등 24개 주, 트럼프 행정부 Section 122 관세에 대한 위헌 소송 제기",
                desc: "- 캘리포니아를 포함한 24개 민주당 주도 주가 트럼프 행정부의 Section 122 관세에 대해 연방 소송 제기.<br>- 롭 본타(Rob Bonta) 캘리포니아 법무장관이 오리건·애리조나·뉴욕 법무장관과 공동 소송 주도.<br>- 1974년 무역법 Section 122의 대통령 관세 부과 권한 남용을 핵심 쟁점으로 법적 다툼 본격화.",
                color: "blue",
                link: "https://calmatters.org/economy/2026/03/trump-tariff-ca-lawsuit/"
            },
            {
                category: "Etc",
                title: "미국 건설 노동력 부족 심화 — 강한 임금 상승과 보너스 지급 확대",
                desc: "- ADP 보고서에 따르면 미국 주거용 건설 부문의 노동력 부족이 견조한 일자리 증가와 임금 상승을 견인.<br>- 숙련 건설 노동자 확보 경쟁이 치열해지며 보너스·복리후생 등 인센티브 지급 확대 추세.<br>- 데이터센터·인프라 건설 붐과 맞물려 건설 인력 수급 불균형의 구조적 심화.",
                color: "gray",
                link: "https://www.adpresearch.com/the-building-trades-five-new-facts/"
            },
            {
                category: "Etc",
                title: "미국 2월 민간 고용 63,000명 증가 — 남부 지역·소규모 기업 중심 회복",
                desc: "- ADP 자료에 따르면 2월 미국 민간 기업 고용이 63,000명 증가하며 노동시장 안정세 확인.<br>- 지역별로는 남부가 가장 큰 회복세, 산업별로는 의료·교육·건설 분야가 고용 증가 주도.<br>- 20인 미만 소규모 기업의 채용이 가장 활발하며 고용 회복의 저변 확대 신호.",
                color: "gray",
                link: "https://www.bloomberg.com/news/articles/2026-03-04/us-companies-added-63-000-jobs-in-february-adp-data-show"
            },
            {
                category: "M&A",
                title: "PE 신뢰도 역대 최고 — 메가딜이 주간 단위로 발생하는 시대",
                desc: "- 2026년 M&A 회복 본격화, PE 응답자 90%가 '올해 더 많은 딜 완료를 예상'하며 역대 최고 신뢰도 기록.<br>- 기술·에너지·방산 중심 메가딜 급증, 다만 딜 건수는 전년 대비 22% 감소하며 대형화 추세 심화.<br>- 이란전 불확실성이 일부 딜을 지연시키나 전략적 통합 수요는 오히려 가속되는 역설적 양상.",
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
                desc: "- 연방 대법원 6:3 판결로 IEEPA 기반 관세의 대통령 단독 부과 권한 부정 및 전면 무효화 결정.<br>- IEEPA 관세가 전체 관세 수입의 약 50%를 차지, 일일 약 $5억 규모의 징수액 발생 추정.<br>- 수입업자의 180일 이내 환급 청구 가능성에 따른 최대 $1,750억 재정 충격 전망.",
                color: "blue",
                link: "https://budgetmodel.wharton.upenn.edu/issues/2026/2/20/supreme-court-tariff-ruling-ieepa-revenue-and-potential-refunds"
            },
            {
                category: "Politics",
                title: "스위스, '인구 1,000만 명 상한' 국민투표 6월 확정",
                desc: "- 최대 정당 SVP 주도, 인구 950만 도달 시 이민 자동 제한 및 1,000만 돌파 시 EU 자유이동 협정 파기 조항 포함.<br>- 현재 인구 910만 명으로 상한 근접, EU와의 120여 개 양자 협정 폐기 가능성에 따른 유럽 내 긴장 고조.<br>- 여론조사에서 높은 지지율 확인, 6월 14일 국민투표 결과에 따른 유럽 이민 정책 전반의 파급 효과 주목.",
                color: "blue",
                link: "https://edition.cnn.com/2026/02/12/europe/switzerland-referendum-population-cap-10-million-intl"
            },
            {
                category: "Economy",
                title: "위안화, 달러 대비 3년 만에 최고치 경신",
                desc: "- 미 대법원 IEEPA 관세 위헌 판결로 중국 수출 수혜 기대감 확대에 따른 위안화 강세 전환.<br>- 중국 무역 지표 개선 및 글로벌 투자 자금 유입과 맞물린 아시아 통화 시장 변동성 확대.<br>- 달러 약세 전환 가능성에 따른 신흥국 자산 재평가 및 글로벌 자금 흐름 변화 신호.",
                color: "gray",
                link: "https://www.thestandard.com.hk/market/article/325100/Chinas-yuan-hits-near-3-year-high-on-bets-US-tariff-ruling-will-aid-Chinese-exports"
            },
            {
                category: "Economy",
                title: "Nvidia, Q4 FY2026 매출 $681억 — AI 인프라 수요 폭증에 따른 역대 최대 실적",
                desc: "- 분기 매출 $681억(YoY +73%), 연간 매출 $2,159억, 순이익 $1,200억 기록 및 시장 예상치 대폭 상회.<br>- 데이터센터 매출이 전체의 91%($623억) 차지, Blackwell 아키텍처의 본격 양산에 따른 마진 개선(75%).<br>- Q1 FY2027 가이던스 $780억 제시, 차세대 Vera Rubin 플랫폼 샘플 출하 개시에 따른 성장 지속 전망.",
                color: "gray",
                link: "https://sahi.com/blogs/nvidia-q4-fy2026-earnings-results-ai-industry-analysis"
            },
            {
                category: "Tech",
                title: "미 국방부, Anthropic에 AI 모델 무제한 접근권 요구 — 윤리 갈등 격화",
                desc: "- 국방장관 Hegseth의 Anthropic CEO 면담 및 2/27 시한부 최후통첩 전달.<br>- AI 모델 Claude의 군사적 '합법적 전 용도' 사용 요구 vs Anthropic의 대규모 시민 감시·완전 자율 무기 사용 거부.<br>- 거부 시 '공급망 리스크' 업체 지정 또는 국방물자생산법(DPA) 적용 경고, xAI의 Grok 대체 계약 체결 배경.",
                color: "green",
                link: "https://www.chosun.com/english/industry-en/2026/02/25/LSB75RQ6RBHDDAWFB3KIOFN5QA/"
            },
            {
                category: "Energy",
                title: "짐바브웨, 미가공 리튬 정광 수출 전면 금지 — 국제 리튬 가격 급등",
                desc: "- 아프리카 최대 리튬 생산국 짐바브웨의 리튬 정광 및 원광 수출 즉각 중단 조치 발표.<br>- 자국 내 가공 산업 육성 및 불법 선적 차단 목적, 중국 리튬 가격 즉시 급등 반응.<br>- 글로벌 리튬 공급망 차질 우려 및 중국 광산 기업의 현지 가공 전환 가속 전망.",
                color: "orange",
                link: "https://www.bloomberg.com/news/articles/2026-02-26/lithium-prices-jump-after-zimbabwe-bans-concentrate-exports"
            },
            {
                category: "Energy",
                title: "트럼프, 테크기업에 데이터센터 전력 비용 자체 부담 요구",
                desc: "- 국정연설(SOTU)에서 테크 기업의 자체 발전소 건설 및 전력 비용 자부담 '요금 보호 서약' 발표.<br>- AI 데이터센터의 소도시급 전력 소비에 따른 일반 가구 전기요금 상승 우려 대응 목적.<br>- 구체적 이행 방안 미공개 상태, 다음 주 백악관에서 테크 기업 대표와 공식 서약 서명 예정.",
                color: "orange",
                link: "https://www.nytimes.com/2026/02/25/climate/ai-data-centers-trump-energy-costs.html"
            },
            {
                category: "Texas",
                title: "2026 예비선거 조기투표, 역대 중간선거 기록 경신 — 민주당 투표율 압도",
                desc: "- 조기투표 7일간 민주당 66.6만 표 vs 공화당 59.4만 표, 총 126만 표로 2024·2020 동기 대비 초과 달성.<br>- Harris County(민주당 최대 거점)·Tarrant County(스윙 카운티) 중심의 기록적 투표율 확인.<br>- 민주당 상원 경선(Crockett vs Talarico) 열기 및 트럼프 행정부에 대한 반발 투표 동력 분석.",
                color: "orange",
                link: "https://www.texastribune.org/2026/02/25/texas-early-voting-turnout-democrats-midterm-election/"
            },
            {
                category: "California",
                title: "'부유세' 저지 연방 법안 발의 — 캘리포니아 자본 유출 갈등 심화",
                desc: "- 캘리포니아 '2026 억만장자 과세법'(순자산 $10억+ 대상, 자산의 5% 과징금) 11월 주민투표 추진.<br>- 연방 하원의원 Kiley, 주를 떠난 후에도 소급 과세하는 조항을 금지하는 연방법(Keep Jobs in California Act) 발의.<br>- Zuckerberg·Larry Page·Sergey Brin·Larry Ellison·Peter Thiel 등 빅테크 창업자의 캘리포니아 이탈 선언 배경.",
                color: "blue",
                link: "https://kiley.house.gov/posts/rep-kevin-kiley-introduces-bill-to-fight-californias-wealth-tax"
            },
            {
                category: "Etc",
                title: "WEF 글로벌 리스크 보고서 2026: '새로운 경쟁의 시대' 도래",
                desc: "- 1,300명 이상의 글로벌 전문가 서베이 기반, 지정학적 대립과 경제적 경쟁 심화가 최대 글로벌 위협으로 부상.<br>- 2년·10년 시계열 분석을 통한 국가 간 갈등·인프라 회복 탄력성·기술 리스크 관리의 핵심 과제 제시.<br>- 단기(2026)·중기(2028)·장기(2036) 리스크 전망 프레임워크를 활용한 의사결정자용 전략적 가이드 제공.",
                color: "gray",
                link: "https://www.weforum.org/publications/global-risks-report-2026/"
            },
            {
                category: "Etc",
                title: "한국은행, 기준금리 2.5% 6연속 동결 + 성장률 전망 2.0% 상향",
                desc: "- 2/26 금통위에서 기준금리 연 2.50% 만장일치 동결 결정(2025년 7월 이후 6회 연속).<br>- 반도체 수출 호조(1월 수출 102.5% 증가)를 근거로 올해 경제성장률 전망 1.8→2.0% 상향 조정.<br>- 성장률·물가 동시 상향에 따른 '인하 사이클' 사실상 종료 및 연내 동결 기조 강화 전망.",
                color: "gray",
                link: "https://www.chosun.com/economy/economy_general/2026/02/26/RP3JACDJT5GEHKPWXQY2IFJVNI/"
            },
            {
                category: "M&A",
                title: "PwC 글로벌 M&A 트렌드 2026: AI 메가딜이 주도하는 'K자형' 인수합병 시장",
                desc: "- 2025년 $50억 이상 메가딜 111건(전년 63건 대비 76% 증가), 글로벌 딜 금액 36% 성장 vs 건수 정체의 양극화 구조 심화.<br>- AI 인프라 투자 슈퍼사이클이 단기적으로 M&A 자금을 흡수하나, 중기적으로 혁신 슈퍼사이클을 촉발할 딜메이킹 재점화 전망.<br>- CEO 41%가 3년 내 대형 인수 계획, 투자자 92%가 기술 전환 자본 확대를 요구하는 AI 중심 전략적 M&A 시대 본격 개막.",
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
                desc: "- 공화당 의원 6명의 이탈로 트럼프 행정부의 캐나다 긴급관세 철회 결의안 하원 통과.<br>- 관세 정책에 대한 의회의 이례적인 견제구 역할 및 정치적 긴장감 고조.<br>- 대통령 거부권 행사 예상에 따른 실질적 효력 제한 가능성 상존.",
                color: "blue",
                link: "https://www.theguardian.com/us-news/2026/feb/11/us-house-vote-trump-canada-tariffs"
            },
            {
                category: "Politics",
                title: "베네수엘라, 마두로 축출 후 첫 대규모 반정부 시위",
                desc: "- 임시 대통령 체제 하의 사면법 심의 지연에 따른 야당 측 대규모 시위 발생.<br>- 정치범 구금 해제 요구와 미·베네수엘라 간 석유 생산 협력 논의 병행.<br>- 축출 이후에도 지속되는 내부 권력 투쟁 및 급변하는 외교 관계.",
                color: "blue",
                link: "https://www.aljazeera.com/news/2026/2/12/protesters-march-in-venezuela-as-national-assembly-weighs-amnesty-bill"
            },
            {
                category: "Economy",
                title: "NY Fed: 관세 비용 90% 미국 기업 및 소비자 부담",
                desc: "- 뉴욕 연준 보고서의 관세 비용 대부분이 미국 내수 경제로 전가된다는 분석.<br>- 가구당 연간 최대 $1,300 비용 증가 전망 및 인플레이션 압박 우려.<br>- 연준의 금리 인하 시점 결정에 중대한 변수로 작용할 가능성 대두.",
                color: "gray",
                link: "https://www.reuters.com/world/us/ny-fed-report-says-americans-pay-almost-all-trumps-tariffs-2026-02-12/"
            },
            {
                category: "Tech",
                title: "빅테크 4사, AI 인프라 역대 최대 6,500억 달러 투자",
                desc: "- 데이터센터 및 컴퓨팅 자원 확보를 위한 아마존, 구글 등 빅테크의 공격적 설비투자.<br>- 국가 GDP 규모에 맞먹는 자본 투입과 업계 내 실존적 경쟁 심화.<br>- 대규모 투자에 따른 수익성 증명 압박 및 비즈니스 모델 최적화 집중.",
                color: "green",
                link: "https://www.cnbc.com/2026/02/06/google-microsoft-meta-amazon-ai-cash.html"
            },
            {
                category: "Tech",
                title: "Waymo, 6세대 자율주행 투입 및 확장",
                desc: "- 주당 100만 회 유료 운행 목표 달성을 위한 6세대 완전 무인 기술 도입.<br>- 올해 20개 이상 도시로의 서비스 확장 및 160억 달러 규모 자금 투입.<br>- 물류 및 운송 산업 전반의 무인화 상용화 가속화 기대.",
                color: "green",
                link: "https://waymo.com/blog/2026/02/ro-on-6th-gen-waymo-driver"
            },
            {
                category: "Energy",
                title: "트럼프 행정부, EPA 온실가스 위험성 판정 폐지",
                desc: "- 자동차 및 발전소 배출 규제의 법적 근거가 된 기후 규제 근간 공식 폐기.<br>- 차량당 비용 절감 주장과 조기 사망 증가를 우려하는 환경단체의 대립 가속.<br>- 미국 내 환경 정책의 대대적 전환 및 연방 대법원 소송 예고.",
                color: "orange",
                link: "https://www.bbc.com/news/articles/cn0zdd7yl4vo"
            },
            {
                category: "Robotics",
                title: "Apptronik, 5.2억 달러 유치 및 휴머노이드 경쟁 과열",
                desc: "- 제조 및 물류용 'Apollo' 로봇 대량 생산을 위한 구글, 벤츠 등의 대규모 투자.<br>- 기업가치 55억 달러 달성 및 범용 휴머노이드 시장 내 자금 유입 활발.<br>- 인간 형태 로봇의 상용화를 향한 빅테크 기업 간의 기술 및 자본 경쟁 가속.",
                color: "purple",
                link: "https://www.therobotreport.com/apptronik-brings-in-another-520m-to-ramp-up-apollo-production/"
            },
            {
                category: "Texas",
                title: "텍사스 조선소 7.3억 달러 확장 및 일자리 창출",
                desc: "- 북극 쇄빙선 건조 계약과 연동된 조선 시설 확장 및 2,400개 일자리 창출 계획.<br>- 텍사스 방위산업 생태계 강화 및 주 정부 보조금 지원을 통한 제조업 활성화.<br>- 걸프만 지역의 전략적 제조 거점화 및 지역 경제 성장 가속.",
                color: "orange",
                link: "https://gov.texas.gov/news/post/governor-abbott-announces-davie-defense-expansion-in-texas"
            },
            {
                category: "California",
                title: "캘리포니아, 주택담보대출 구제 프로그램 4배 확대",
                desc: "- 뉴섬 주지사의 사별 배우자 및 생존자를 위한 모기지 지원금 대폭 증액 발표.<br>- 주거 취약 계층의 주택 유지 비용 부담 완화 및 커뮤니티 안정화 정책.<br>- 가파른 생활비 상승에 대응하기 위한 주 정부 차원의 복지 예산 투입 가속.",
                color: "blue",
                link: "https://www.gov.ca.gov/2026/02/12/governor-newsom-announces-major-expansion-of-mortgage-relief-program-with-a-four-fold-increase-in-payments-to-survivors/"
            },
            {
                category: "Etc",
                title: "연준, 기준금리 동결 및 인플레이션 경계 지속",
                desc: "- FOMC의 기준금리 동결 결정 및 하반기 인하 가능성을 열어둔 신중한 입장.<br>- 30년 모기지 금리의 3년래 최저치 근접에 따른 부동산 시장 영향 주목.<br>- 무역 정책의 물가 영향 분석을 통한 연준의 향후 통화 정책 방향 설정.",
                color: "gray",
                link: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260128a.htm"
            },
            {
                category: "M&A",
                title: "금융 및 에너지 산업 내 역대급 대형 합병 가속",
                desc: "- Nuveen의 Schroders 인수를 통한 2.5조 달러 규모 세계 최대 자산운용사 탄생.<br>- 셰일 역사상 최대 규모인 Devon Energy와 Coterra Energy의 580억 달러 합병.<br>- Symbotic의 Fox Robotics 인수로 물류 자동화 풀라인업 확보 및 플랫폼 전략 강화.",
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
                desc: "- 높은 생활비로 인한 인구 유출로 2030년 연방 하원 의석 4석 상실 전망.<br>- 역사상 최대 규모의 정치적 영향력 축소 및 권력 중심축의 남부 이동.<br>- 반면 텍사스는 4석 추가 확보 등 미국 내 권력의 선벨트 지역 집중 시사.",
                color: "blue",
                link: "https://abc7news.com/post/california-projected-lose-4-congressional-seats-2030-census-population-decline/18500791/"
            },
            {
                category: "California",
                title: "캘리포니아, 억만장자 타겟 '부유세' 법안 논란",
                desc: "- 자산 10억 달러 이상 부유층 대상 순자산 1% 과세 추진.<br>- 주 이탈 시에도 향후 수년간 세금 징수 조항을 포함한 강력한 조세 정책.<br>- 부유층 엑소더스 가속화 우려 및 조세 저항에 따른 사회적 갈등 심화.",
                color: "blue",
                link: "https://www.cnbc.com/2026/01/08/california-wealth-tax-proposal-leaves-billionaires-with-little-way-out.html"
            },
            {
                category: "Texas",
                title: "텍사스, 주거비 급등으로 인한 '성장의 역설' 직면",
                desc: "- 소득 및 교육 수준 향상에도 불구하고 주거비 상승폭의 급격한 초과.<br>- 과거 '저비용 고효율' 거주지로서의 텍사스 경쟁력 감소 우려.<br>- 급격한 인구 유입 지속에 따른 주택 공급 부족 및 인프라 과부하 문제 대두.",
                color: "orange",
                link: "https://www.texastribune.org/2026/01/29/texas-census-housing-incomes/"
            },
            {
                category: "Texas",
                title: "겨울 폭풍 '펀(Fern)' 강습",
                desc: "- 강력한 겨울 폭풍 '펀' 발생으로 인한 북부 지역 폭설 및 빙판길 사고 속출.<br>- 동부 지역 수만 가구 전력 차단 등 극심한 한파 피해 발생.<br>- 주요 인프라 마비에 따른 지역 주민 안전 주의보 발령.",
                color: "orange",
                link: "https://www.bbc.com/news/articles/c1klrmz90yjo"
            },
            {
                category: "Etc",
                title: "Standard Chartered: Weekly Market View",
                desc: "- 연준 파월 의장에 대한 압박 및 금리 인하 기대감에 따른 시장 변동성 확대.<br>- 오는 3월 25bp 금리 인하 전망에 따른 투자자 관심 집중.<br>- 글로벌 통화 정책 변화에 따른 선제적 시장 대응 전략 필요.",
                color: "gray",
                link: "https://www.sc.com/en/uploads/sites/66/content/docs/wm-weekly-market-view-the-case-for-lower-fed-rates-16-january-2026.pdf"
            },
            {
                category: "Etc",
                title: "PwC: 2026 M&A Outlook",
                desc: "- AI 인프라 확보를 위한 대규모 딜의 올해 M&A 시장 주도 예상.<br>- 기술 기업 중심의 자본 시장 재편 및 전략적 인수 합병 가속화.<br>- 글로벌 기업들의 AI 경쟁력 강화를 위한 투자 포트폴리오 다변화.",
                color: "gray",
                link: "https://www.pwc.com/gx/en/services/deals/trends.html"
            },
            {
                category: "Politics",
                title: "미국, 파리 협정 탈퇴 및 국제기구 자원 중단",
                desc: "- 1월 27일부 파리 기후 협정 탈퇴 공식 발효.<br>- UNFCCC 및 GCF 등 주요 국제기구에 대한 자원 투입 중단.<br>- 트럼프 행정부의 '에너지 우선' 정책에 따른 고립주의 노선 심화.",
                color: "blue",
                link: "https://www.chosun.com/international/international_general/2026/01/08/6JGZMLZS3FFBHISBRY4JN5253E/"
            },
            {
                category: "Economy",
                title: "IMF, 2026년 세계 성장률 3.3% 상향 전망",
                desc: "- 무역 갈등 상황 속 AI 투자 및 민간 경제 적응력 주목.<br>- 기존 전망치 대비 글로벌 성장률 수치 상향 조정 발표.<br>- 글로벌 경기 회복세 지속에 대한 긍정적 시장 신호 전달.",
                color: "gray",
                link: "https://www.imf.org/en/publications/weo/issues/2026/01/19/world-economic-outlook-update-january-2026"
            },
            {
                category: "Tech",
                title: "다보스 포럼, 'AI 수익 창출의 해' 선언",
                desc: "- 시스코·IBM 등 주요 빅테크 기업들의 AI 수익 모델 전격 공개.<br>- 대규모 AI 투자에 대한 실질적 자본 회수 구간 진입 판단.<br>- 단순 기술 경쟁 넘어선 비즈니스 효율화 및 수익 극대화 집중.",
                color: "green",
                link: "https://www.bloomberg.com/news/articles/2026-01-22/davos-crowd-focuses-on-ai-returns-after-year-of-heavy-investments"
            }
        ]
    }
];
