const canvas = document.getElementById("test-canvas");
const context = canvas.getContext("2d");
// context.scale(2, 2);
let isGameOn = true;
let game;
let soundPlaying = "";
let player = new Player();
let arrEnemies = [];

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
  if (isGameOn) {
    setTimeout(function () {
      requestAnimationFrame(gameLoop);
    }, 1000 / 60);
  }
};

startGame();
