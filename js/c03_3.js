/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-28T18:32:52+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c03_3.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-28T18:40:57+05:30
 * @Copyright: Raj Choudhary
 */


var hotel = new Object();

hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function() {
  return this.rooms - this.booked;
};

var elHotelName = document.getElementById('hotelName');
var elRooms = document.getElementById('rooms');

elHotelName.textContent = hotel.name;
elRooms.textContent = hotel.checkAvailability();
