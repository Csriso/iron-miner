const canvas = document.getElementById("test-canvas");
const context = canvas.getContext("2d");

// GLOBAL VARS
let isGameOn = true;
let game;
let songPlaying = "";
let musicPlaying = true;
let player = new Player();
let arrEnemies = [];
let mapCollisions = [];
let enemyCount = 0;
let maxEnemies = 3;
let lastAttackSound = 0;
let timeCounter = 0;
let intervalCounter;
let collisionBoolean = false;
let collisionCount = 0;
createEvents();

const restartGame = () => {
  collisionBoolean = false;
  isGameOn = true;
  soundPlaying = "";
  player = new Player();
  arrEnemies = [];
  enemyCount = 0;
  maxEnemies = 3;
  document.querySelector("canvas").style.display = "block";
  document.querySelector("#startBtn").style.display = "none";
  document.querySelector("#gameoverBtn").style.display = "none";
  document.querySelector("#nameLogo").style.display = "none";
  document.querySelector("#health-img").src = "./assets/health/56px.png";
  startGame();
};

const startGame = () => {
  intervalCounter = setInterval(() => {
    timeCounter++;
  }, 1000);
  document.querySelector("#nameLogo").style.display = "none";
  document.querySelector("canvas").style.display = "block";
  document.querySelector("#startBtn").style.display = "none";

  gameLoop(1);
  bgMusic.preload = "auto";
  bgMusic.load();
  bgMusic.loop = true;
  bgMusic.play();
  // bgMusic.volume = 0.1;
};

const gameLoop = (firstExec) => {
  collisionCount = 0;
  if (firstExec === 1) {
    drawAllTiles(1);
  } else {
    drawAllTiles(0);
  }
  player.spawnPlayer();
  mapCollisions.forEach((collisionObj) => {
    if (collisionDetector(player, collisionObj)) {
      collisionCount++;
    }
  });
  if (collisionCount >= 1) {
    collisionBoolean = true;
  }

  if (collisionBoolean === false) {
    player.keepMoving();
  }
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
          attackSoundSelector();
          if (enemy.health <= 0) {
            enemyCount--;
            arrEnemies.splice(index, 1);
          }
          enemy.health -= 50;
        }
        player.health -= 1;
        showHealthImage(player.health);
      } else if (player.isAttacking && !collisionWithPlayer(enemy)) {
        attackSound.play();
      }
    });
  }

  if (player.health <= 0) {
    showHealthImage(player.health);
    clearInterval(intervalCounter);
    mapCollisions = [];
    timeCounter = 0;
    isGameOn = false;
    bgMusic.pause();
    bgMusic.currentTime = 0;
    document.querySelector("canvas").style.display = "none";
    document.querySelector("#nameLogo").style.display = "block";
    document.querySelector("#gameoverBtn").style.display = "block";
  }

  if (isGameOn) {
    setTimeout(function () {
      requestAnimationFrame(gameLoop);
    }, 1000 / 60);
  }
};

// startGame();
