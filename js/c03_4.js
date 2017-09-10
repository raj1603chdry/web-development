/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-28T18:42:50+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c03_4.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-28T18:51:45+05:30
 * @Copyright: Raj Choudhary
 */


// defining template of the hotel object
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}

var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);

var details1 = quayHotel.name + ' rooms: ' + quayHotel.checkAvailability();
var details2 = parkHotel.name + ' rooms: ' + parkHotel.checkAvailability();

var elHotel1 = document.getElementById('hotel1');
var elHotel2 = document.getElementById('hotel2');

elHotel1.textContent = details1;
elHotel2.textContent = details2;
