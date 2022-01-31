var years = []

movies.forEach(element => {
    if(!years.includes(element.year)){
        years.push(element.year)
    }
});

years.sort((a, b) =>{
    return a-b
})

console.log(years);

years.forEach(element=>{
    let optionYear = document.createElement('option')
    optionYear.setAttribute('value', `${element}`)
    optionYear.textContent = `${element}`
    optionYear.className = 'option'
    searchYears.appendChild(optionYear)
})


searchYears.addEventListener('change', ()=>{
    section.innerHTML = ''
    movies.forEach(item =>{
        if(searchYears.value == 'allYears'){
            element = item
            renderMovies()
        }
        if(searchYears.value == item.year){
            element = item
            renderMovies()
        }
    })
})