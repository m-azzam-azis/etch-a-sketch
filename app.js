const container = document.querySelector('.container');
const containerSize = 640
container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;

function main() {
  createGrid(16);
  const button = document.querySelector('button');
  button.addEventListener('click', () => {

    gridSize = prompt('enter desired grid size (1-100)')
    if (gridSize < 1 || gridSize > 100) {
      alert('please enter an integer 1-100');
    } else {
      removeGrid();
      createGrid(gridSize);
    }
    
  });

}

function createGrid (gridSize) {
  for (let i = 0; i < gridSize; i++) {

    const gridRow = document.createElement('div');
    gridRow.style.height = `${containerSize/gridSize}px`;
    gridRow.classList.add('grid-row');

    for (let j = 0; j < gridSize; j++) {

      const gridBox = document.createElement('div');
      gridBox.style.width = `${containerSize/gridSize}px`;
      gridBox.classList.add('grid-box');

      gridRow.appendChild(gridBox);

      gridBox.addEventListener('mouseover', () => {
        if (!gridBox.classList.contains('colored')) {
          hue = generateColor()[0];
          saturation = generateColor()[1];
          lightness = generateColor()[2];
          gridBox.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
          gridBox.classList.add('colored');

        } else if (lightness-10 > 0) {
          lightness -= 10;
          gridBox.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

        } else {
          gridBox.style.backgroundColor = `hsl(${hue}, ${saturation}%, 0%)`;
        }
      });
    }
    container.append(gridRow);
  }
}

function generateColor() {
  let hue = Math.floor(Math.random() * 361);
  let saturation = Math.floor(Math.random() * 101);
  let lightness = 100 - Math.floor(Math.random() * 11);

  return [hue, saturation, lightness]
}

function removeGrid() {
  const gridRow = document.querySelectorAll('.grid-row');
  gridRow.forEach((row) => {
    row.remove();
  });
}

main();