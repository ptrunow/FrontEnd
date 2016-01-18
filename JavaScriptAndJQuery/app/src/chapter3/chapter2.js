// Set up the object
var hotel = {
  name : 'Quay',
  rooms : 1000,
  booked : 25,
  checkAvailability : function() {
    return this.rooms - this.booked; 
  }
};

var elName = document.getElementById('hotelName'); 
elName.textContent = hotel.name;                 

var elRooms = document.getElementById('rooms'); 
elRooms.textContent = hotel.checkAvailability();   
