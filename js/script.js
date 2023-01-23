function createGrid(sizeOfGrid){
    const grid = document.createElement('div');
    const backgroundColor = document.querySelector('#background');
    grid.setAttribute('id','grid');
    grid.setAttribute('class','container')
    for(let i = 0; i < sizeOfGrid; i++){
        let row = document.createElement('div');
        row.setAttribute('class','container row');
        for(let j = 0; j < sizeOfGrid; j++){
            let column = document.createElement('div');
            column.classList.add('column')
            column.style.backgroundColor = backgroundColor.value;
            row.appendChild(column);
        }
        grid.appendChild(row);   
    }
    const content = document.querySelector('#content')
    content.appendChild(grid);
    checkMouse();
}

function updateGrid(){
    const value = document.querySelector('#value');
    const input = document.querySelector('#slider');
    value.textContent = input.value;
    input.addEventListener("input", () =>{
        value.textContent = input.value;
        const grid = document.querySelector('#grid')
        grid.remove();
        createGrid(value.textContent);
    });
}

function changeBackgroundColour(){
    const backgroundColor = document.querySelector('#background');
    backgroundColor.addEventListener('input', () =>{
        const gridCells = document.querySelectorAll('#grid .row .column');
        gridCells.forEach(cell => cell.style.backgroundColor = backgroundColor.value);
    })
}

function changeColour(){
    const colour = document.querySelector('#colour');
    this.style.backgroundColor = colour.value;
}

function allowDraw(){
    const gridCells = document.querySelectorAll('#grid .row .column');
    gridCells.forEach(cell => cell.addEventListener('mouseover', changeColour));
}

function blockDraw(){
    const gridCells = document.querySelectorAll('#grid .row .column');
    gridCells.forEach(cell => cell.removeEventListener('mouseover', changeColour));
}

function checkMouse(){
    const grid = document.querySelector('#grid');
    grid.addEventListener('mousedown', allowDraw);
    grid.addEventListener('mouseup', blockDraw);
}

function setUp(){
    createGrid(16);
    updateGrid();
    changeBackgroundColour();
}

setUp();

