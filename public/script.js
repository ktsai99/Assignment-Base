"use strict";
async function windowActions()
{
const endpoint = "/api";

const request = await fetch(endpoint,{method: 'post'});
const cities = await request.json();


function findMatches(wordToMatch, cities)
{
    return cities.filter(place => 
    {
        const regex = new RegExp(wordToMatch,"gi");
        return place.zip.match(regex) || place.name.match(regex) || place.type.match(regex);
    });
}

function displayMatches(event)
{
    const matchArray = findMatches(event.target.value,cities);
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

searchInput.addEventListener("change",(evt) => {displayMatches(evt) });
searchInput.addEventListener("keyup",(evt) => {displayMatches(evt) });
}

window.onload = windowActions;