(function () {
    window.addEventListener("load", function () {
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

        for (i = 0; i < ar.length; i++)
        {
            if (ar[i].filename == name) {
                ar[i].a.classList.add("hamburger-menu__onPage");
                break;
            }
        }
    })
})();