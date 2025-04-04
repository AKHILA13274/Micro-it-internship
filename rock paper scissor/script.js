// script.js
function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    document.getElementById('user-choice').textContent = `Your Choice: ${userChoice}`;
    document.getElementById('computer-choice').textContent = `Computer's Choice: ${computerChoice}`;
  
    let result = '';
    if (userChoice === computerChoice) {
      result = "It's a Draw!";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = "You Win! 🎉";
    } else {
      result = "You Lose! 😢";
    }
  
    document.getElementById('game-result').textContent = `Result: ${result}`;
  }
  