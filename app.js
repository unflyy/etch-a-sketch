const container = document.getElementById("container");

function makeRows(rows, cols) {

  while (document.querySelector("button") !== null){
    document.querySelector("button").remove();
  } 


  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  container.style.width = "960px";
  container.style.overflow = "hidden";
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.style.minHeight = "0";
    cell.style.minWidth = "0";
    cell.style.overflow = "hidden";
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover", () => {
      if (cell.style.backgroundColor == "") {
        let color = getRandomColor();
        cell.style.backgroundColor = color;
        cell.style.opacity = ".10";
        return cell.style.backgroundColor;
      }
      if ((cell.style.backgroundColor !== "") && (cell.style.opacity <= "0.90")) {
        cell.style.opacity = parseFloat(cell.style.opacity) + .10;
        return cell.style.backgroundColor;
      }
    })
  };
  createButton();
};

makeRows(16, 16);

function createButton(){
  const buttonDiv = document.querySelector("#buttonDiv");
  const resetButton = document.createElement("button");
  resetButton.textContent = "Reset Grid!";
  resetButton.style.margin = "20px";

  buttonDiv.appendChild(resetButton);

  resetButton.addEventListener('click', () => {
    document.querySelectorAll(".grid-item").forEach(e => e.remove());

    let userGridInput = prompt("Please enter the number of grid squares per side (Max: 100): ");
    if (userGridInput > 100){
      alert("ERROR! You specified a grid size larger than the max of 100.");
      return;
    }
    rows = userGridInput;
    columns = userGridInput;
    makeRows(rows, columns);
  })
}

function getRandomColor(){
  let o = Math.round;
  let r = Math.random;
  let s = 255;
  return "rgb(" + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}



