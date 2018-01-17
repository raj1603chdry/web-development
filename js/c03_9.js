/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-28T23:25:37+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c03_9.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-28T23:51:09+05:30
 * @Copyright: Raj Choudhary
 */


/*
Using immediately invoked function expression to help from scope of
variables
*/

(function() {

  /* PART ONE HOTEL DETAILS */
  var hotel = {
    name: 'Park',
    roomRate: 240,
    discount: 15,
    offerPrice: function() {
      var offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    }
  };

  var hotelName, roomRate, specialRate;

  hotelName = document.getElementById('hotelName');
  roomRate = document.getElementById('roomRate');
  specialRate = document.getElementById('specialRate');

  hotelName.textContent = hotel.name;
  roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
  specialRate.textContent = '$' + hotel.offerPrice();

  /* PART TWO OFFER DETAILS */
  var expiryMsg;
  var today;
  var elEnds;

  function offerExpires(today) {
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    expiryMsg = 'The offer expires next ';
    expiryMsg += day + '<br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
  }

  today = new Date();
  elEnds = document.getElementById('offerEnds');
  elEnds.innerHTML = offerExpires(today);

}());
