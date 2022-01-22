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

// Movies html ga render qilindi
for( i=0; i<movies.length; i++){
    moviesEl() //moviesEl() funktsiyasi main.js da
}


// Selectda tanlangan janrdgi film render qilindi
 selectGenres.addEventListener('change', function(){
    section.innerHTML = '' //Section bloki tozalanib tanlangan janrdagi kinolar render qilinadi
    searchInput.value = '' //search input valuesi tozalandi
    for( i=0; i<movies.length; i++){
        if(selectGenres.value == 'all'){
            moviesEl()
        }
        for( j=0; j<movies[i].genres.length; j++)
        if(movies[i].genres[j] == selectGenres.value){
           moviesEl()
        }
        else{
           continue;
        }
    }
    
})
