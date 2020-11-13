const BOARD = document.getElementById("board");
const TOTAL_BOX = 8 * 8;

function init() {
  const cell = "<div class='cell'></div>";
  let boxs = cell.repeat(TOTAL_BOX);
  BOARD.innerHTML = boxs;
  const boardCells = document.querySelectorAll(".cell");
  let invertColor = false;
  boardCells.forEach((item, index) => {
    item.id = index;

    //* white
    if (index == 0) {
      item.innerHTML = `<img src="./assets/white/rook.svg" class="pieces" draggable="true"/>`;
    } else if (index == 1) {
      item.innerHTML = `<img src="./assets/white/knight.svg" class="pieces" draggable="true"/>`;
    } else if (index == 2) {
      item.innerHTML = `<img src="./assets/white/bishop.svg" class="pieces" draggable="true"/>`;
    } else if (index == 3) {
      item.innerHTML = `<img src="./assets/white/king.svg" class="pieces" draggable="true"/>`;
    } else if (index == 4) {
      item.innerHTML = `<img src="./assets/white/queen.svg" class="pieces" draggable="true"/>`;
    } else if (index == 5) {
      item.innerHTML = `<img src="./assets/white/bishop.svg" class="pieces" draggable="true"/>`;
    } else if (index == 6) {
      item.innerHTML = `<img src="./assets/white/knight.svg" class="pieces" draggable="true"/>`;
    } else if (index == 7) {
      item.innerHTML = `<img src="./assets/white/rook.svg" class="pieces" draggable="true"/>`;
    } else if (index <= 15 && index >= 8) {
      item.innerHTML = `<img src="./assets/white/pawn.svg" class="pieces" draggable="true"/>`;
    }
    // * black
    else if (index == 63) {
      item.innerHTML = `<img src="./assets/black/rook.svg" class="pieces" draggable="true"/>`;
    } else if (index == 62) {
      item.innerHTML = `<img src="./assets/black/knight.svg" class="pieces" draggable="true"/>`;
    } else if (index == 61) {
      item.innerHTML = `<img src="./assets/black/bishop.svg" class="pieces" draggable="true"/>`;
    } else if (index == 60) {
      item.innerHTML = `<img src="./assets/black/queen.svg" class="pieces" draggable="true"/>`;
    } else if (index == 59) {
      item.innerHTML = `<img src="./assets/black/king.svg" class="pieces" draggable="true"/>`;
    } else if (index == 58) {
      item.innerHTML = `<img src="./assets/black/bishop.svg" class="pieces" draggable="true"/>`;
    } else if (index == 57) {
      item.innerHTML = `<img src="./assets/black/knight.svg" class="pieces" draggable="true"/>`;
    } else if (index == 56) {
      item.innerHTML = `<img src="./assets/black/rook.svg" class="pieces" draggable="true"/>`;
    } else if (index <= 55 && index >= 48) {
      item.innerHTML = `<img src="./assets/black/pawn.svg" class="pieces" draggable="true"/>`;
    }
  });
  dragger();
}

function dragger() {
  const pieces = document.querySelectorAll(".pieces");
  const boardCells = document.querySelectorAll(".cell");
  pieces.forEach((item) => {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd);
  });
  boardCells.forEach((item) => {
    if (item.hasChildNodes()) {
      item.removeEventListener("dragover", dragOver);
      item.removeEventListener("dragenter", dragEnter);
      item.removeEventListener("dragleave", dragLeave);
      item.removeEventListener("drop", dragDrop);
    } else {
      item.addEventListener("dragover", dragOver);
      item.addEventListener("dragenter", dragEnter);
      item.addEventListener("dragleave", dragLeave);
      item.addEventListener("drop", dragDrop);
    }
  });
}

let draggedItem;
let dropped = false;

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
  draggedItem = this.cloneNode(true);
}
function dragEnd() {
  if (!dropped) {
    this.className = "pieces";
  } else {
    this.parentNode.innerHTML = "";
  }
  dropped = false;
  dragger();
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}
function dragLeave() {
  this.className = "cell";
}
function dragDrop(e) {
  e.preventDefault();
  this.className = "cell";
  draggedItem.className = "pieces";
  this.appendChild(draggedItem);
  dropped = true;
  dragger();
}

init();
