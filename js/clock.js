function setTime () {
  var date = new Date();
  var minutes = date.getMinutes();
  var hours = date.getHours();
  // Add a leading zero to the minutes value
  document.getElementById('min').textContent = (minutes < 10 ? '0' : '') + minutes;

  if (JSON.parse(localStorage.hourSetting)) {
    document.getElementById('meridiem').textContent = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12 hour clock
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours === 0 ? 12 : hours;
  }
  document.getElementById('hours').textContent = (hours < 10 ? '0' : '') + hours;
}

document.addEventListener('DOMContentLoaded', function() {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var newDate = new Date();
  // Output the day, date, month and year   
  document.getElementById('date').textContent = `${days[newDate.getDay()]} ${months[newDate.getMonth()]} ${newDate.getDate()}, ${newDate.getFullYear()}`;
  // Set the time immediately
  setTime();

  // Reset the time every second
  setInterval(function() {
    // don't set time if the clock isn't even visible
    if (JSON.parse(localStorage.clockSetting)) setTime();
  }, 1000);
});
