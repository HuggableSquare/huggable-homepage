$(document).ready(function () {
  let links = JSON.stringify(JSON.parse(localStorage.getItem('links')), null, 2);
  $('#links').val(links);
  $('#save').click(function () {
    $('#save').blur();
    localStorage.setItem('links', JSON.stringify(JSON.parse($('#links').val())));
  });
  $('#export').click(function () {
    $('#export').blur();
    let a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([$('#links').val()], { type : 'application/json' }));
    a.download = 'links_export.json';
    a.click();
  });
});
