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

function clearBackground(){
    const backgroundColour = document.querySelector('#background');
    const gridCells = document.querySelectorAll('#grid .row .column');
    gridCells.forEach(cell => cell.style.backgroundColor = backgroundColour.value);
}

function changeBackgroundColour(){
    const backgroundColour = document.querySelector('#background');
    const clear = document.querySelector('#clear');
    backgroundColour.addEventListener('input', clearBackground);
    clear.addEventListener('click',clearBackground);
}

function getRandomvalue(){
    return Math.floor(Math.random() * 256);
}

function changeColour(){
    const colour = document.querySelector('#colour');
    const backgroundColour = document.querySelector('#background');
    const draw = document.querySelector('#draw');
    const rgb = document.querySelector('#rgb');
    const eraser = document.querySelector('#eraser');
    let paint;

    if(draw.style.color === 'rgb(127, 255, 212)'){
        paint = colour.value;
    }else if(eraser.style.color === 'rgb(127, 255, 212)'){
        paint = backgroundColour.value;
    }else{
        paint = `rgb(${getRandomvalue()}, ${getRandomvalue()}, ${getRandomvalue()})`; 
    }

    this.style.backgroundColor = paint;
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

function selectButton(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.color = '#00003b';
        button.style.backgroundColor = '#7fffd4';
    });
    this.style.color = '#7fffd4';
    this.style.backgroundColor = '#00003b';
}

function checkButtonSelected(){
    const draw = document.querySelector('#draw');
    const rgb = document.querySelector('#rgb');
    const eraser = document.querySelector('#eraser');
    draw.style.color = '#7fffd4';
    draw.style.backgroundColor = '#00003b';
    draw.addEventListener('click',selectButton);
    rgb.addEventListener('click',selectButton);
    eraser.addEventListener('click',selectButton);
}

function setUp(){
    createGrid(16);
    updateGrid();
    changeBackgroundColour();
    checkButtonSelected();
}

setUp();

