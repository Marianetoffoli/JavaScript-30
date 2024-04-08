const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const cities = []

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data))

function findMatches(WordToMatch, cities){
    return cities.filter(place => {
        
    const regex = new RegExp(wordToMatch, 'gi')
    return place.city.match(regex) || place.state.match(regex)
    })

}

function displayMatches() {
    const MacthArray = findMatches(this.value, cities)
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi')
        const stateName = place.city.replace(regex, `<span class"h1">${this.value}</span`)
        return `
        <li>
            <span class="name"${place.city}, ${place.state}></span>
            <span class="population">${place.pupolation}</span>
        <li>
        `
    }).join('')
    suggestions.innerHTML
}

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)


