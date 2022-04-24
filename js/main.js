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
let mapObjectsArr = [];
let enemyCount = 0;
let maxEnemies = 3;
let lastAttackSound = 0;
let timeCounter = 0;
let intervalCounter;
let collisionBoolean = false;
let collisionCount = 0;
let collisionDetected;

let fps = 60;

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
    } else {
      collisionBoolean = false;
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
    const enemy = new Enemy(randomWidth, randomHeight, "normal");
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
            player.kills++;
            enemyCount--;
            arrEnemies.splice(index, 1);
            let mapObjectOnKill;
            if (player.kills % 5 === 0) {
              mapObjectOnKill = new MapObject(enemy.posX, enemy.posY, "heart");
            } else {
              mapObjectOnKill = new MapObject(enemy.posX, enemy.posY, "coin");
            }
            mapObjectsArr.push(mapObjectOnKill);
          }
          enemy.health -= 50;
        }
        player.reciveDamage(1);
        playerSounds(player.health);
        showHealthImage(player.health);
      } else if (player.isAttacking && !collisionWithPlayer(enemy)) {
        attackSound.play();
      }
    });
  }
  showHealthImage(player.health);

  if (mapObjectsArr.length !== 0) {
    mapObjectsArr.forEach((mapObject, index) => {
      mapObject.spawnObject();
      if (collisionDetector(player, mapObject)) {
        if (mapObject.type === "coin") {
          coinSound.play();
          player.score += 10;
          player.coins++;
          mapObjectsArr.splice(index, 1);
        } else if (mapObject.type === "heart") {
          player.health += 25;
          player.score++;
          heartSound.play();
          mapObjectsArr.splice(index, 1);
        }
      }
    });
  }

  if (player.health <= 0) {
    bgMusic.pause();
    bgMusic.currentTime = 0;
    gruntPlayer20.play();
    showHealthImage(player.health);
    clearInterval(intervalCounter);
    mapCollisions = [];
    timeCounter = 0;
    isGameOn = false;
    document.querySelector("canvas").style.display = "none";
    document.querySelector("#nameLogo").style.display = "block";
    document.querySelector("#gameoverBtn").style.display = "block";
  }

  if (isGameOn) {
    setTimeout(function () {
      requestAnimationFrame(gameLoop);
    }, 1000 / fps);
  }
};

// startGame();
