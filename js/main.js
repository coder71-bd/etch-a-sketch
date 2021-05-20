const button = document.querySelector(".change_grid");
const container = document.querySelector("#container");
const randomColor = document.querySelector('.random')
const blackColor = document.querySelector('.black')
const reset = document.querySelector('.reset')
let switchColor = ''
/* creating divs */
function createGrid(gridColumn, gridRow) {
  const divsCount = gridColumn * gridRow;

  /* limiting grid container to 100 x 100 grid */
  if (divsCount <= 10000) {
    for (let i = 0; i < divsCount; i++) {
      const containerChild = document.createElement("div");
      containerChild.classList.add("child");
      container.appendChild(containerChild);
    }
  }
}

/* default grid container */
createGrid(16, 16);

let childOfContainers = document.querySelectorAll(".child");

/* it will be the defaultColor when any button is clicked */
function defaultColor() {
    childOfContainers.forEach((elem) => elem.style.backgroundColor = 'rgba(255, 255, 255, 1)')
}

/* blackish color will activate when blackColor is clicked */
function activateBlackishColor() {
  defaultColor()
  /* switch the color */
  switchColor = 'blackColor'
  /* generate blackish color */
  function generateBlackishColor(black) {
    return `rgba(0, 0, 0, ${black})`
  }
  /* changing opacity based on previous color */
  function changeBlack(elem) {
    if(switchColor === 'blackColor') {
      switch(elem.style.backgroundColor) {
        case '' || 'rgb(255, 255, 255)':
          elem.style.backgroundColor = generateBlackishColor(0.1)
        case generateBlackishColor(0.1):
          elem.style.backgroundColor = generateBlackishColor(0.1)
        case generateBlackishColor(0.1):
          elem.style.backgroundColor = generateBlackishColor(0.2)
          break
        case generateBlackishColor(0.2):
          elem.style.backgroundColor = generateBlackishColor(0.3)
          break
        case generateBlackishColor(0.3):
          elem.style.backgroundColor = generateBlackishColor(0.4)
          break
        case generateBlackishColor(0.4):
          elem.style.backgroundColor = generateBlackishColor(0.5)
          break
        case generateBlackishColor(0.5):
          elem.style.backgroundColor = generateBlackishColor(0.6)
          break
        case generateBlackishColor(0.6):
          elem.style.backgroundColor = generateBlackishColor(0.7)
          break
        case generateBlackishColor(0.7):
          elem.style.backgroundColor = generateBlackishColor(0.8)
          break
        case generateBlackishColor(0.8):
          elem.style.backgroundColor = generateBlackishColor(0.9)
          break
        case generateBlackishColor(0.9):
          elem.style.backgroundColor = generateBlackishColor(1)
      }
    }
  }
  childOfContainers.forEach(elem => elem.addEventListener('mouseover', () => {
    changeBlack(elem)
  }))
}

/* when clicking black color button */
blackColor.addEventListener('click', () => {
  activateBlackishColor()
})

/* black color will be the default color */
if(switchColor === '') activateBlackishColor()

/* random color will activate when randomColor clicked */
function activateRandomColor() {
  switchColor = 'randomColor'
  defaultColor()
  /*random color generate */
  function colorGenerate() {
    const colorArr = ["a", "b","c","d","e","f","0","1", "2","3", "4","5", "6", "7","8","9"];
    const color = [];
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * colorArr.length);
        color.push(colorArr[randomIndex]);
    }
    return `#${color.join("")}`;
  }
  /* adding color to divs */
  function randomColor(e) {
    if(switchColor === 'randomColor') {
      e.target.style.backgroundColor = colorGenerate();
    }
  }
  childOfContainers.forEach(elem => elem.addEventListener("mouseover", randomColor))
}

/* when clicking random color button */
randomColor.addEventListener('click', activateRandomColor)



/* creating grid dynamically */
function generateGrid() {
  childOfContainers.forEach((elem) => container.removeChild(elem));
  let newGridColumn = prompt("enter columns", 16);
  let newGridRow = prompt("enter rows", 16);
  if (newGridColumn === null || newGridColumn === "") newGridColumn = 16;
  if (newGridRow === null || newGridRow === "") newGridRow = 16;
  if (newGridRow * newGridColumn >= 10000) {
    newGridColumn = 16;
    newGridRow = 16;
    alert("maximum size exceeded");
  }
  createGrid(newGridColumn, newGridRow);
  container.style.gridTemplateColumns = `repeat(${newGridColumn}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${newGridRow}, 1fr)`;
  childOfContainers = document.querySelectorAll(".child");
  blackColor.addEventListener('click', () => {
    activateBlackishColor()
})
  activateBlackishColor()
}

button.addEventListener("click", generateGrid)

/* reset all */
reset.addEventListener('click', () => {
  defaultColor()
})



