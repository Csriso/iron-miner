const canvas = document.getElementById("test-canvas");
const context = canvas.getContext("2d");

// GLOBAL VARS
let isGameOn = true;
let game;
let songPlaying = "";
let musicPlaying = true;
let player = new Player();
let arrEnemies = [];
let enemyCount = 0;
let maxEnemies = 3;
createEvents();

const restartGame = () => {
  console.log("RESTARTING");
  isGameOn = true;
  game;
  soundPlaying = "";
  player = new Player();
  arrEnemies = [];
  enemyCount = 0;
  maxEnemies = 3;
  document.querySelector("canvas").style.display = "block";
  document.querySelector("#startBtn").style.display = "none";
  document.querySelector("#gameoverBtn").style.display = "none";
  startGame();
};

const startGame = () => {
  document.querySelector("canvas").style.display = "block";
  document.querySelector("#startBtn").style.display = "none";
  gameLoop();
  bgMusic.preload = "auto";
  bgMusic.load();
  bgMusic.loop = true;
  bgMusic.play();
  // bgMusic.volume = 0.1;
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
    arrEnemies.forEach((enemy, index) => {
      enemy.spawnPlayer();
      enemy.findPlayer(player.posX, player.posY);
      if (collisionWithPlayer(enemy) && player.health > 0) {
        if (player.isAttacking === true) {
          if (enemy.health <= 0) {
            enemyCount--;
            arrEnemies.splice(index, 1);
          }
          enemy.health -= 50;
        }
        player.health -= 1;
      }
    });
  }

  if (player.health <= 0) {
    isGameOn = false;
    bgMusic.st;
    document.querySelector("canvas").style.display = "none";
    document.querySelector("#gameoverBtn").style.display = "block";
  }

  if (isGameOn) {
    setTimeout(function () {
      requestAnimationFrame(gameLoop);
    }, 1000 / 60);
  }
};

// startGame();
