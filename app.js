let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById('resetBtn')
let newGameBtn = document.getElementById('new-btn')
let msgContainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')

let turnX = true;

const stateSpace = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const reset = () => {
    turnX = true
    enableBoxes()
    msgContainer.classList.add("hide")
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
} 

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true
    }
} 


const showwinner = (winner) => {
    msg.innerText = `Congratulations! The winner is ${winner}`
    msgContainer.classList.remove('hide')
    disableBoxes()

}
 

const checkWinner = () => {
  for (let currentState of stateSpace) {
    let pos1Val = boxes[currentState[0]].innerText;
    let pos2Val = boxes[currentState[1]].innerText;
    let pos3Val = boxes[currentState[2]].innerText;

    if(pos1Val != '' && pos2Val != '' && pos3Val != ''){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("winner is",pos1Val)
            showwinner(pos1Val)
        }
    }
  }
};

// newGameBtn.addEventListener('click',reset())
// resetBtn.addEventListener('click',reset())