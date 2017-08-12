document.addEventListener('DOMContentLoaded', function() {
  // links
  let links = JSON.stringify(JSON.parse(localStorage.getItem('links')), null, 2);
  document.getElementById('links').value = links;

  document.getElementById('links-save').addEventListener('click', () => {
    document.getElementById('links-save').blur();
    localStorage.setItem('links', JSON.stringify(JSON.parse(document.getElementById('links').value)));
  });

  document.getElementById('links-export').addEventListener('click', () => {
    document.getElementById('links-export').blur();
    let a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([document.getElementById('links').value], { type : 'application/json' }));
    a.download = 'links_export.json';
    a.click();
  });

  // css
  document.getElementById('css').value = localStorage.getItem('css');

  document.getElementById('css-save').addEventListener('click', () => {
    document.getElementById('css-save').blur();
    localStorage.setItem('css', document.getElementById('css').value);
    location.reload();
  });

  document.getElementById('css-export').addEventListener('click', () => {
    document.getElementById('css-export').blur();
    let a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([document.getElementById('css').value], { type : 'text/css' }));
    a.download = 'custom_css_export.css';
    a.click();
  });

  // background
  document.getElementById('background').addEventListener('change', () => {
    let file = document.getElementById('background').files[0];
    if (file) {
      let reader = new FileReader();
      reader.addEventListener('load', (event) => {
        localStorage.setItem('background', event.target.result);
        document.documentElement.style.backgroundImage = `url(${event.target.result})`;
      });
      reader.readAsDataURL(document.getElementById('background').files[0]);
    }
  });
});
