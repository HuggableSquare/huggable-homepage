// Defaults init
if (localStorage.getItem('clockSetting') === null) localStorage.setItem('clockSetting', true);
if (localStorage.getItem('dateSetting') === null) localStorage.setItem('dateSetting', true);
if (localStorage.getItem('linkSetting') === null) localStorage.setItem('linkSetting', true);
if (localStorage.getItem('hourSetting') === null) localStorage.setItem('hourSetting', true);
if (localStorage.getItem('loveSetting') === null) localStorage.setItem('loveSetting', true);

$(document).ready(function () {
  // Using jQuery's toggle function to display items based on localStorage
  // JSON.parse is necessary because browsers don't support booleans
  // in localStorage (for some reason >.>)

  var $clock = $('#clock');
  var $date = $('#date');
  var $links = $('#links');
  var $meridiem = $('#meridiem');
  var $hours12 = $('#hours12');
  var $hours24 = $('#hours24');
  var $made1 = $('#made1');
  var $made2 = $('#made2');

  // clockSetting
  $clock.toggle(JSON.parse(localStorage.clockSetting));

  // dateSetting
  $date.toggle(JSON.parse(localStorage.dateSetting));

  // linkSetting
  $links.toggle(JSON.parse(localStorage.linkSetting));

  // hourSetting
  $meridiem.toggle(JSON.parse(localStorage.hourSetting));

  // loveSetting
  $made1.toggle(JSON.parse(localStorage.loveSetting));
  $made2.toggle(JSON.parse(localStorage.loveSetting));

  // Click functions
  $('#clockSetting').click(function () {
    localStorage.clockSetting = !JSON.parse(localStorage.clockSetting);

    $clock.toggle(JSON.parse(localStorage.clockSetting));
    if (JSON.parse(localStorage.clockSetting)) setTime();
  });

  $('#dateSetting').click(function () {
    localStorage.dateSetting = !JSON.parse(localStorage.dateSetting);

    $date.toggle(JSON.parse(localStorage.dateSetting));
  });

  $('#linkSetting').click(function () {
    localStorage.linkSetting = !JSON.parse(localStorage.linkSetting);

    $links.toggle(JSON.parse(localStorage.linkSetting));
  });

  $('#clock').click(function () {
    localStorage.hourSetting = !JSON.parse(localStorage.hourSetting);

    $meridiem.toggle(JSON.parse(localStorage.hourSetting));
    setTime();
  });

  $('#loveSetting').click(function () {
    localStorage.loveSetting = !JSON.parse(localStorage.loveSetting);

    $made1.toggle(JSON.parse(localStorage.loveSetting));
    $made2.toggle(JSON.parse(localStorage.loveSetting));
  });
});
