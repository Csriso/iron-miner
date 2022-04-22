let bgMusic = new Audio("../assets/title.wav");
bgMusic.preload = "auto";
bgMusic.load();
// bgMusic.play();

//IDLE CHARACTER
const charImgDown = new Image();
const charImgLeft = new Image();
const charImgUp = new Image();
const charImgRight = new Image();
charImgDown.src = "../assets/char/idle/char_down.png";
charImgLeft.src = "../assets/char/idle/char_left.png";
charImgUp.src = "../assets/char/idle/char_up.png";
charImgRight.src = "../assets/char/idle/char_right.png";

//MOVING CHARACTER

const charWalkImgDown = new Image();
const charWalkImgLeft = new Image();
const charWalkImgUp = new Image();
const charWalkImgRight = new Image();
charWalkImgDown.src = "../assets/char/walk/char_down.png";
charWalkImgLeft.src = "../assets/char/walk/char_left.png";
charWalkImgUp.src = "../assets/char/walk/char_up.png";
charWalkImgRight.src = "../assets/char/walk/char_right.png";

//ATTACK CHARACTER

const charAttackImgDown = new Image();
const charAttackImgLeft = new Image();
const charAttackImgUp = new Image();
const charAttackImgRight = new Image();
charAttackImgDown.src = "../assets/char/attack/char_down.png";
charAttackImgLeft.src = "../assets/char/attack/char_left.png";
charAttackImgUp.src = "../assets/char/attack/char_up.png";
charAttackImgRight.src = "../assets/char/attack/char_right.png";
