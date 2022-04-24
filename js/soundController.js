const setAllSoundsVolume = (volume) => {
  bgMusic.volume = volume;
  attackSound.volume = volume;
  attackFlesh.volume = volume;
  attackFlesh2.volume = volume;
  gruntPlayer100.volume = volume;
  gruntPlayer80.volume = volume;
  gruntPlayer60.volume = volume;
  gruntPlayer40.volume = volume;
  gruntPlayer20.volume = volume;
  playerDeadSound.volume = volume;
};
const attackSoundSelector = () => {
  if (timeCounter % 2 === 0) {
    attackFlesh.play();
    lastAttackSound = 1;
  } else if (timeCounter % 2 === 1) {
    attackFlesh2.play();
    lastAttackSound = 0;
  }
};

const playerSounds = (health) => {
  if (timeCounter % 2 === 0) {
    gruntPlayer100.play();
  } else if (timeCounter % 2 === 1) {
    gruntPlayer80.play();
  }
};
