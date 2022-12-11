(async function () {
    window.addEventListener("load", async function () {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                response.json()
            })
            .then((json) => {
                console.log(json)
        })
    })
})();