let card;

(async function () {
    window.addEventListener("load", async function () {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(async response => {
                let templates = document.createElement('template');
                templates.innerHTML = await (await fetch('template.html')).text();
                let tmp = templates.content.querySelector('#t1');
                card = tmp.content.querySelector("div");
                await sleep(2000)
                //throw new Error();
                let json = await response.json()
                document.getElementById("slowpoke").hidden = true;
                document.getElementById("todo_div").hidden = false;
                let userId = getRandomInt(6)
                for (let i = 0; i < 200; i++) {
                    if (userId == json[i].userId) {
                        let item = {
                            id: json[i].id,
                            value: json[i].title,
                            state: json[i].completed
                        }
                        addItemToDOM(item)
                    }
                }
                console.log(json)
            })
            .catch((err) => {
                console.log(err)
                document.getElementById("slowpoke").hidden = true;
                document.getElementById("error").hidden = false;
            })
    })
    let templates = document.createElement('template');
    templates.innerHTML = await (await fetch('template.html')).text();
    let tmp = templates.content.querySelector( '#t1' );
    card = tmp.content.querySelector("div");
})();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * (max - 1)) + 1;
}

function addItem() {
    let input = document.getElementById("todo_input");
    if (input.value === "") {
        return;
    }
    let id = 0
    let item = {
        id: id,
        value: input.value,
        state: false
    }
    addItemToDOM(item);
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