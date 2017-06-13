// Defaults init
if (localStorage.getItem('clockSetting') === null) localStorage.setItem('clockSetting', true);
if (localStorage.getItem('dateSetting') === null) localStorage.setItem('dateSetting', true);
if (localStorage.getItem('linkSetting') === null) localStorage.setItem('linkSetting', true);
if (localStorage.getItem('hourSetting') === null) localStorage.setItem('hourSetting', true);
if (localStorage.getItem('loveSetting') === null) localStorage.setItem('loveSetting', true);

function toggle(id, visible) {
  let el = document.getElementById(id);
  if (visible) {
    el.style.display = '';
  } else {
    el.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // dynamically generating links
  let links = JSON.parse(localStorage.getItem('links'));
  let html = '';
  for (let x in links) {
    html += `<span class="parent"><label class="btn hvr-float">${x} <i class="fa fa-sort"></i></label><span class="child">`;
    for (let y in links[x]) {
      html += `<a href="${links[x][y]}" class="btn">${y}</a>&nbsp;`;
    }
    html += '</span></span>&nbsp;';
  }
  document.getElementById('links').innerHTML = html;

  // JSON.parse is necessary because browsers don't support booleans
  // in localStorage (for some reason >.>)

  // clockSetting
  toggle('clock', JSON.parse(localStorage.clockSetting));

  // dateSetting
  toggle('date', JSON.parse(localStorage.dateSetting));

  // linkSetting
  toggle('links', JSON.parse(localStorage.linkSetting));

  // hourSetting
  toggle('meridiem', JSON.parse(localStorage.hourSetting));

  // loveSetting
  toggle('made1', JSON.parse(localStorage.loveSetting));
  toggle('made2', JSON.parse(localStorage.loveSetting));

  // Click functions
  document.getElementById('clockSetting').addEventListener('click', function () {
    localStorage.clockSetting = !JSON.parse(localStorage.clockSetting);

    toggle('clock', JSON.parse(localStorage.clockSetting));
    if (JSON.parse(localStorage.clockSetting)) setTime();
  });

  document.getElementById('dateSetting').addEventListener('click', function () {
    localStorage.dateSetting = !JSON.parse(localStorage.dateSetting);

    toggle('date', JSON.parse(localStorage.dateSetting));
  });

  document.getElementById('linkSetting').addEventListener('click', function () {
    localStorage.linkSetting = !JSON.parse(localStorage.linkSetting);

    toggle('links', JSON.parse(localStorage.linkSetting));
  });

  document.getElementById('clock').addEventListener('click', function () {
    localStorage.hourSetting = !JSON.parse(localStorage.hourSetting);

    toggle('meridiem', JSON.parse(localStorage.hourSetting));
    setTime();
  });

  document.getElementById('loveSetting').addEventListener('click', function () {
    localStorage.loveSetting = !JSON.parse(localStorage.loveSetting);

    toggle('made1', JSON.parse(localStorage.loveSetting));
    toggle('made2', JSON.parse(localStorage.loveSetting));
  });
});
