let btns = document.querySelectorAll(".btns");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#start");
let winMsg = document.querySelector("#winMsg");
let drawMsg = document.querySelector("#drawMsg")
let turnO = true;
let count = 0;
const winPattrens = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnO) {
      btn.innerText = "O";
      turnO = false;
    } else {
      btn.innerText = "X";
      turnO = true;
    }
    btn.disabled = true;
    count++;
    let isWinner = checkWinnner();
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  drawMsg.innerText = `Game was a Draw.`;
  drawMsg.classList.remove("hide");
  disableBtns();
};

const disableBtns = () => {
  for (let btn of btns) {
    btn.disabled = true;
  }
};

const enableBtns = () => {
  for (let btn of btns) {
    btn.disabled = false;
    btn.innerText = "";
  }
};

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBtns();
  winMsg.classList.add("hide");
  drawMsg.classList.add("hide");
};

const showWinner = (winner) => {
  winMsg.innerText = `WINNER! IS ${winner}`;
  winMsg.classList.remove("hide");
  disableBtns();
};

const checkWinnner = () => {
  for (let pattren of winPattrens) {
    let pos1val = btns[pattren[0]].innerText;
    let pos2val = btns[pattren[1]].innerText;
    let pos3val = btns[pattren[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        showWinner(pos1val);
      }
    }
  }
};
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
