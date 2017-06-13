document.addEventListener('DOMContentLoaded', function() {
  let links = JSON.stringify(JSON.parse(localStorage.getItem('links')), null, 2);
  document.getElementById('links').value = links;

  document.getElementById('save').addEventListener('click', function () {
    document.getElementById('save').blur();
    localStorage.setItem('links', JSON.stringify(JSON.parse(document.getElementById('links').value)));
  });

  document.getElementById('export').addEventListener('click', function () {
    document.getElementById('export').blur();
    let a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([document.getElementById('links').value], { type : 'application/json' }));
    a.download = 'links_export.json';
    a.click();
  });
});
