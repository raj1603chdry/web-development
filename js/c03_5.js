/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-28T21:08:16+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c03_5.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-28T22:06:14+05:30
 * @Copyright: Raj Choudhary
 */


// defining the object
var hotel = {
  name: 'Park',
  rooms: 120,
  booked: 77
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

elPool = document.getElementById('pool');
elGym = document.getElementById('gym');
elHotelName = document.getElementById('hotelName');

elHotelName.textContent = hotel.name;
elPool.className = hotel.pool;
elGym.className = hotel.gym;
