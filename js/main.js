var container = document.createElement('div')
container.className = 'container'
document.body.prepend(container)

var h1 = document.createElement('h1')
h1.className = 'h1'
h1.textContent = 'Movies'
container.appendChild(h1)

var section = document.createElement('div')
section.className = 'section'
container.appendChild(section)

function moviesEl(){
    
        let card = document.createElement('div');
        card.className = "card"
        section.appendChild(card)

        let img = document.createElement('img')
        img.setAttribute('src', movies[i].imageUrl)
        img.setAttribute('alt', movies[i].title)
        img.className = 'card__img'
        card.appendChild(img)

        var title = document.createElement('h3')
        title.className = "card__title"
        title.textContent = movies[i].title
        card.appendChild(title)

        var p = document.createElement('p')
        p.className = 'card__description_id'
        p.textContent = 'id: ' + movies[i].id
        card.appendChild(p)

        var year = document.createElement('p')
        year.className = 'card__description'
        year.innerHTML = `<span>Year:</span> ${movies[i].year}`
        card.appendChild(year)

        var genres = document.createElement('p')
        genres.className = 'card__description'
        genres.innerHTML = `<span>Genres:</span> ${movies[i].genres}`
        card.appendChild(genres)

        var director = document.createElement('p')
        director.className = 'card__description'
        director.innerHTML = `<span>Director:</span> ${movies[i].director}`
        card.appendChild(director)

        var actors = document.createElement('p')
        actors.className = 'card__description'
        actors.innerHTML = `<span>Actors:</span> ${movies[i].actors}`
        card.appendChild(actors)

        var description = document.createElement('p')
        description.className = 'card__description'
        description.innerHTML = `<span>Description:</span> ${movies[i].description}`
        card.appendChild(description)
    
}

// moviesEl()

//<div class="card" >
//    <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg" alt="" class="card__img">
//    <h3 class="card__title">title</h3>
//    <p class="card__description__id">001</p>
//    <p class="card__description"> Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page</p>
//</div>
