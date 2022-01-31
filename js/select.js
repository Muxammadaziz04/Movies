var arrGenres = [] // janrlar push boladigan massiv


// movies da bor xamma janrlarni saralab olindi
for(let i=0; i<movies.length; i++){
    for(let j=0; j<movies[i].genres.length; j++)
    if(arrGenres.includes(movies[i].genres[j])){
        continue;
    }
    else{
        arrGenres.push(movies[i].genres[j])
    }
}

console.log(arrGenres);


// Xamma janrlarga option qoshildi
for(let i=0; i<arrGenres.length; i++){
    let optionGenres = document.createElement('option')
    optionGenres.textContent = arrGenres[i]
    optionAll.className = 'option'
    optionGenres.setAttribute('value', arrGenres[i])
    selectGenres.appendChild(optionGenres)
}


// Selectda tanlangan janrdgi film render qilindi
 selectGenres.addEventListener('change', function(){
    section.innerHTML = '' //Section bloki tozalanib tanlangan janrdagi kinolar render qilinadi
    searchInput.value = '' //search input valuesi tozalandi
    movies.forEach(item => {
        if(selectGenres.value == 'all'){
            element = item
            renderMovies()
        } 
        if(item.genres.includes(selectGenres.value)){
            element = item
            renderMovies()
        }
    })
})
