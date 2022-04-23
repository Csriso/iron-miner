let bgMusic = new Audio("../assets/music/main.wav");
bgMusic.preload = "auto";
let attackSound = new Audio("../assets/sounds/swordswing.wav");
attackSound.preload = "auto";
let attackFlesh = new Audio("../assets/sounds/swordflesh.wav");
attackFlesh.preload = "auto";
let attackFlesh2 = new Audio("../assets/sounds/swordflesh2.wav");
attackFlesh2.preload = "auto";

// let attackHit = new Audio("../assets/title.wav");

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

//ENEMY CHARACTER IDLE
const enemyIdleImgDown = new Image();
const enemyIdleImgLeft = new Image();
const enemyIdleImgUp = new Image();
const enemyIdleImgRight = new Image();
enemyIdleImgDown.src = "../assets/enemy/idle/idle_down.png";
enemyIdleImgLeft.src = "../assets/enemy/idle/idle_left.png";
enemyIdleImgUp.src = "../assets/enemy/idle/idle_up.png";
enemyIdleImgRight.src = "../assets/enemy/idle/idle_right.png";

//ENEMY CHARACTER WALK
const enemyWalkImgDown = new Image();
const enemyWalkImgLeft = new Image();
const enemyWalkImgUp = new Image();
const enemyWalkImgRight = new Image();
enemyWalkImgDown.src = "../assets/enemy/walk/walk_down.png";
enemyWalkImgLeft.src = "../assets/enemy/walk/walk_left.png";
enemyWalkImgUp.src = "../assets/enemy/walk/walk_up.png";
enemyWalkImgRight.src = "../assets/enemy/walk/walk_right.png";
