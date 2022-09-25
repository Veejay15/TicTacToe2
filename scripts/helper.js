export const displayArray = (array) => {
  for (let i = 0; i < cells.length; i++) {
    let col = i % 3;
    let row = (i - col) / 3;
    cells[i].textContent = array[row][col];
  }
};

export const clearCell = (clicked, highlighted, letter) => {
  if (clicked) {
    for (const cell of cells) {
      cell.classList.remove("clicked");
      cell.style.pointerEvents = "all";
    }
  }
  if (highlighted) {
    for (const cell of cells) cell.classList.remove("highlighted");
  }
  if (letter) {
    for (const cell of cells) cell.textContent = "";
  }
};

export const animationFunc = (icon, animation) => {
  icon.classList.remove(animation);
  window.requestAnimationFrame(() => {
    icon.classList.add(animation);
  });
};
