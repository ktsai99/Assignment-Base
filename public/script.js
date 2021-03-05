"use strict";

const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const endpoint = "/api";

let cities = [];

fetch(endpoint,{method: 'post',})
    .then(blob => blob.json())
    .then(data => cities.push(...data))
    .then(console.log(cities));
