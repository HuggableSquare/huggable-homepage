$(document).ready(function () {
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function setTime () {
    var date = new Date();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    // Add a leading zero to the minutes value
    $('#min').html((minutes < 10 ? '0' : '') + minutes);
    // Convert to 12 hour clock
    $('#meridiem').html((hours >= 12 ? 'PM' : 'AM'));
    var hours12 = hours > 12 ? hours - 12 : hours;
    hours12 = hours == 0 ? 12 : hours12;
    // Add a leading zero to the hours value
    $('#hours12').html((hours12 < 10 ? '0' : '') + hours12);
    $('#hours24').html((hours < 10 ? '0' : '') + hours);
  }

  var newDate = new Date();
  // Extract the current date from Date object
  newDate.setDate(newDate.getDate());
  // Output the day, date, month and year   
  $('#date').html(dayNames[newDate.getDay()] + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getDate() + ', ' + newDate.getFullYear());
  // Set the time immediately
  setTime();

  // Reset the time every second
  setInterval(function () {
    setTime();
  }, 1000);
});
