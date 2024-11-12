let DESK = {};
let LOG = [];
let AVALIBLE_PIECES = {
    dark: ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'rook', 'rook', 'horse', 'horse', 'bishop', 'bishop', 'queen', 'king'],
    white: ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'rook', 'rook', 'horse', 'horse', 'bishop', 'bishop', 'queen', 'king']
}

document.querySelectorAll('.game-field tr').forEach(row => {
    [...row.children].forEach(cell => {
        DESK[row.dataset.address] = DESK[row.dataset.address] || {};
        DESK[row.dataset.address][cell.dataset.address] = cell;
    })
})

renderPieces()

function renderPiece(el) {
    const IMG = document.createElement('img');
    IMG.setAttribute('src', `assets/${el.dataset.piece}.svg`);

    el.appendChild(IMG);
    el.setAttribute('id', `${el.dataset.piece}`)
}

function renderPieces() {
    for (const [letter, cells] of Object.entries(DESK)) {
        for (const [number, cell] of Object.entries(cells)) {
            cell.innerHTML = '';
            cell.removeAttribute(id);

            if (cell.dataset.piece) renderPiece(cell);
        }
    }
}