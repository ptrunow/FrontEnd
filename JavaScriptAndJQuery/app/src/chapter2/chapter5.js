
var colors;
colors = ['biały', 'czarny', 'czerwony', 'inny'];

var el = document.getElementById('colors');
el.textContent = colors[1];



// Uaktualnienie trzeciego elementu tablicy.

// Utworzenie tablicy.
var colors;
colors = ['biały', 'czarny', 'inny'];

// Uaktualnienie trzeciego elementu tablicy.
colors[2] = 'beżowy';

// Pobranie elementu, którego wartością atrybutu id jest colors.
var el = document.getElementById('colors');

// Wywołanie elementu tablicy
el.textContent = colors[2];