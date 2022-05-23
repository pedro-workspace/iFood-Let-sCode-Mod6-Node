// const fetch = require('node-fetch');
import fetch from 'node-fetch';

const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

const pokedex = await fetch(url).then((resp) => resp.json()).catch(console.log('Error ocurred'));

console.log(pokedex);

const nUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=302&limit=302'

const pokedex_2 = await fetch(url).then((resp) => resp.json()).catch(console.log('Error ocurred'));

console.log(pokedex_2);