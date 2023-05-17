const body = document.querySelector('body');

// Requisito 2.1
const colorSelect = document.createElement('div');
colorSelect.setAttribute('id', 'color-palette');
body.appendChild(colorSelect);

const colorPalette = document.querySelector('#color-palette');
for (let index = 0; index < 4; index += 1) {
  const color = document.createElement('div');
  color.classList.add('color');
  colorPalette.appendChild(color);
}

// Requisito 5

// Requisito 4.1
const button = document.createElement('button');
button.setAttribute('id', 'button-random-color');
button.innerText = 'Cores aleatórias';
body.appendChild(button);

// Requisito 4.3
const btn = document.querySelector('#button-random-color');
const colors = document.querySelectorAll('.color');

const randomColor = () => {
  for (let index = 1; index < colors.length; index += 1) {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    const randomRGB = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    colors[index].style.backgroundColor = randomRGB;
  }

  return colorPalette.innerHTML;
};

btn.addEventListener('click', () => {
  randomColor();
  localStorage.setItem('colorPalette', randomColor());
});

// colorPalette.innerHTML = localStorage.getItem('colorPalette');
// Onde coloco isso

// Requisito 6.1-2
const board = document.createElement('div');
board.setAttribute('id', 'pixel-board');
body.appendChild(board);

const row = (n) => {
  for (let index = 0; index < n; index += 1) {
    const pixels = document.createElement('div');
    pixels.classList.add('pixel');
    board.appendChild(pixels);
  }
};
const column = (n) => {
  for (let index = 0; index < n; index += 1) {
    const breakLine = document.createElement('br');
    board.appendChild(breakLine);
    row(n);
  }
};

// Requisito 8
colors[0].classList.add('selected');

colorPalette.addEventListener('click', (event) => {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
});

console.log(colors[0]);
column(5);
