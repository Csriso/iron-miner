class Player {
  constructor() {
    this.direction = 0;
    this.moving = false;
    this.health = 100;
    this.stamina = 100;
    this.posX = 100;
    this.posY = 100;
    this.w = 16;
    this.h = 16;
    this.speed = 3;
    this.totalFrame = 0;
    this.lastFrame = 0;
    this.frames = [0, 16, 32, 48, 64];
    this.playerMoving = false;
    this.movementType = 0;
    this.movingX = 0;
    this.movingY = 0;
    this.isAttacking = false;
  }
  spawnPlayer = () => {
    this.create();
  };
  animateIdle = () => {};
  animateWalk = () => {};
  animateAttack = () => {};
  keepMoving = () => {
    if (this.movingX === 1 && this.movingY === 0) {
      this.posX += this.speed;
    } else if (this.movingX === -1 && this.movingY === 0) {
      this.posX -= this.speed;
    } else if (this.movingY === 1 && this.movingX === 0) {
      this.posY += this.speed;
    } else if (this.movingY === -1 && this.movingX === 0) {
      this.posY -= this.speed;
    }
  };
  eventCatcherMovePlayer = (posX, posY, keyEvent) => {
    if (
      posY === undefined &&
      posX === undefined &&
      keyEvent === "keyDownSpace"
    ) {
      this.playerMoving = false;
      this.isAttacking = true;
    } else if (
      posY === undefined &&
      posX === undefined &&
      keyEvent === "keyUpSpace"
    ) {
      this.playerMoving = false;
      this.isAttacking = false;
    }
    if (posX && posX !== undefined) {
      //DERECHA
      if (keyEvent === "keydown" && this.movingY === 0 && this.movingX === 0) {
        this.movementType = 3;
        this.movingX = 1;
        this.playerMoving = true;
      } else if (keyEvent === "keyup") {
        this.movingX = 0;
        this.playerMoving = false;
      }
    } else if (!posX && posX !== undefined) {
      //IZQUIERDA
      if (keyEvent === "keydown" && this.movingY === 0 && this.movingX === 0) {
        this.movementType = 1;
        this.movingX = -1;
        this.playerMoving = true;
      } else if (keyEvent === "keyup") {
        this.movingX = 0;
        this.playerMoving = false;
      }
    } else if (!posY && posY !== undefined) {
      //ABAJO
      if (keyEvent === "keydown" && this.movingY === 0 && this.movingX === 0) {
        this.movementType = 0;
        this.movingY = 1;
        this.playerMoving = true;
      } else if (keyEvent === "keyup") {
        this.movingY = 0;
        this.playerMoving = false;
      }
    } else if (posY && posY !== undefined) {
      // ARRIBA
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
    // TAMAÑO TILE DEFECTO
    let tileHeight = 16;
    let tileWidth = 16;
    let tileOutputSize = 1;

    let tileSize = 16;

    let atlasHeight = tileHeight;
    let atlasWidth = tileWidth;
    let mapIndex = 0;

    // CAMBIO TAMAÑO DE ATLAS Y DE OUTPUT DEL PERSONAJE SEGUN SE MUEVE O SE QUEDA QUIETO (16px QUIETO 17px MOVIENDOSE)
    if (this.playerMoving === true && this.isAttacking === false) {
      atlasHeight = 17;
      atlasWidth = 96;
    } else if (this.playerMoving === false && this.isAttacking === false) {
      atlasHeight = 16;
      atlasWidth = 96;
    } else if (this.isAttacking === true) {
      //ARRIBA O ABAJO
      if (this.movementType === 0 || this.movementType === 2) {
        atlasHeight = 23;
        atlasWidth = 138;
      } // DER O IZQ
      else if (this.movementType === 1 || this.movementType === 3) {
        atlasHeight = 21;
        atlasWidth = 96;
      }
    }
    // VELOCIDAD DE ANIMACION
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
        animationToShow, //ORIGEN TILESET X
        0, //ORIGEN TILESET Y
        tileWidth, // TILESET WIDTH (VARIA SEGUN SPRITE)
        tileHeight, // TILESET HEIGHT (VARIA SEGUN SPRITE)
        this.posX, //POSICION CANVAS X
        this.posY, //POSICION CANVAS Y
        updatedTileSizeWx, // AUMENTO X
        updatedTileSizeHy // AUMENTO Y
      );
      mapIndex++;
    }
    this.totalFrame++;
    // console.log(arrayTest);
  };
}
