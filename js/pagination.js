var count_of_pagination = Math.ceil(movies.length/10)
var current_page = 0


var prev_page = document.createElement('li')
prev_page.className = 'pagination__item'
listOfPagination.appendChild(prev_page)
    
var prev_page_link = document.createElement('a')
prev_page_link.setAttribute('href', '#')
prev_page_link.textContent = '<<'
prev_page_link.dataset.idpage = 1
prev_page_link.className = 'pagination__link'
prev_page.appendChild(prev_page_link)

for(let i=1; i<=count_of_pagination; i++){
    var itemOfPagination = document.createElement('li')
    itemOfPagination.className = 'pagination__item'
    listOfPagination.appendChild(itemOfPagination)
    
    var linkOfPagination = document.createElement('a')
    linkOfPagination.setAttribute('href', '#')
    linkOfPagination.dataset.idpage = i
    linkOfPagination.textContent = i
    linkOfPagination.className = 'pagination__link'
    listOfPagination.appendChild(linkOfPagination)
}

var next_page = document.createElement('li')
next_page.className = 'pagination__item'
listOfPagination.appendChild(next_page)
    
var next_page_link = document.createElement('a')
next_page_link.setAttribute('href', '#')
next_page_link.textContent = '>>'
next_page_link.className = 'pagination__link'
next_page.appendChild(next_page_link)

listOfPagination.addEventListener('click', event => {
    section.innerHTML = ''
    var target = event.target.dataset.idpage
    current_page = target
    if(current_page < count_of_pagination){
        next_page_link.dataset.idpage = Number(current_page)+1
    }

    if(current_page > 1){
        prev_page_link.dataset.idpage = (current_page-1)
    }else{
        // prev_page_link.dataset.idpage = 1
    }
    movies.slice((current_page-1)*10, current_page*10).forEach(elem => {
        element = elem
        renderMovies()
    })
})

movies.slice(0, 10).forEach(elem => {
    element = elem
    renderMovies()
})

console.log(prev_page_link.dataset.idpage);



function renderMovies(){
        var template = document.getElementById('template').content
        var clonerender = document.importNode(template, true)

        let img = clonerender.getElementById('img')
        img.setAttribute('src', element.imageUrl)

        let title = clonerender.getElementById('title')
        title.textContent = element.title

        let id = clonerender.getElementById('id')
        id.textContent = element.id

        let year = clonerender.getElementById('year')
        year.innerHTML = `<span>Year:</span> ${element.year}`

        let genres = clonerender.getElementById('genres')
        genres.innerHTML = `<span>Genres:</span> ${element.genres}`

        let director = clonerender.getElementById('director')
        director.innerHTML = `<span>Director:</span> ${element.director}`

        let actors = clonerender.getElementById('actors')
        actors.innerHTML = `<span>Actors:</span> ${element.actors}`

        let description = clonerender.getElementById('description')
        description.innerHTML = `<span>Description:</span> ${element.description}`

        section.appendChild(clonerender)      
}

