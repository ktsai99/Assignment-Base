"use strict";

const endpoint = "/api";

let cities = [];

fetch(endpoint,{method: 'post'})
    .then(blob => blob.json())
    .then(data => cities.push(...data))
    //.then(console.log(cities));


function findMatches(wordToMatch, cities)
{
    return cities.filter(place => 
    {
        const regex = new RegExp(wordToMatch,"gi");
        return place.zip.match(regex) || place.name.match(regex) || place.type.match(regex);
    });
}

function displayMatches()
{
    const matchArray = findMatches(this.value,cities);
    const html = matchArray.map(place => 
    {
        return `
            <li>
            <span class="name">${place.name}, ${place.zip}</span>
            </li>
        `;
    }).join('');

    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change",displayMatches);
searchInput.addEventListener("keyup",displayMatches);