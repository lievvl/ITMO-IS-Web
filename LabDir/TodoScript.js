let globalList = [];
let card;

(async function () {
    if (localStorage.hasOwnProperty("TodoList")) {
        globalList = JSON.parse(localStorage.getItem("TodoList"));
        window.addEventListener("load", async function () {
            let templates = document.createElement('template');
            templates.innerHTML = await (await fetch('template.html')).text();
            let tmp = templates.content.querySelector( '#t1' );
            card = tmp.content.querySelector("div");
            for (let key in globalList) {
                addItemToDOM(globalList[key]);
            }
        })
    }
    let templates = document.createElement('template');
    templates.innerHTML = await (await fetch('template.html')).text();
    let tmp = templates.content.querySelector( '#t1' );
    card = tmp.content.querySelector("div");
})();

function addItem() {
    let input = document.getElementById("todo_input");
    if (input.value === "") {
        return;
    }
    let id = 0
    if (globalList.length !== 0) {
        id = globalList[globalList.length - 1].id + 1;
    }
    let item = {
        id: id,
        value: input.value,
        state: false
    }
    addItemToDOM(item);
    globalList.push(item);
    localStorage.setItem("TodoList", JSON.stringify(globalList));
    input.value = "";
}

function addItemToDOM(item) {
    let list = document.getElementById("todo_list");
    let tag = card.cloneNode(true);
    tag.querySelector('#t1_text').textContent = item.value;
    let checkbox = tag.querySelector('#t1_checkbox');
    checkbox.checked = item.state;
    checkbox.attributes[2].value = item.id
    list.append(tag);
}

function changedState(node) {
    for (let i in globalList) {
        if (globalList[i].id === parseInt(node.attributes[2].value)) {
            globalList[i].state = node.checked;
            break;
        }
    }
    localStorage.setItem("TodoList", JSON.stringify(globalList));
}