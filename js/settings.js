$(document).ready(function () {
  var clockSettingId = document.getElementById('clockSetting');
  var clock = document.getElementById('clock');
  
  var dateSettingId = document.getElementById('dateSetting');
  var date = document.getElementById('Date');
  var dateSpace = document.getElementById('datespacefix');
  
  var hourSettingId = document.getElementById('clock');
  var meridiem = document.getElementById('meridiem');
  var hours12 = document.getElementById('hours12');
  var hours24 = document.getElementById('hours24');

  hours24.style.display = 'none';
  
  // Checks stored data on page load
  if (localStorage.clockSetting == 0) {
    clock.style.display = 'none';
  } if (localStorage.dateSetting == 0) {
    date.style.display = 'none';
	dateSpace.style.display = 'none';
  } if (localStorage.hourSetting == 0) {
    meridiem.style.display = 'none';
    hours12.style.display = 'none';
    hours24.style.display = 'inline-block';
  }
  
  // OnClick functions
  clockSettingId.onclick = function () {
    // Creates local stored variable
    localStorage.setItem("clockSetting", 1);
    if (clock.style.display !== 'none') {
      clock.style.display = 'none';
      localStorage.clockSetting = 0;
    } else {
      clock.style.display = 'inline-block';
      localStorage.clockSetting = 1;
    }
  };

  dateSettingId.onclick = function () {
    // Creates local stored variable
    localStorage.setItem("dateSetting", 1);
    if (date.style.display !== 'none') {
      date.style.display = 'none';
	  dateSpace.style.display = 'none';
      localStorage.dateSetting = 0;
    } else {
	  dateSpace.style.display = 'block';
      date.style.display = 'block';
      localStorage.dateSetting = 1;
    }
  };
  
  hourSettingId.onclick = function () {
    localStorage.setItem("hourSetting", 1);
    if (meridiem.style.display !== 'none') {
      meridiem.style.display = 'none';
      hours12.style.display = 'none';
      hours24.style.display = 'inline-block';
      localStorage.hourSetting = 0;
    } else {
      meridiem.style.display = 'inline-block';
      hours12.style.display = 'inline-block';
      hours24.style.display = 'none';
      localStorage.hourSetting = 1;
    }
  };
});