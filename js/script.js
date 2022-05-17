let PlayerPoints = 0;
let ComputerPoints = 0;

const results = document.getElementById('results'), buttonRock = document.getElementById('button-rock'), buttonPaper = document.getElementById('button-paper'), buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName,computerMove, playerMove, randomNumber) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

    function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
        return 'kamień';
    }
    else if (argMoveId == 2) {
        return 'papier';
    } 
    else if (argMoveId == 3) {
        return 'nożyce';
    }
    else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
    }

    function displayResult(argPlayerMove, argComputerMove) {
        
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
        PlayerPoints = PlayerPoints+1;
    } 
    else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
        PlayerPoints = PlayerPoints+1;
    }   
    else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('Wygrywasz!');
        PlayerPoints = PlayerPoints+1;
    }   
    else if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
    }
    else {
        printMessage('Przegrywasz :(');
        ComputerPoints = ComputerPoints+1;
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    
    console.log('Punkty gracza: ' + PlayerPoints);
    console.log('Punkty kąkutera: ' + ComputerPoints);
    }
    playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove, PlayerPoints, ComputerPoints);
    results.innerHTML = 'Punkty gracza: ' + PlayerPoints + ' | Punkty komputera: ' + ComputerPoints;
}

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
