function createGrid(sizeOfGrid){
    const grid = document.createElement('div');
    grid.setAttribute('id','grid');
    grid.setAttribute('class','container')
    for(let i = 0; i < sizeOfGrid; i++){
        let row = document.createElement('div');
        row.setAttribute('class','container row');
        for(let j = 0; j < sizeOfGrid; j++){
            let column = document.createElement('div');
            column.classList.add('column')
            row.appendChild(column);
        }
        grid.appendChild(row);   
    }
    document.querySelector('#content').appendChild(grid);
}

function updateSliderValue(){
    const value = document.querySelector("#value");
    const input = document.querySelector("#slider");
    value.textContent = input.value;
    input.addEventListener("input", () => value.textContent = input.value);
}

function updateGrid(){
    
}

createGrid(16);
updateSliderValue();
