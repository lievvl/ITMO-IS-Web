(function () {
    window.addEventListener("load", function () {
        let loadTime = (window.performance.timing.loadEventStart - window.performance.timing.navigationStart);
        let footer = document.getElementById('footer_container');
        let p = document.createElement('P');
        p.innerText = "Load Time: " + (loadTime / 1000).toString() + "s";
        footer.append(p);
    })
})();