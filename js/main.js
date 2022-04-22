const canvas = document.getElementById("test-canvas");
const context = canvas.getContext("2d");
let isGameOn = true;
let game;
let soundPlaying = "";
let player = new Player();

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
