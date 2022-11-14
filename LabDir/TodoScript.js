var globalList = {};

(function () {
    console.log(localStorage.hasOwnProperty("TodoList"))
    if (localStorage.hasOwnProperty("TodoList"))
    {
        globalList = JSON.parse(localStorage.getItem("TodoList"));
        window.addEventListener("load", function (){
            for (let key in globalList) {
                addItemToDOM(globalList[key]);
            }
        })
    }
})();

function addItem() {
    let input = document.getElementById("todo_input");
    addItemToDOM(input.value);
    let key = Object.keys(globalList).length + 1;
    globalList[key] = input.value;
    console.log(globalList);
    localStorage.setItem("TodoList", JSON.stringify(globalList));
}

function addItemToDOM(value) {
    let list = document.getElementById("todo_list");
    let tag = document.createElement("li");
    tag.textContent = value;
    list.append(tag);
}