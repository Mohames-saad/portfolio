const cells = document.querySelectorAll('.cell');
const resetbtn = document.querySelector('.reset');
const winCombows = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let ties = 0;
const p1Score = document.querySelector('.player1');
const p2Score = document.querySelector('.player2');
const drw = document.querySelector('.draw');
const message = document.querySelector('.contant');
const overlay = document.querySelector('#overlay');
const closebtn = document.querySelector('#close');
let curentTurn = document.querySelector('.curent-turn');
let usedCells =[];
let turn = true;
let player1 = {
    Symbol: '<i class="fa-solid fa-x"></i>',
    played: [],
    score: 0
}

let player2 = {
    Symbol: '<i class="fa-sharp fa-solid fa-o"></i>',
    played: [],
    score: 0
}

checkTurn();


for(let i = 0; i < 9; i++) {
    cells[i].addEventListener('click', function () {
        if(isEmpty(i)){
            if (turn) {
                addSymbol(player1, i);
                turn = false;
                sheckWin(player1);
                checkTurn();
            }
            else {
                addSymbol(player2, i);
                turn = true;
                sheckWin(player2);
                checkTurn();
            }
                
            }else alert("choose an empty cell");
        })

}

function addSymbol(player, i) {
    cells[i].innerHTML = player.Symbol;
    player.played.push(i);
    usedCells.push(i);
}

function sheckWin(player){
   winCombows.some(combo => {
        if(combo.every(index => player.played.includes(index))){
        player.score++;
        scoreplayer() ;
        message.innerHTML= player.Symbol+' is the <h2>winner</h2>';
        overlay.style.display = 'flex';
        reset();
    }
    })
    if(usedCells.length == 9){
        ties++ ;
        scoreplayer() ;
        message.innerHTML= "it's a <h2>draw</h2> "
        overlay.style.display = 'flex';
        reset();
}

}

function isEmpty(i){
   if(usedCells.includes(i)){
    return false;
   }
   return true ;
}

function reset(){
    cells.forEach(cell => {
        cell.innerHTML = '';
    })
    usedCells = [];
    player1.played = [];
    player2.played = [];
    turn = true;
    curentTurn.innerHTML = player1.Symbol;
}


resetbtn.addEventListener('click', reset)


function checkTurn() {
    if(turn){
        curentTurn.innerHTML = player1.Symbol;
    }
    else{
        curentTurn.innerHTML = player2.Symbol;
    }
}

function scoreplayer() {
    p1Score.innerHTML = player1.score;
    p2Score.innerHTML = player2.score;
    drw.innerHTML = ties;
}

closebtn.addEventListener('click',() => overlay.style.display = 'none');