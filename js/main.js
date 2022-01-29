// Container block yaratildi
var container = document.createElement('div')
container.className = 'container'
document.body.prepend(container)

// Menu title 
var h1 = document.createElement('h1')
h1.className = 'h1'
h1.textContent = 'Movies'
container.appendChild(h1)

//Filmlar render qilinadigan section blocki yaratildi
var section = document.createElement('div')
section.className = 'section'
container.appendChild(section)

let categories = document.createElement('div')
categories.className = 'categories'
h1.after(categories)

// Select elementi yaratildi
var selectGenres = document.createElement('select')
selectGenres.setAttribute('value', 'all')
selectGenres.className = 'select'
categories.appendChild(selectGenres)

// Selectga "All genres" optioni qoshildi va selected qilindi
var optionAll = document.createElement('option')
optionAll.textContent = 'All genres'
optionAll.setAttribute('value', 'all')
optionAll.setAttribute('selected', 'selected')
optionAll.className = 'option'
selectGenres.prepend(optionAll)

// Input search yaratildi
var searchInput = document.createElement('input')
searchInput.setAttribute('type', 'search')
searchInput.className = 'searchInput'
categories.appendChild(searchInput)

var YearsBlock = document.createElement('div')
categories.after(YearsBlock)

var searchYears = document.createElement('select')
searchYears.className = 'select'
YearsBlock.appendChild(searchYears)

var optionAllYears = document.createElement('option')
optionAllYears.textContent = 'All years'
optionAllYears.setAttribute('value', 'allYears')
optionAllYears.setAttribute('selected', 'selected')
optionAllYears.className = 'option'
searchYears.prepend(optionAllYears)

// Xamma kinolarni render qiladigan funktsiya
function moviesEl(){
        // Card elementi
        let card = document.createElement('div');
        card.className = "card"
        section.appendChild(card)

        // Cardga img elemeti yartilib appendChild qilindi
        let img = document.createElement('img')
        img.setAttribute('src', movies[i].imageUrl)
        img.setAttribute('alt', movies[i].title)
        img.className = 'card__img'
        card.appendChild(img)

        // Cardga kinoni nomi appandChild qilindi
        var title = document.createElement('h3')
        title.className = "card__title"
        title.textContent = movies[i].title
        card.appendChild(title)

        // Cardga kinoni idsi appandChild qilindi
        var p = document.createElement('p')
        p.className = 'card__description_id'
        p.textContent = 'id: ' + movies[i].id
        card.appendChild(p)

        // // Cardga kinoni yili appandChild qilindi
        var year = document.createElement('p')
        year.className = 'card__description'
        year.innerHTML = `<span>Year:</span> ${movies[i].year}`
        card.appendChild(year)

        // Cardga kinoni janrlari appandChild qilindi
        var genres = document.createElement('p')
        genres.className = 'card__description'
        genres.innerHTML = `<span>Genres:</span> ${movies[i].genres}`
        card.appendChild(genres)

        // Cardga kinoni direktori appandChild qilindi
        var director = document.createElement('p')
        director.className = 'card__description'
        director.innerHTML = `<span>Director:</span> ${movies[i].director}`
        card.appendChild(director)

        // Cardga kinoni aktyorlari appandChild qilindi
        var actors = document.createElement('p')
        actors.className = 'card__description'
        actors.innerHTML = `<span>Actors:</span> ${movies[i].actors}`
        card.appendChild(actors)

        // Cardga kinoni xaqidagi description appandChild qilindi
        var description = document.createElement('p')
        description.className = 'card__description'
        description.innerHTML = `<span>Description:</span> ${movies[i].description}`
        card.appendChild(description)
    
}


//<div class="card" >
//    <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg" alt="" class="card__img">
//    <h3 class="card__title">title</h3>
//    <p class="card__description__id">001</p>
//    <p class="card__description"><span>Year:</span> 1988</p>
//    <p class="card__description"><span>Genres:</span> Comedy, Fantasy</p>
//    <p class="card__description"><span>Director:</span> Tim Burton</p>
//    <p class="card__description"><span>Actors:</span> Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page</p>
//    <p class="card__description"><span>Description:</span> A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.</p>
//</div>