
//Inputs variables
const result = document.getElementById('result');
const computerShow = document.getElementById('election');

//PLay variables
const playerScore = document.getElementById('player');
const computerScore = document.getElementById('computer');
const actions = document.getElementsByClassName('action');
let playerChoise;
playerScore.value = 0;
computerScore.value = 0;
playerScoreInt = parseInt(playerScore.value);
computerScoreInt = parseInt(playerScore.value);

for (let action of actions) {
    action.addEventListener('click', function () {
        //Computer:
        //1 = paper
    //2 = scissors
    //3 = rock
        let computerChoise = Math.round(Math.random()*3);
        console.log(computerChoise);

        if(computerChoise == 1){
            computerChoise = 'Papel';
        } else if(computerChoise == 2) {
            computerChoise = 'Tijera';
        } else {
            computerChoise = 'Piedra'
        }
        console.log(computerChoise);

        //Player
        playerChoise = this.innerHTML;
        if (playerChoise == computerChoise){
            result.value = '¡EMPATE!';
            computerShow.value = computerChoise;
        }else if(playerChoise = 'Papel' && computerChoise == 'Piedra' || playerChoise == 'Tijeras' && computerChoise == 'Papel' || playerChoise == 'Piedra' && computerChoise == 'Papel') {
            result.value = '¡GANASTE!';
            computerShow.value = computerChoise;
            playerScoreInt = playerScoreInt+1;
            playerScore.value = playerScoreInt;

        }else{
            result.value = '¡PERDISTE!';
            computerShow.value = computerChoise;
            computerScoreInt = computerScoreInt+1;
            computerScore.value = computerScoreInt;
        }
    });
}


