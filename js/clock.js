$(document).ready(function () {
  // Create two variable with the names of the months and days in an array
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Create a newDate() object
  var newDate = new Date();
  // Extract the current date from Date object
  newDate.setDate(newDate.getDate());
  // Output the day, date, month and year   
  $('#Date').html(dayNames[newDate.getDay()] + " " + monthNames[newDate.getMonth()] + ' ' + newDate.getDate() + ', ' + newDate.getFullYear());

  setInterval(function () {
    // Create a newDate() object and extract the minutes of the current time on the visitor's
    var minutes = new Date().getMinutes();
    // Add a leading zero to the minutes value
    $("#min").html((minutes < 10 ? "0" : "") + minutes);
  }, 1000);
	
  setInterval(function () {
    // Create a newDate() object and extract the hours of the current time on the visitor's
    var hours = new Date().getHours();
    // Convert to 12 hour clock
    $("#meridiem").html((hours > 12 ? "PM" : "AM"));
    var hours12 = hours > 12 ? hours - 12 : hours;
    // Add a leading zero to the hours value
    $("#hours12").html((hours12 < 10 ? "0" : "") + hours12);
    $("#hours24").html((hours < 10 ? "0" : "") + hours);
  }, 1000);
});
