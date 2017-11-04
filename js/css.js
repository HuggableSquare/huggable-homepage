document.addEventListener('DOMContentLoaded', function() {
  // insert custom css
  let css = localStorage.getItem('css');
  if (css) {
    let style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.textContent = css;
    document.head.appendChild(style);
  }

  // background
  let background = localStorage.getItem('background');
  if (background) {
    document.documentElement.style.backgroundImage = `url(${background})`;
  }
});
