let playerHealth = document.getElementById('playerHealth');
let monsterHealth = document.getElementById('monsterHealth');

const attack = document.getElementById('attack');
const strongAttack = document.getElementById('strong-attack');
const reset = document.getElementById('heal');
let status;

function animatePlayer() {
	let arenaLeft = document.getElementById('arena-left');
	let blast = document.createElement('div');
	blast.className = 'blast';
	arenaLeft.appendChild(blast);
	blast.style.animation = 'playerBlast 1s ease';
	blast.addEventListener('animationend', function () {
		arenaLeft.removeChild(this);
	});
}
function animateMonster() {
	let arenaLeft = document.getElementById('blast-place');
	let blast = document.createElement('div');
	blast.className = 'blast';
	arenaLeft.appendChild(blast);
	blast.style.animation = 'monsterBlast 1s ease';
	blast.addEventListener('animationend', function () {
		arenaLeft.removeChild(this);
	});
}
function determineWin(a, b) {
	if (a.value <= 0 && b.value > 0) {
		alert('You Lost!');
		resetHealth();
	} else if (a.value > 0 && b.value <= 0) {
		alert('You Won!');
		resetHealth();
	} else if (a.value <= 0 && b.value <= 0) {
		alert("It's a tie");
		resetHealth();
	}
}
function attackMonster() {
	const playerDamage = Math.floor(Math.random() * 10);
	const monsterDamage = Math.floor(Math.random() * 9);
	monsterHealth.value -= playerDamage;
	animatePlayer();
	setTimeout(() => {
		animateMonster();
		playerHealth.value -= monsterDamage;
		setTimeout(() => {
			determineWin(playerHealth, monsterHealth);
		}, 2000);
	}, 2000);
}
function strongAttackMonster() {
	const strongAttackValue = Math.floor(Math.random() * 15);
	const monsterDamage = Math.floor(Math.random() * 9);
	monsterHealth.value -= strongAttackValue;
	animatePlayer();
	setTimeout(() => {
		animateMonster();
		playerHealth.value -= monsterDamage;
		setTimeout(() => {
			determineWin(playerHealth, monsterHealth);
		});
	}, 2000);
}
function resetHealth() {
	playerHealth.value = 100;
	monsterHealth.value = 150;
}
attack.addEventListener('click', attackMonster);
strongAttack.addEventListener('click', strongAttackMonster);
reset.addEventListener('click', resetHealth);
