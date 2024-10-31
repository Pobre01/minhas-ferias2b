const fruits = ["banana", "maçã", "uva", "laranja", "melancia", "abacaxi", "morango"];
let secretFruit = fruits[Math.floor(Math.random() * fruits.length)];

function checkGuess() {
    const guess = document.getElementById("guessInput").value.toLowerCase();
    const resultMessage = document.getElementById("resultMessage");

    if (guess === secretFruit) {
        resultMessage.textContent = "Parabéns! Você acertou a fruta!";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "Tente novamente!";
        resultMessage.style.color = "red";
    }
}

function resetGame() {
    secretFruit = fruits[Math.floor(Math.random() * fruits.length)];
    document.getElementById("guessInput").value = "";
    document.getElementById("resultMessage").textContent = "";
}
