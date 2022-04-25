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
let enemyCount = 1;
let maxEnemies = 2;
let lastAttackSound = 0;
let timeCounter = 0;
let intervalCounter;
let collisionCount = 0;
let collisionDetected;
let nextCollision = false;
let inTheShop = false;
let maxOres = 2;
let currentOres = 0;
let currentEnemies = 0;
const shop = { posX: 48, posY: 64, w: 48, h: 32 };

let fps = 60;

createEvents();

const refreshScore = () => {
  let scoreSelector = document.querySelector("#scoreViewer");
  let killsSelector = document.querySelector("#killsViewer");
  let coinsSelector = document.querySelector("#coinsViewer");
  scoreSelector.innerText = player.score;
  killsSelector.innerText = player.kills;
  coinsSelector.innerText = player.coins;
};

const restartGame = () => {
  isGameOn = true;
  soundPlaying = "";
  player = new Player();
  arrEnemies = [];
  enemyCount = 0;
  maxEnemies = 2;
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
  player.canMoveUp = true;
  player.canMoveDown = true;
  player.canMoveLeft = true;
  player.canMoveRight = true;
  collisionCount = 0;
  nextCollision = false;
  if (firstExec === 1) {
    drawAllTiles(1);
  } else {
    drawAllTiles(0);
  }
  player.spawnPlayer();
  mapCollisions.forEach((collisionObj) => {
    calculateNextCollision(player, collisionObj);
  });

  if (currentOres < maxOres) {
    currentOres++;
    let firstOre = new MapObject(randomWidth(), randomHeight(), "goldenOre");
    mapObjectsArr.push(firstOre);
  }
  console.log(currentEnemies, maxEnemies);
  if (currentEnemies < maxEnemies) {
    let randomHeightAndWidth = randonHeightAndWidth();
    const enemy = new Enemy(
      randomHeightAndWidth.width,
      randomHeightAndWidth.height,
      "normal"
    );
    currentEnemies++;
    arrEnemies.push(enemy);
  }

  if (arrEnemies.length !== 0) {
    arrEnemies.forEach((enemy, index) => {
      enemy.spawnPlayer();
      calculateNextCollision(enemy, player);
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
      } else if (player.isAttacking && !collisionWithPlayer(enemy)) {
        attackSound.play();
      }
    });
  } else if (player.isAttacking) {
    attackSound.play();
  }
  player.keepMoving();

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
        } else if (mapObject.type === "goldenOre") {
          if (player.isAttacking === true) {
            pickaxeSound.play();
            currentOres--;
            mapObjectsArr.splice(index, 1);
            let mapObjectOnMine = new MapObject(
              mapObject.posX,
              mapObject.posY,
              "coin"
            );
            mapObjectsArr.push(mapObjectOnMine);
          }
        }
      }
    });
  }
  refreshScore();
  let shopSelector = document.querySelector("#store");
  if (collisionDetector(player, shop)) {
    shopSelector.style.opacity = 1;
    inTheShop = true;
  } else {
    inTheShop = false;
    shopSelector.style.opacity = 0.2;
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
