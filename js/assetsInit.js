let bgMusic = new Audio("./assets/music/main.wav");
bgMusic.preload = "auto";
let attackSound = new Audio("./assets/sounds/swordswing.wav");
attackSound.preload = "auto";
let attackFlesh = new Audio("./assets/sounds/swordflesh.wav");
attackFlesh.preload = "auto";
let attackFlesh2 = new Audio("./assets/sounds/swordflesh2.wav");
attackFlesh2.preload = "auto";
let gruntPlayer100 = new Audio("./assets/sounds/grunt1.wav");
gruntPlayer100.preload = "auto";
let gruntPlayer80 = new Audio("./assets/sounds/grunt3.wav");
gruntPlayer80.preload = "auto";
let gruntPlayer60 = new Audio("./assets/sounds/grunt2.wav");
gruntPlayer60.preload = "auto";
let gruntPlayer40 = new Audio("./assets/sounds/grunt7.wav");
gruntPlayer40.preload = "auto";
let gruntPlayer20 = new Audio("./assets/sounds/grunt4.wav");
gruntPlayer20.preload = "auto";
let playerDeadSound = new Audio("./assets/sounds/playerdead.wav");
playerDeadSound.preload = "auto";
let coinSound = new Audio("./assets/sounds/coin.wav");
coinSound.preload = "auto";
let heartSound = new Audio("./assets/sounds/heart.wav");
heartSound.preload = "auto";
let pickaxeSound = new Audio("./assets/sounds/pickaxe.wav");
pickaxeSound.preload = "auto";
let storeSound = new Audio("./assets/sounds/store.wav");
storeSound.preload = "auto";
let storeInSound = new Audio("./assets/sounds/storein.wav");
storeInSound.preload = "auto";
// let attackHit = new Audio("./assets/title.wav");

//IDLE CHARACTER
const charImgDown = new Image();
const charImgLeft = new Image();
const charImgUp = new Image();
const charImgRight = new Image();
charImgDown.src = "./assets/char/idle/char_down.png";
charImgLeft.src = "./assets/char/idle/char_left.png";
charImgUp.src = "./assets/char/idle/char_up.png";
charImgRight.src = "./assets/char/idle/char_right.png";

//MOVING CHARACTER
const charWalkImgDown = new Image();
const charWalkImgLeft = new Image();
const charWalkImgUp = new Image();
const charWalkImgRight = new Image();
charWalkImgDown.src = "./assets/char/walk/char_down.png";
charWalkImgLeft.src = "./assets/char/walk/char_left.png";
charWalkImgUp.src = "./assets/char/walk/char_up.png";
charWalkImgRight.src = "./assets/char/walk/char_right.png";

//ATTACK CHARACTER
const charAttackImgDown = new Image();
const charAttackImgLeft = new Image();
const charAttackImgUp = new Image();
const charAttackImgRight = new Image();
charAttackImgDown.src = "./assets/char/attack/char_down.png";
charAttackImgLeft.src = "./assets/char/attack/char_left.png";
charAttackImgUp.src = "./assets/char/attack/char_up.png";
charAttackImgRight.src = "./assets/char/attack/char_right.png";

//ENEMY CHARACTER IDLE
const enemyIdleImgDown = new Image();
const enemyIdleImgLeft = new Image();
const enemyIdleImgUp = new Image();
const enemyIdleImgRight = new Image();
enemyIdleImgDown.src = "./assets/enemy/idle/idle_down.png";
enemyIdleImgLeft.src = "./assets/enemy/idle/idle_left.png";
enemyIdleImgUp.src = "./assets/enemy/idle/idle_up.png";
enemyIdleImgRight.src = "./assets/enemy/idle/idle_right.png";

//ENEMY CHARACTER WALK
const enemyWalkImgDown = new Image();
const enemyWalkImgLeft = new Image();
const enemyWalkImgUp = new Image();
const enemyWalkImgRight = new Image();
enemyWalkImgDown.src = "./assets/enemy/walk/walk_down.png";
enemyWalkImgLeft.src = "./assets/enemy/walk/walk_left.png";
enemyWalkImgUp.src = "./assets/enemy/walk/walk_up.png";
enemyWalkImgRight.src = "./assets/enemy/walk/walk_right.png";

//ENEMY CHARACTER WALK
const bossIdle = new Image();
bossIdle.src = "./assets/boss/golem/idle.png";

//ATTACK ENEMY2
const enemy2AttackImgDown = new Image();
const enemy2AttackImgLeft = new Image();
const enemy2AttackImgUp = new Image();
const enemy2AttackImgRight = new Image();
enemy2AttackImgDown.src = "./assets/enemy2/attackdown.png";
enemy2AttackImgLeft.src = "./assets/enemy2/attackleft.png";
enemy2AttackImgUp.src = "./assets/enemy2/attacktop.png";
enemy2AttackImgRight.src = "./assets/enemy2/attackright.png";

//ENEMY2 CHARACTER IDLE
const enemy2IdleImgDown = new Image();
const enemy2IdleImgLeft = new Image();
const enemy2IdleImgUp = new Image();
const enemy2IdleImgRight = new Image();
enemy2IdleImgDown.src = "./assets/enemy2/idledown.png";
enemy2IdleImgLeft.src = "./assets/enemy2/idleleft.png";
enemy2IdleImgUp.src = "./assets/enemy2/idletop.png";
enemy2IdleImgRight.src = "./assets/enemy2/idleright.png";

//ENEMY2 CHARACTER WALK
const enemy2WalkImgDown = new Image();
const enemy2WalkImgLeft = new Image();
const enemy2WalkImgUp = new Image();
const enemy2WalkImgRight = new Image();
enemy2WalkImgDown.src = "./assets/enemy2/runningdown.png";
enemy2WalkImgLeft.src = "./assets/enemy2/runningleft.png";
enemy2WalkImgUp.src = "./assets/enemy2/runningtop.png";
enemy2WalkImgRight.src = "./assets/enemy2/runningright.png";

// ITEMS
const heartSprite = new Image();
heartSprite.src = "./assets/heart.png";
const goldenOreSprite = new Image();
goldenOreSprite.src = "./assets/goldenore.png";
const coinSprite = new Image();
coinSprite.src = "./assets/coin.png";
