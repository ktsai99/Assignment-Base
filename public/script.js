"use strict";

const endpoint = "/api";

let cities = [];

fetch(endpoint,{method: 'post'})
    .then(blob => blob.json())
    .then(data => cities.push(...data))
    .then(console.log(cities));
