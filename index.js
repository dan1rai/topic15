let score = 0;
let time = 30;
let timer;
let isTimerRunning = false;

const clickBtn = document.getElementById('clickBtn');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
document.getElementById('bgMusic').volume = 0.01;

clickBtn.addEventListener('click', () => {
    if (!isTimerRunning) startTimer();

    scoreEl.textContent = ++score;

    const effect = document.createElement('div');
    effect.classList.add('effect');
    document.body.appendChild(effect);

    setTimeout(() => {
        effect.remove();
    }, 1000);
});

function startTimer() {
    isTimerRunning = true;
    timer = setInterval(() => {
        timerEl.textContent = --time;
        if (time <= 0) {
            clearInterval(timer);
            clickBtn.disabled = true;
            isTimerRunning = false;
            document.getElementById('finalScore').textContent = score;
            document.getElementById('gameOverScreen').classList.remove('hidden');
        }
    }, 1000);
}

window.restartGame = function () {
    score = 0;
    time = 30;
    isTimerRunning = false;
    scoreEl.textContent = score;
    timerEl.textContent = time;
    clickBtn.disabled = false;
    document.getElementById('gameOverScreen').classList.add('hidden');
};


const collection = new Collection('My game collection');

const game = new BaseGame('Speed Clicker');
game.minMaxPlayers = [1, 4];
game.age = 8;
game.addGenre('Arcade');
game.setMyRating(5);
game.setMyRating(4);

const expansion = new Expansions('Clicker Add-on', 'Speed Clicker');
expansion.addGenre('Competitive');

collection.addItem(game);
collection.addItem(expansion);

console.log('Game info:', game.getFullInfo());
console.log('Total in collection:', collection.countList());
console.log('Base games:', collection.countBaseGames());
console.log('Expansions:', collection.countExpansions());
