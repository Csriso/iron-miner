const canvas = document.getElementById("test-canvas");
const context = canvas.getContext("2d");
// context.scale(2, 2);
let isGameOn = true;
let game;
let soundPlaying = "";
let player = new Player();
let arrEnemies = [];
let enemyCount = 0;
let maxEnemies = 1;

const startGame = () => {
  createEvents();
  gameLoop();
  bgMusic.preload = "auto";
  bgMusic.load();
  // sound.play();
};

const gameLoop = () => {
  drawAllTiles();
  player.spawnPlayer();
  player.keepMoving();
  if (enemyCount < maxEnemies) {
    let randomWidth = randomNumber(16, canvas.width - 16);
    let randomHeight = randomNumber(16, canvas.width - 16);
    const enemy = new Enemy(randomWidth, randomHeight);
    arrEnemies.push(enemy);
    enemyCount++;
  }
  if (arrEnemies.length !== 0) {
    arrEnemies.forEach((enemy) => {
      enemy.spawnPlayer();
      enemy.findPlayer(player.posX, player.posY);
      if (collisionWithPlayer(enemy) && player.health > 0) {
        player.health -= 1;
        console.log(player.health);
      }
    });
  }

  if (isGameOn) {
    setTimeout(function () {
      requestAnimationFrame(gameLoop);
    }, 1000 / 60);
  }
};

startGame();
