//Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
//let cells = document.getElementsByClassName("cell");
let newGridSize;


defaultGrid();
//Creates a default grid sized 16x16 
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    //Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

//Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};

let cells = document.getElementsByClassName("cell");

for(let i=0;i<cells.length;i++){
    //console.log(cells[i])
    cells[i].addEventListener("mouseover",(e) => {
               //console.log(e);
               //cells[i].classList.add("painted");
               cells[i].style.backgroundColor = "black";
               
            })
};
function makeGrid(newGridSize){
    makeRows(newGridSize);
    makeColumns(newGridSize);
    for(let i=0;i<cells.length;i++){
        
        cells[i].addEventListener("mouseover",(e) => {

                   cells[i].style.backgroundColor = "black";
                   
                })
    };
}

function clearBox(elementId)
{
    document.getElementById(elementId).innerHTML = "";
}

const button = document.getElementById("gridButton");
button.addEventListener('click',()=>{
    newGridSize = prompt("Type the size of the new grid");
    newGridSize = parseInt(newGridSize);
    clearBox("container")
    console.log(newGridSize);
    makeGrid(newGridSize);
    return newGridSize;

});

