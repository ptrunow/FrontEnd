// Utworzenie zmiennych
var ofertTitle;		// Tytuł
var ofertMessage;	// Wiadomość

// Przypisanie wartości do zmiennych
ofertTitle = "Oferta specjalna w Moly's";
ofertMessage = '<a href=\"sale.html\">Rabat 25%!</a>';

var elOfertTitle = document.getElementById('ofert-title');
elOfertTitle.innerHTML = ofertTitle;
var elOfertNote = document.getElementById('ofert-note');
elOfertNote.innerHTML = ofertMessage;