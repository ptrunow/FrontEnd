var username;		// Imię
var message;		// Wiadomość

// Przypisanie wartości do zmiennych
username = 'Marta';
message = 'Zapoznaj się z naszym asortymentem';

// 
var elName = document.getElementById('name');
elName.textContent = username;
var elNote = document.getElementById('note');
elNote.textContent = message;