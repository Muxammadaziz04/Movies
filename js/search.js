// Kinolar qidiradigan funktsiya
function searchMovies(){
    // let filterMovies = [] //Qidirilgan kinolarni indeksi push boladigan massiv

    // movies.forEach(function(elem, index){
    //     let moviesTitle = elem.title.toLowerCase() //Kinolar nomi pastki registirga otkazildi
    //     let moviesDecsription = elem.description.toLowerCase() //Kinolar descriptioni pastki registirga otkazildi
    //     let searchValue = searchInput.value.toLowerCase() //Search inputdagi tekst pastki registirga okazildi
        
    //     //Qididrilgan tekst Kinoni nomi yoki descriptiondiga bolsa usha kinoni indeksi filterMovies ga push qilinadi    
    //     if(moviesTitle.includes(searchValue) || moviesDecsription.includes(searchValue)){
    //         filterMovies.push(index)
    //     }
    // })

    // console.log(filterMovies);
    
    // //Xar klaviatura bosilganda section blocki tozalanib faqat qidirilgan kinolar render qilinadi
    // section.innerHTML = ''

    // // Agar search input bosh bolsa sectionda "Movie not found" teksti chiqarilaid
    // if(filterMovies.length === 0){        
    //     let notFound = document.createElement('p')
    //     notFound.textContent = 'Movie not found'
    //     section.appendChild(notFound)
    // }
    // else{
    //     filterMovies.forEach((elem) => {
    //         i = elem
    //         moviesEl()
    // })
    // }
    section.innerHTML = ''
    movies.forEach(item => {
        let moviesTitle = item.title.toLowerCase()
        let moviesDecsription = item.description.toLowerCase()
        let searchValue = searchInput.value.toLowerCase()
        if(moviesTitle.includes(searchValue) || moviesDecsription.includes(searchValue)){
            element = item
            renderMovies()
        }
    });
    if(section.innerHTML === ''){
        let notFound = document.createElement('p')
        notFound.textContent = 'Movie not found'
        section.appendChild(notFound)
    }
}

searchInput.addEventListener('keyup', searchMovies)