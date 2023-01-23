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
    document.querySelector('#display').appendChild(grid);
}

createGrid(32);
