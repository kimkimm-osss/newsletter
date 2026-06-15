(async function () {
    try {
        const res = await fetch('./data/filelist.json');
        const files = await res.json();
        const promises = files.map(f => fetch('./data/' + f).then(r => r.json()));
        const weeks = await Promise.all(promises);
        weeks.sort(function (a, b) { return b.sortKey - a.sortKey; });
        window.newsData = weeks;
        window.dispatchEvent(new Event('newsDataReady'));
    } catch (err) {
        console.error('데이터 로딩 실패:', err);
    }
})();
