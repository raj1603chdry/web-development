/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-27T21:27:58+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c01.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-27T22:07:21+05:30
 * @Copyright: Raj Choudhary
 */

/*
  This script displays a greeting message in the document based on the current time.
*/

var today = new Date(); // creating a new Date object
var hourNow = today.getHours(); //  storing the current hour from the Date object
var greeting;

//  Displaying the message based on the current time
if(hourNow > 18) {
  greeting = 'Good Evening!';
} else if(hourNow > 12) {
  greeting = 'Good Afternoon!';
} else if(hourNow > 0) {
  greeting = 'Good Morning!';
} else {
  greeting = 'Welcome';
}

document.write('<h3>' + greeting + '</h3>');
