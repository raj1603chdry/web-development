/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-28T18:05:11+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c03_@.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-28T18:16:45+05:30
 * @Copyright: Raj Choudhary
 */


// setting up the object
var hotel = {
  name: 'Quay',
  rooms: 40,
  booked: 25,
  checkAvailability: function() {
    return this.rooms - this.booked;
  }
};

var elHotelName = document.getElementById('hotelName');
var elRooms = document.getElementById('rooms');

elHotelName.textContent = hotel.name;
elRooms.textContent = hotel.checkAvailability();
