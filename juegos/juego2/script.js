let userTotalScore = 0;
let machineTotalScore = 0;
const winningScore = 3;

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
    if (userTotalScore < winningScore && machineTotalScore < winningScore) {
        const userDice1 = rollDice();
        const machineDice1 = rollDice();

        document.getElementById("userDice1").textContent = "🎲 " + userDice1;
        document.getElementById("machineDice1").textContent = "🎲 " + machineDice1;

        determineWinner(userDice1, machineDice1);
    }

    if (userTotalScore === winningScore || machineTotalScore === winningScore) {
        endGame();
    }
}

function determineWinner(userDice, machineDice) {
    let message = "";

    if (userDice > machineDice) {
        userTotalScore++;
        message = "¡Ganaste esta ronda!";
    } else if (machineDice > userDice) {
        machineTotalScore++;
        message = "Perdiste esta ronda.";
    } else {
        message = "Es un empate.";
    }

    document.getElementById("userScore").textContent = userTotalScore;
    document.getElementById("machineScore").textContent = machineTotalScore;
    document.getElementById("message").textContent = message;
}

function endGame() {
    let finalMessage = "";

    if (userTotalScore === winningScore) {
        finalMessage = "¡Felicidades! Ganaste el juego con 3 puntos.";
    } else if (machineTotalScore === winningScore) {
        finalMessage = "La máquina ganó el juego con 3 puntos. Mejor suerte la próxima vez.";
    }

    document.getElementById("message").textContent = finalMessage;
    document.getElementById("playButton").disabled = true; // Deshabilita el botón al finalizar el juego
}




