// app.js — 데이터 자동 로딩 (한 번 만들면 수정 불필요)

(async function () {
    try {
        // 1) filelist.json에서 주차 파일 목록 가져오기
        const res = await fetch('./data/filelist.json');
        const files = await res.json();

        // 2) 모든 주차 JSON을 병렬로 로드
        const promises = files.map(f => fetch(`./data/${f}`).then(r => r.json()));
        const weeks = await Promise.all(promises);

        // 3) sortKey 기준 역순 정렬 (최신이 위)
        weeks.sort((a, b) => b.sortKey - a.sortKey);

        // 4) 글로벌 변수에 할당 (기존 코드 호환)
        window.newsData = weeks;

        // 5) 로딩 완료 이벤트 발생
        window.dispatchEvent(new Event('newsDataReady'));

    } catch (err) {
        console.error('데이터 로딩 실패:', err);
    }
})();
