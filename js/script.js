function createGrid(sizeOfGrid){
    const grid = document.querySelector('#grid');
    for(let i = 0; i < sizeOfGrid; i++){
        let row = document.createElement('div');
        for(let j = 0; j < sizeOfGrid; j++){
            let column = document.createElement('div');
            row.appendChild(column);
        }
        grid.appendChild(row);   
    }
}

createGrid(2);
