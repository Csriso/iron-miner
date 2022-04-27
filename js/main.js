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
let maxOres = 5;
let currentOres = 0;
let currentEnemies = 0;
let maxEnemies = 3;
let lastAttackSound = 0;
let timeCounter = 0;
let intervalCounter;
let collisionCount = 0;
let nextCollision = false;
let inTheShop = false;
let firstEntranceShop = true;
let difficultyLevelEnemyCount = 0;
let increaseDifficultyEnemyCount = false;
let increaseDifficultyEnemyHP = false;
let generateWave = true;
let waveCounter = 1;

const shop = { posX: 48, posY: 64, w: 48, h: 32 };
let fps = 60;

createEvents();

const refreshScore = () => {
  let scoreSelector = document.querySelector("#scoreViewer");
  let killsSelector = document.querySelector("#killsViewer");
  let coinsSelector = document.querySelector("#coinsViewer");
  let healthSelector = document.querySelector("#healthViewer");
  scoreSelector.innerText = player.score;
  killsSelector.innerText = player.kills;
  coinsSelector.innerText = player.coins;
  healthSelector.innerText = player.maxHealth;
};

const restartGame = () => {
  // RESET ALL VARS
  isGameOn = true;
  songPlaying = "";
  musicPlaying = true;
  player = new Player();
  arrEnemies = [];
  mapCollisions = [];
  mapObjectsArr = [];
  maxOres = 2;
  currentOres = 0;
  currentEnemies = 0;
  maxEnemies = 3;
  lastAttackSound = 0;
  timeCounter = 0;
  intervalCounter;
  collisionCount = 0;
  nextCollision = false;
  inTheShop = false;
  generateWave = true;
  difficultyLevelEnemyCount = 0;
  waveCounter = 1;
  increaseDifficultyEnemyCount = false;
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

const checkCoinsShop = () => {
  let bodyArmorPrice = document.querySelector("#body-armor .price").innerText;
  let swordPrice = document.querySelector("#sword .price").innerText;
  let bootsPrice = document.querySelector("#boots .price").innerText;
  let potionPrice = document.querySelector("#potion .price").innerText;
  let coins = player.coins;
  if (coins >= bodyArmorPrice) {
    document.querySelector("#item-armor").style.color = "black";
  } else {
    document.querySelector("#item-armor").style.color = "red";
  }
  if (coins >= swordPrice) {
    document.querySelector("#item-sword").style.color = "black";
  } else {
    document.querySelector("#item-sword").style.color = "red";
  }
  if (coins >= bootsPrice) {
    document.querySelector("#item-boots").style.color = "black";
  } else {
    document.querySelector("#item-boots").style.color = "red";
  }
  if (coins >= potionPrice) {
    document.querySelector("#item-potion").style.color = "black";
  } else {
    document.querySelector("#item-potion").style.color = "red";
  }
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

  if (increaseDifficultyEnemyCount === true) {
    maxEnemies *= 2;
    increaseDifficultyEnemyCount = false;
  }

  if (
    difficultyLevelEnemyCount !== Math.floor(player.score / 200) &&
    Math.floor(player.score / 200) <= 5
  ) {
    difficultyLevelEnemyCount = Math.floor(player.score / 200);
    increaseDifficultyEnemyCount = true;
  }

  if (currentOres < maxOres && generateWave === true) {
    while (currentOres < maxOres) {
      let randomHeightAndWidth = randomHeightAndWidthWithPlayer(player);

      let firstOre = new MapObject(
        randomHeightAndWidth.width,
        randomHeightAndWidth.height,
        "goldenOre"
      );
      mapObjectsArr.push(firstOre);
      currentOres++;
    }
  }

  //DIFFICULTY
  let hpDifficulty = 0;
  if (currentEnemies < maxEnemies && generateWave === true) {
    while (currentEnemies < maxEnemies) {
      let randomHeightAndWidth = randomHeightAndWidthWithPlayer(player);
      if (difficultyLevelEnemyCount === 0) {
        hpDifficulty = 1;
      } else {
        hpDifficulty = difficultyLevelEnemyCount;
      }
      const enemy = new Enemy(
        randomHeightAndWidth.width,
        randomHeightAndWidth.height,
        "normal",
        waveCounter * 100
      );
      currentEnemies++;
      arrEnemies.push(enemy);
    }
    generateWave = false;
  }

  if (currentEnemies === 0 && currentOres === 0) {
    if (maxOres <= 20) {
      maxOres++;
    }
    waveCounter++;
    document.querySelector("#waveViewer").innerText = waveCounter;
    generateWave = true;
  }

  if (arrEnemies.length !== 0) {
    arrEnemies.forEach((enemy, index) => {
      enemy.spawnPlayer();

      // COLLISIONS PLAYER-ENEMY ENEMY-PLAYER
      calculateNextCollision(enemy, player);
      calculateNextCollision(player, enemy);
      //

      //COLLISIONS BETWEEN ENEMIES
      // SOME PROBLEMS, ENEMIES GET STUCK, TO REVIEW
      // arrEnemies.forEach((enemySec, index2) => {
      //   if (enemy === enemySec || index === index2) {
      //     return;
      //   }
      //   // calculateNextCollision(enemy, enemySec);
      //   // calculateNextCollision(enemySec, enemy);
      // });

      enemy.findPlayer(player.posX, player.posY);
      if (collisionWithPlayer(enemy) && player.health > 0) {
        if (player.isAttacking === true) {
          attackSoundSelector();
          if (enemy.health <= 0) {
            player.kills++;
            currentEnemies--;
            arrEnemies.splice(index, 1);
            let mapObjectOnKill;
            if (player.kills % 5 === 0) {
              mapObjectOnKill = new MapObject(enemy.posX, enemy.posY, "heart");
            } else {
              mapObjectOnKill = new MapObject(enemy.posX, enemy.posY, "coin");
            }
            mapObjectsArr.push(mapObjectOnKill);
          }
          enemy.health -= player.damage;
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

  showHealthImage(player.health, player.maxHealth);

  if (mapObjectsArr.length !== 0) {
    mapObjectsArr.forEach((mapObject, index) => {
      mapObject.spawnObject();

      if (mapObject.type === "coin") {
        if (collisionDetectorWithSmallRange(player, mapObject)) {
          coinSound.play();
          player.score += 10;
          player.coins++;
          mapObjectsArr.splice(index, 1);
        }
      }
      if (mapObject.type === "heart") {
        if (collisionDetectorWithSmallRange(player, mapObject)) {
          player.health += 25;
          player.score++;
          heartSound.play();
          mapObjectsArr.splice(index, 1);
        }
      }

      if (mapObject.type === "goldenOre") {
        calculateNextCollision(player, mapObject);
        if (collisionDetectorWithHighRange(player, mapObject)) {
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

  //SHOP SCORE
  refreshScore();
  let shopSelector = document.querySelector("#store");
  if (collisionDetector(player, shop)) {
    if (firstEntranceShop) {
      storeInSound.play();
    }
    shopSelector.style.opacity = 1;
    inTheShop = true;
    firstEntranceShop = false;
  } else {
    firstEntranceShop = true;
    inTheShop = false;
    shopSelector.style.opacity = 0.5;
  }
  checkCoinsShop();

  //PLAYER DIES
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

  // MOVE THE PLAYER AFTER CHECKING ALL COLLISIONS FIRST
  player.keepMoving();

  if (isGameOn) {
    setTimeout(function () {
      requestAnimationFrame(gameLoop);
    }, 1000 / fps);
  }
};

// startGame();
