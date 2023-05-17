const body = document.querySelector('body');

// Requisito 2.1
const div = document.createElement('div');
div.setAttribute('id', 'color-palette');
body.appendChild(div);

const colorPalette = document.querySelector('#color-palette');

for (let index = 0; index < 4; index += 1) {
  const color = document.createElement('div');
  color.classList.add('color');
  colorPalette.appendChild(color);
}

console.log(colorPalette);
