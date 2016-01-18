// Zdefiniowanie nazw zmiennych
var price; 			// Cena
var quantity;		// Ilość
var total;			// Iloczyn

// Przypisanie wartości 
price = 5;
quantity = 14;
total = price * quantity;

// Wywołanie
var el = document.getElementById('cost');
el.textContent = total + ' zł';

