class Player {
  constructor() {
    this.direction = 0;
    this.health = 100;
    this.maxHealth = 100;
    this.stamina = 100;
    this.posX = 320;
    this.posY = 320;
    this.w = 16;
    this.h = 16;
    this.speed = 2;
    this.totalFrame = 0;
    this.lastFrame = 0;
    this.playerMoving = false;
    this.movementType = 0;
    this.movingX = 0;
    this.movingY = 0;
    this.isAttacking = false;
    this.kills = 0;
    this.score = 0;
    this.coins = 0;
    this.canMoveRight = true;
    this.canMoveLeft = true;
    this.canMoveDown = true;
    this.canMoveUp = true;
    this.attackDamage = 0;
    this.damage = 50;
  }
  spawnPlayer = () => {
    this.create();
  };
  reciveDamage = (damage) => {
    this.health -= damage;
  };
  keepMoving = () => {
    if (
      this.movingX === 1 &&
      this.movingY === 0 &&
      this.canMoveRight === true
    ) {
      this.posX += this.speed;
    } else if (
      this.movingX === -1 &&
      this.movingY === 0 &&
      this.canMoveLeft === true
    ) {
      this.posX -= this.speed;
    } else if (
      this.movingY === 1 &&
      this.movingX === 0 &&
      this.canMoveDown === true
    ) {
      this.posY += this.speed;
    } else if (
      this.movingY === -1 &&
      this.movingX === 0 &&
      this.canMoveUp === true
    ) {
      this.posY -= this.speed;
    }
  };
  eventCatcherMovePlayer = (posX, posY, keyEvent) => {
    if (
      posY === undefined &&
      posX === undefined &&
      keyEvent === "keyDownSpace"
    ) {
      this.isAttacking = true;
    } else if (
      posY === undefined &&
      posX === undefined &&
      keyEvent === "keyUpSpace"
    ) {
      this.isAttacking = false;
    }
    if (posX && posX !== undefined) {
      // RIGHT
      if (keyEvent === "keydown" && this.movingY === 0 && this.movingX === 0) {
        this.movementType = 3;
        this.movingX = 1;
        this.playerMoving = true;
      } else if (keyEvent === "keyup") {
        this.movingX = 0;
        this.playerMoving = false;
      }
    } else if (!posX && posX !== undefined) {
      // LEFT
      if (keyEvent === "keydown" && this.movingY === 0 && this.movingX === 0) {
        this.movementType = 1;
        this.movingX = -1;
        this.playerMoving = true;
      } else if (keyEvent === "keyup") {
        this.movingX = 0;
        this.playerMoving = false;
      }
    } else if (!posY && posY !== undefined) {
      // DOWN
      if (keyEvent === "keydown" && this.movingY === 0 && this.movingX === 0) {
        this.movementType = 0;
        this.movingY = 1;
        this.playerMoving = true;
      } else if (keyEvent === "keyup") {
        this.movingY = 0;
        this.playerMoving = false;
      }
    } else if (posY && posY !== undefined) {
      // UP
      if (keyEvent === "keydown" && this.movingY === 0 && this.movingX === 0) {
        this.movementType = 2;
        this.movingY = -1;
        this.playerMoving = true;
      } else if (keyEvent === "keyup") {
        this.movingY = 0;
        this.playerMoving = false;
      }
    }
  };
  create = () => {
    let imgToUse;
    if (this.isAttacking === false) {
      if (this.movementType === 0 && this.playerMoving === true) {
        imgToUse = charWalkImgDown;
      } else if (this.movementType === 1 && this.playerMoving === true) {
        imgToUse = charWalkImgLeft;
      } else if (this.movementType === 2 && this.playerMoving === true) {
        imgToUse = charWalkImgUp;
      } else if (this.movementType === 3 && this.playerMoving === true) {
        imgToUse = charWalkImgRight;
      } else if (this.movementType === 0 && this.playerMoving === false) {
        imgToUse = charImgDown;
      } else if (this.movementType === 1 && this.playerMoving === false) {
        imgToUse = charImgLeft;
      } else if (this.movementType === 2 && this.playerMoving === false) {
        imgToUse = charImgUp;
      } else if (this.movementType === 3 && this.playerMoving === false) {
        imgToUse = charImgRight;
      }
    } else if (this.isAttacking === true) {
      if (this.isAttacking && this.movementType === 0) {
        imgToUse = charAttackImgDown;
      } else if (this.isAttacking && this.movementType === 1) {
        imgToUse = charAttackImgLeft;
      } else if (this.isAttacking && this.movementType === 2) {
        imgToUse = charAttackImgUp;
      } else if (this.isAttacking && this.movementType === 3) {
        imgToUse = charAttackImgRight;
      }
    }
    // DEFAULT TILESIZE
    let tileHeight = 16;
    let tileWidth = 16;
    let tileOutputSize = 1;

    let tileSize = 16;

    let atlasHeight = tileHeight;
    let atlasWidth = tileWidth;
    let mapIndex = 0;

    // ATLAS SIZE DEPENDING OF THE SPRITE USED
    if (this.playerMoving === true && this.isAttacking === false) {
      atlasHeight = 17;
      atlasWidth = 96;
    } else if (this.playerMoving === false && this.isAttacking === false) {
      atlasHeight = 16;
      atlasWidth = 96;
    } else if (this.isAttacking === true) {
      // UP OR DOWN
      if (this.movementType === 0 || this.movementType === 2) {
        atlasHeight = 23;
        atlasWidth = 138;
      } // RIGHT OR LEFT
      else if (this.movementType === 1 || this.movementType === 3) {
        atlasHeight = 21;
        atlasWidth = 96;
      }
    }
    // ANIMATION VELOCITY
    if (this.totalFrame === 5) {
      this.totalFrame = 0;
      if (this.lastFrame <= 4) {
        this.lastFrame++;
      } else {
        this.lastFrame = 0;
      }
    }

    tileHeight = atlasHeight;
    tileWidth = atlasWidth / 6;

    let updatedTileSizeWx = tileWidth * tileOutputSize;
    let updatedTileSizeHy = tileHeight * tileOutputSize;
    let widthIterator = atlasWidth / 6;
    // let arrayTest = [];
    // console.log(tileHeight, tileWidth, atlasHeight, atlasWidth);
    for (let row = 0; row < atlasWidth; row += widthIterator) {
      // arrayTest.push(row);
      // let newposX = this.posX * tileOutputSize;
      // let newposY = this.posY * tileOutputSize;
      let animationToShow = tileWidth * this.lastFrame;
      // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
      context.drawImage(
        imgToUse,
        animationToShow, //ORIGIN TILESET X
        0, //ORIGIN TILESET Y
        tileWidth, // TILESET WIDTH
        tileHeight, // TILESET HEIGHT
        this.posX, //POSITION CANVAS X
        this.posY, //POSITION CANVAS Y
        updatedTileSizeWx, // SIZE OUTPUT MODIFIER X
        updatedTileSizeHy // SIZE OUTPUT MODIFIER Y
      );
      mapIndex++;
    }
    this.totalFrame++;
  };
}
