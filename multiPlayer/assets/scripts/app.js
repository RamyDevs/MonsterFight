const player1Attack = document.getElementById('player1-attack');
const player1StrongAttack = document.getElementById('player1-strong-attack');
const player1Reset = document.getElementById('player1-reset');
const player2Attack = document.getElementById('player2-attack');
const player2StrongAttack = document.getElementById('player2-strong-attack');
const player2Reset = document.getElementById('player2-reset');
const player1Health = document.getElementById('player1-health');
const player2Health = document.getElementById('player2-health');

function animatePlayer1() {
	let arenaLeft = document.getElementById('arena-left');
	let blast = document.createElement('div');
	blast.className = 'blast';
	arenaLeft.appendChild(blast);
	blast.style.animation = 'player1Blast 1s';
	blast.addEventListener('animationend', function () {
		arenaLeft.removeChild(this);
	});
}
// function animatePlayer2() {}
function determineWin() {
	if (player1Health.value <= 0 && player2Health.value > 0) {
		alert('Player 2 Wins!');
	} else if (player2Health.value <= 0 && player1Health.value > 0) {
		alert('Player 1 Wins!');
	} else if (player2Health.value <= 0 && player1Health.value <= 0) {
		alert("It's a tie!");
	}
}
function resetHealth() {
	player1Health.value = 100;
	player2Health.value = 100;

	alert('Reset!');
}
function attackPlayer2() {
	let damage = Math.floor(Math.random() * 10);
	player2Health.value -= damage;
	animatePlayer1();
	setTimeout(determineWin(), 2000);
}
function attackPlayer1() {
	let damage = Math.floor(Math.random() * 10);
	player1Health.value -= damage;
	determineWin();
}
function strongAttackPlayer2() {
	let damage = Math.floor(Math.random() * 15);
	player2Health.value -= damage;
	animatePlayer1();
	setTimeout(determineWin(), 2000);
}
function strongAttackPlayer1() {
	let damage = Math.floor(Math.random() * 15);
	player1Health.value -= damage;
	determineWin();
}

player1Reset.addEventListener('click', resetHealth);
player2Reset.addEventListener('click', resetHealth);
player1Attack.addEventListener('click', attackPlayer2);
player1StrongAttack.addEventListener('click', strongAttackPlayer2);
player2StrongAttack.addEventListener('click', strongAttackPlayer1);
player2Attack.addEventListener('click', attackPlayer1);
