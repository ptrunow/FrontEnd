var today = new Date();				// Utworzenie nowego obiektu daty.
var hourNow = today.getHours();		// Ustalenie aktualnej godziny.
var greeting;


//Wyświetlenie odpowiedniego tekstu powitania na podstawie aktualnej godziny.
if (hourNow > 18) {
	greeting = 'Dobry Wieczór!';
} else if (hourNow > 8) {
	greeting = 'Dzień Dobry!';
} else if (hourNow > 0) {
	greeting = 'Dzień dobry!';
} else {
	greeting = 'Witamy!';
}

document.write('<h3>' + greeting + '</h3>');