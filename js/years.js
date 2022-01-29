var years = []

movies.forEach(element => {
    let movieYear = element.year
    if(!years.includes(movieYear)){
        years.push(element.year)
    }
});

years.sort((a, b) =>{
    return a-b
})


years.forEach(element=>{
    let optionYear = document.createElement('option')
    optionYear.setAttribute('value', `${element}`)
    optionYear.textContent = `${element}`
    optionYear.className = 'option'
    searchYears.appendChild(optionYear)
})


searchYears.addEventListener('change', ()=>{
    section.innerHTML = ''
    movies.forEach((element, index)=>{
        if(searchYears.value == 'allYears'){
            i = index
            moviesEl()
        }
        else if(element.year == searchYears.value){
            i = index 
            moviesEl()
        }
    })
})