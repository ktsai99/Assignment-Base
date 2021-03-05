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
    // Workaround to prevent empty search bar from displaying the entire array
    if(event.target.value === "")
    {
        suggestions.innerHTML = "";
        return;
    }

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
const form = document.querySelector(".search-form");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change",(evt) => {evt.preventDefault();displayMatches(evt)});
searchInput.addEventListener("keyup",(evt) => {evt.preventDefault();displayMatches(evt) });
}

window.onload = windowActions;