const conteiner = document.getElementById('conteiner');
const play = document.getElementsByClassName('play');
const main1 = document.getElementById('main1');
const main2 = document.getElementById('main2');
const main = document.getElementById('main');
let gameOver = false;

main.addEventListener('click', (e) => {
    gameOver = false;

    if (main1.children[1].checked === true) {
        main2.remove();

        conteiner.addEventListener('click', (e) => {
            if (gameOver) return;

            if (e.target && e.target.classList.contains('play') && e.target.children[0].textContent === '') {
                e.target.children[0].textContent = 'x';
                checkWin('x');
                if (!gameOver) {
                    computerTurn('o');
                }
            }
        });

    } else if (main2.children[1].checked === true) {
        main1.remove();

        conteiner.addEventListener('click', (e) => {
            if (gameOver) return;

            if (e.target && e.target.classList.contains('play') && e.target.children[0].textContent === '') {
                e.target.children[0].textContent = 'o';
                checkWin('o');
                if (!gameOver) {
                    computerTurn('x');
                }
            }
        });
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

function computerTurn(player) {
    const emptyCells = Array.from(play).filter(value => value.children[0].textContent === '');

    if (emptyCells.length > 0) {
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        randomCell.children[0].textContent = player;
        checkWin(player);
    }
}





