// Задание:
// - Отправьте get запрос на https://jsonplaceholder.typicode.com/posts
// - Список полученных постов отобразите в html файле (дизайн на ваше усмотрение)
// - Для каждого поста создайте блок с id, title и body
// - Бонус: добавьте проект в github-репозиторий и разместите на github-pages

// Пример результата смотрите на прикрепленной ниже ссылке

fetch("https://jsonplaceholder.typicode.com/posts")
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
    const main = document.querySelector(".main")
    for(i=0;i<data.length;i++){
        // console.log(data[i].id)
        const div = document.createElement("div")
        div.classList.add("container")
        main.insertAdjacentElement("afterbegin",div)
        const id = document.createElement("p")
        id.setAttribute("id","human-id")
        id.textContent = `id = ${data[i].id}`
        div.insertAdjacentElement("afterbegin",id)
        const title = document.createElement("p")
        title.classList.add('title-p')
        title.textContent = data[i].title
        id.insertAdjacentElement("afterend",title)
        const txt = document.createElement("p")
        txt.setAttribute("id","body-p")
        txt.textContent = data[i].body
        title.insertAdjacentElement("afterend",txt)

    }
})