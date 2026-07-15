```javascript
const cells = document.querySelectorAll(".cell");
const status = document.getElementById("status");
const restart = document.getElementById("restart");

let board = ["","","","","","","","",""];
let currentPlayer = "X";
let gameActive = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function checkWinner() {
    for (const pattern of winPatterns) {
        const [a,b,c] = pattern;
        if (
            board[a] &&
            board[a] === board[b] &&
            board[b] === board[c]
        ) {
            status.textContent = `Player ${currentPlayer} Wins!`;
            gameActive = false;
            return;
        }
    }

    if (!board.includes("")) {
        status.textContent = "It's a Draw!";
        gameActive = false;
    }
}

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        const index = cell.dataset.index;

        if (board[index] !== "" || !gameActive) return;

        board[index] = currentPlayer;
        cell.textContent = currentPlayer;

        checkWinner();

        if (gameActive) {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            status.textContent = `Player ${currentPlayer}'s Turn`;
        }
    });
});

restart.addEventListener("click", () => {
    board = ["","","","","","","","",""];
    currentPlayer = "X";
    gameActive = true;
    status.textContent = "Player X's Turn";

    cells.forEach(cell => {
        cell.textContent = "";
    });
});
```
