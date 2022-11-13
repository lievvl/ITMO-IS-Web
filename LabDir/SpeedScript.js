(function () {
    let startDate = Date.now();
    window.onload = function() {
        let loadTime = Date.now() - startDate;
        let footer = document.getElementById('footer_container');
        let p = document.createElement('P');
        p.innerText = "Load Time: " + (loadTime / 1000).toString() + "s";
        footer.append(p);

        let path = document.location.pathname.split('/');
        let name = path[path.length - 1].split('.')[0];
        if (name == "index") {
            document.getElementById("hamburger_menu_id").children[1].children[0].classList.add("hamburger-menu__onPage");
        }
        if (name == "table") {
            document.getElementById("hamburger_menu_id").children[2].children[0].classList.add("hamburger-menu__onPage");
        }
        if (name == "todoList") {
            document.getElementById("hamburger_menu_id").children[3].children[0].classList.add("hamburger-menu__onPage");
        }
    }
})();