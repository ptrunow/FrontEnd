// Utworzenie zmiennych do obsługi komunikatu powitania.
var greeting = 'Witaj, ';
var name = 'Janku!';
var message = ' Proszę sprawdź zamówienie:';
//Połączenie powyższych zmiennych w celu utworzenia ostatecznego komunikatu.
var welcome = greeting + name + message;

//Utworzenie zmiennych do obsługi szczegółów związanych z tabliczką.
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;



//Pobranie elementu, którego wartocią atrybutu id jest greeting.
var el = document.getElementById('greeting');
//Zastąpienie wartości tego elementu spersonalizowanym komunikatem powitania.
el.textContent = welcome;



//Pobranie elementu, którego wartocią atrybutu id jest userSign a następnie uaktualnienie jego zawartości.
var elSign = document.getElementById('userSign');
elSign.textContent = sign;


//Pobranie elementu, którego wartocią atrybutu id jest tiles a następnie uaktualnienie jego zawartości.
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;


//Pobranie elementu, którego wartocią atrybutu id jest subTotal a następnie uaktualnienie jego zawartości.
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = subTotal +' zł';


//Pobranie elementu, którego wartocią atrybutu id jest shipping a następnie uaktualnienie jego zawartości.
var elShipping = document.getElementById('shipping');
elShipping.textContent = shipping + ' zł';

//Pobranie elementu, którego wartocią atrybutu id jest grandTotal a następnie uaktualnienie jego zawartości.
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = grandTotal + ' zł';