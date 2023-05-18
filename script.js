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
const buttons = document.createElement('div');
buttons.setAttribute('id', 'buttons');
body.appendChild(buttons);

// Requisito 4.1
const button = document.createElement('button');
button.setAttribute('id', 'button-random-color');
button.innerText = 'Cores aleatórias';
buttons.appendChild(button);

// Requisito 4.3
const btn = document.querySelector('#button-random-color');
const colors = document.querySelectorAll('.color');

const randomColor = () => {
  let cor = [];
  for (let index = 1; index < colors.length; index += 1) {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    const randomRGB = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    cor.push((colors[index].style.backgroundColor = randomRGB));
  }
  localStorage.setItem('colorPalette', JSON.stringify(cor));
};

btn.addEventListener('click', () => {
  randomColor();
});

// Requisito 5
const devolveCor = () => {
  const teste1 = JSON.parse(localStorage.getItem('colorPalette'));
  if (teste1 === null) {
    return colorPalette;
  }

  for (let index = 1; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = teste1[index - 1];
  }
};

// Requisito 6.1-2
const board = document.createElement('div');
board.setAttribute('id', 'pixel-board');
body.appendChild(board);

const row = (n) => {
  for (let index = 0; index < n; index += 1) {
    const pixels = document.createElement('div');
    pixels.classList.add('pixel');
    pixels.style.backgroundColor = 'white';
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

// Requisito 10
for (let index1 = 0; index1 < colors.length; index1 += 1) {
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);
  const randomRGB = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  if (colors[index1] === colors[0]) {
    colors[index1].style.backgroundColor = 'black';
  } else {
    colors[index1].style.backgroundColor = randomRGB;
  }
}

const pixelsBoard = document.querySelector('#pixel-board');

pixelsBoard.addEventListener('click', (event) => {
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].classList.contains('selected')) {
      event.target.style.backgroundColor = colors[index].style.backgroundColor;
    }
  }
});

// Requisito 11
const clearBtn = document.createElement('button');
clearBtn.setAttribute('id', 'clear-board');
clearBtn.innerText = 'Limpar';
buttons.appendChild(clearBtn);
const allPixels = document.getElementsByClassName('pixel');

clearBtn.addEventListener('click', () => {
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].style.backgroundColor = 'white';
  }
});
console.log(allPixels);
column(5);
window.onload = function () {
  devolveCor();
};
