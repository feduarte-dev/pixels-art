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

// Requisito 4.1
const button = document.createElement('button');
button.setAttribute('id', 'button-random-color');
button.innerText = 'Cores aleatórias';
body.appendChild(button);

// Requisito 4.3
const btn = document.querySelector('#button-random-color');
const colors = document.querySelectorAll('.color');

btn.addEventListener('click', () => {
  for (let index = 1; index < colors.length; index += 1) {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    const randomRGB = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    colors[index].style.backgroundColor = randomRGB;
  }
});

console.log(body);
