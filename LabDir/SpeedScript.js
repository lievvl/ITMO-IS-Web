(function () {
    window.addEventListener("load", function () {
        let loadTime = (window.performance.timing.loadEventStart - window.performance.timing.navigationStart);
        let footer = document.getElementById('footer_container');
        let p = document.createElement('P');
        p.innerText = "Load Time: " + (loadTime / 1000).toString() + "s";
        footer.append(p);

        let path = document.location.pathname.split('/');
        let name = path[path.length - 1].split('.')[0];
        let ulChilds = document.getElementById("hamburger_menu_id").children;
        let ar = []
        for (i = 0; i < ulChilds.length; i++) {
            if (i === 0) {
                continue;
            }
            let a = ulChilds[i].children[0];
            let filename = ulChilds[i].children[0].attributes[1].nodeValue;
            filename = filename.split('/');
            filename = filename[filename.length - 1].split('.')[0]
            ar.push({
                filename: filename,
                a: a
            });
        }
        console.log(ar);
        console.log(document.getElementById("hamburger_menu_id").children[2].children[0].attributes[1].nodeValue);
        for (i = 0; i < ar.length; i++)
        {
            if (ar[i].filename == name) {
                ar[i].a.classList.add("hamburger-menu__onPage");
                break;
            }
        }
    })
})();