// Przypisanie wartości do zmienniej
var msg = 'Zapisz się do naszego newslettera, a otrzymasz 10% rabatu!';

// Zapisanie funkcji updateMessage
function updateMessage() {
	// Znalezienie elementu o id message i przypisanie go do zmiennej el
	var el = document.getElementById('message');
	// Uaktualnienie treści elementu o id message
	el.textContent = msg;
}

// Wywołanie funkcji updateMessage
updateMessage();