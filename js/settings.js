// Makes sure script doesn't execute before page is loaded
window.onload = function () {
  var clockSettingId = document.getElementById('clockSetting');
  var clock = document.getElementById('clock');
  
  var dateSettingId = document.getElementById('dateSetting');
  var date = document.getElementById('Date');

  // Checks stored data on page load
  if (localStorage.clockSetting == 0) {
    clock.style.display = 'none';
  }
  if (localStorage.dateSetting == 0) {
    date.style.display = 'none';
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
      localStorage.dateSetting = 0;
    } else {
      date.style.display = 'inline-block';
      localStorage.dateSetting = 1;
    }
  };
};
