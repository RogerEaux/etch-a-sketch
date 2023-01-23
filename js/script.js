function createGrid(sizeOfGrid){
    const grid = document.querySelector('#grid');
    for(let i = 0; i < sizeOfGrid; i++){
        let row = document.createElement('div');
        row.setAttribute('class','container row');
        for(let j = 0; j < sizeOfGrid; j++){
            let column = document.createElement('div');
            column.classList.add('column')
            column.textContent = 'C';
            row.appendChild(column);
        }
        grid.appendChild(row);   
    }
}

createGrid(16);
