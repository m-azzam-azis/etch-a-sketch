const container = document.querySelector('.container');
const containerSize = 640
container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;

function main() {
  createGrid(16);
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    do {
      gridSize = prompt('enter desired grid size (1-100)')
      if (gridSize < 1 || gridSize > 100) {
        alert('please enter an integer 1-100');
      }
    } while (gridSize < 1 || gridSize > 100);

    removeGrid();
    createGrid(gridSize);
  });

}

function createGrid (gridSize) {
  for (let i = 0; i < gridSize; i++) {

    const gridRow = document.createElement('div');
    gridRow.style.height = `${containerSize/gridSize}px`;
    gridRow.className = 'grid-row';

    for (let j = 0; j < gridSize; j++) {

      const gridBox = document.createElement('div');
      gridBox.style.width = `${containerSize/gridSize}px`;
      gridBox.className = 'grid-box';
      // gridBox.textContent = i*gridSize +j;
      gridRow.appendChild(gridBox);

      gridBox.addEventListener('mouseover', () => {
        gridBox.style.backgroundColor = 'black';
      });
    }
    container.append(gridRow);
  }
}

function removeGrid() {
  const gridRow = document.querySelectorAll('.grid-row');
  gridRow.forEach((row) => {
    row.remove();
  });
}

main();