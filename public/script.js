"use strict";

const endpoint = "/api";

let cities = [];

fetch(endpoint,{method: 'post'})
    .then(blob => blob.json())
    .then(data => cities.push(...data))
    .then(console.log(cities));


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
    //const match
    console.log(this.value);
}

const searchInput = document.querySelector(".search");
searchInput.addEventListener("change",displayMatches);
searchInput.addEventListener("keyup",displayMatches);