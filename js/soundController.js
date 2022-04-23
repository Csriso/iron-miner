let setAllSoundsVolume = (volume) => {
  bgMusic.volume = volume;
  attackSound.volume = volume;
  attackFlesh.volume = volume;
  attackFlesh2.volume = volume;
};
let attackSoundSelector = () => {
  if (timeCounter % 2 === 0) {
    attackFlesh.play();
    lastAttackSound = 1;
  } else if (timeCounter % 2 === 1) {
    attackFlesh2.play();
    lastAttackSound = 0;
  }
};
