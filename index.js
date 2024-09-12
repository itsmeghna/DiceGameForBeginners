function rollDice() {
   let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    let randomDiceImage1 = `dice${randomNumber1}.png`;
    let randomDiceImage2 = `dice${randomNumber2}.png`;

   document.getElementById("leftDice").src = randomDiceImage1;
    document.getElementById("rightDice").src = randomDiceImage2;

   let resultText = document.getElementById("result");

    if (randomNumber1 > randomNumber2) {
        resultText.textContent = " 🎉 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        resultText.textContent = "Player 2 Wins! 🎉";
    } else {
        resultText.textContent = "It's a Draw!";
    }
    
}
