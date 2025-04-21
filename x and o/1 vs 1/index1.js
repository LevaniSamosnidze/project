const conteiner = document.getElementById('conteiner');
const play = document.getElementsByClassName('play');
let currentPlayer = 'x';
let gameOver = false;

conteiner.addEventListener('click', (e) => {
    if (gameOver) return;

    if (e.target && e.target.classList.contains('play') && e.target.children[0].textContent === '') {
        e.target.children[0].textContent = currentPlayer;
        checkWin(currentPlayer);
        if (!gameOver) {
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
        }
    }
});

function checkWin(player) {
    const grid = Array.from(play).map(value => value.children[0].textContent);

    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winConditions) {
        if (grid[condition[0]] === player && grid[condition[1]] === player && grid[condition[2]] === player) {
            gameOver = true;
            document.getElementById('win').textContent = `${player} wins!`;
            break;
        }
    }
}
