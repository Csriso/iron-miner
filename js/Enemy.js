class Enemy {
  constructor(posX, posY, type, maxHP) {
    this.direction = 0;
    this.health = maxHP;
    this.stamina = 100;
    this.posX = posX;
    this.posY = posY;
    this.speed = 1;
    this.w = 16;
    this.h = 16;
    this.totalFrame = 0;
    this.lastFrame = 0;
    this.playerMoving = false;
    this.movementType = 0;
    this.movingX = 0;
    this.movingY = 0;
    this.isAttacking = false;
    this.difXdifYcounter = 0;
    this.type = type;
    this.canMoveRight = true;
    this.canMoveLeft = true;
    this.canMoveDown = true;
    this.canMoveUp = true;
    this.swing = false;
    this.swingCounter = 0;
    this.swingHasStarted = false;
  }
  spawnPlayer = () => {
    this.create();
  };

  findPlayer = (x, y) => {
    let difX = Math.abs(this.posX - x);
    let difY = Math.abs(this.posY - y);

    // console.log(difX, difY, this.posX, this.posY, x, y);
    // posX.... -posY...+hamburguers -peanuts wut
    // https://media.tenor.co/images/fa3143e89d76490bdf83835cbd3d9fed/tenor.gif
    let swingSize = 32;
    if (this.swingCounter >= swingSize) {
      this.swingCounter = 0;
    }

    let difXY = Math.abs(difX - difY);
    if (difXY < 0) {
      difXY *= -1;
    }

    if (difXY >= 32) {
      this.swingHasStarted = false;
    }

    if (this.posX < 16) {
      this.movingX = 1;
      this.movementType = 3;
      this.playerMoving = true;
      this.posX += this.speed;
    } else if (this.posX > canvas.width - 16) {
      this.movingX = -1;
      this.movementType = 1;
      this.playerMoving = true;
      this.posX -= this.speed;
    } else if (this.posY > canvas.height - 16) {
      this.movingY = -1;
      this.movementType = 2;
      this.playerMoving = true;
      this.posY -= this.speed;
    } else if (difXY === 0 || this.swingHasStarted) {
      if (this.swing) {
        if (this.posX >= x && this.canMoveLeft) {
          this.movingX = -1;
          this.movementType = 1;
          this.playerMoving = true;
          this.posX -= this.speed;
        } else if (this.posX < x && this.canMoveRight) {
          this.movingX = 1;
          this.movementType = 3;
          this.playerMoving = true;
          this.posX += this.speed;
        }
        this.swingCounter++;
        if (this.swingCounter >= swingSize) {
          this.swing = false;
        }
      } else if (!this.swing) {
        if (this.posY > y && this.canMoveUp) {
          this.movingY = -1;
          this.movementType = 2;
          this.playerMoving = true;
          this.posY -= this.speed;
        } else if (this.posY < y && this.canMoveDown) {
          this.movingY = 1;
          this.movementType = 0;
          this.playerMoving = true;
          this.posY += this.speed;
        }
        this.swingCounter++;
        if (this.swingCounter >= swingSize) {
          this.swing = true;
        }
      }
      this.swingHasStarted = true;
    } else if (difX > difY) {
      if (this.posX >= x && this.canMoveLeft) {
        this.movingX = -1;
        this.movementType = 1;
        this.playerMoving = true;
        this.posX -= this.speed;
      } else if (this.posX < x && this.canMoveRight) {
        this.movingX = 1;
        this.movementType = 3;
        this.playerMoving = true;
        this.posX += this.speed;
      }
      this.swingHasStarted = false;
      this.swingCounter = 0;
    } else if (difX < difY) {
      if (this.posY > y && this.canMoveUp) {
        this.movingY = -1;
        this.movementType = 2;
        this.playerMoving = true;
        this.posY -= this.speed;
      } else if (this.posY < y && this.canMoveDown) {
        this.movingY = 1;
        this.movementType = 0;
        this.playerMoving = true;
        this.posY += this.speed;
      }
      this.swingHasStarted = false;
      this.swingCounter = 0;
    }
  };

  spriteSelector = (type) => {
    if (type === "normal") {
      if (this.movementType === 0 && this.playerMoving === true) {
        return enemyWalkImgDown;
      } else if (this.movementType === 1 && this.playerMoving === true) {
        return enemyWalkImgLeft;
      } else if (this.movementType === 2 && this.playerMoving === true) {
        return enemyWalkImgUp;
      } else if (this.movementType === 3 && this.playerMoving === true) {
        return enemyWalkImgRight;
      } else if (this.movementType === 0 && this.playerMoving === false) {
        return enemyIdleImgDown;
      } else if (this.movementType === 1 && this.playerMoving === false) {
        return enemyIdleImgLeft;
      } else if (this.movementType === 2 && this.playerMoving === false) {
        return enemyIdleImgUp;
      } else if (this.movementType === 3 && this.playerMoving === false) {
        return enemyIdleImgRight;
      }
    } else if (type === "knight") {
      if (this.isAttacking === false) {
        if (this.movementType === 0 && this.playerMoving === true) {
          return enemy2WalkImgDown;
        } else if (this.movementType === 1 && this.playerMoving === true) {
          return enemy2WalkImgLeft;
        } else if (this.movementType === 2 && this.playerMoving === true) {
          return enemy2WalkImgUp;
        } else if (this.movementType === 3 && this.playerMoving === true) {
          return enemy2WalkImgRight;
        } else if (this.movementType === 0 && this.playerMoving === false) {
          return enemy2IdleImgDown;
        } else if (this.movementType === 1 && this.playerMoving === false) {
          return enemy2IdleImgLeft;
        } else if (this.movementType === 2 && this.playerMoving === false) {
          return enemy2IdleImgUp;
        } else if (this.movementType === 3 && this.playerMoving === false) {
          return enemy2IdleImgRight;
        }
      } else if (this.isAttacking === true) {
        if (this.movementType === 0) {
          return enemy2AttackImgDown;
        } else if (this.movementType === 1) {
          return enemy2AttackImgLeft;
        } else if (this.movementType === 2) {
          return enemy2AttackImgUp;
        } else if (this.movementType === 3) {
          return enemy2AttackImgRight;
        }
      }
    }
  };

  create = () => {
    //SELECT SPRITE DEPENDING ON ENEMY TYPE
    let imgToUse = this.spriteSelector(this.type);

    // TAMA??O TILE DEFECTO
    let tileHeight = 16;
    let tileWidth = 16;
    let tileOutputSize = 1;
    let tileSize = 16;
    let atlasHeight = tileHeight;
    let atlasWidth = tileWidth;
    let mapIndex = 0;
    if (this.type === "normal") {
      // CAMBIO TAMA??O DE ATLAS Y DE OUTPUT DEL PERSONAJE SEGUN SE MUEVE O SE QUEDA QUIETO
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
    } else if (this.type === "knight") {
      atlasHeight = 16;
      atlasWidth = 32;
    }

    // VELOCIDAD DE ANIMACION
    if (this.type === "knight") {
      if (this.totalFrame === 5) {
        this.totalFrame = 0;
        if (this.lastFrame === 1) {
          this.lastFrame = 0;
        } else {
          this.lastFrame = 1;
        }
      }
    } else if (this.type === "normal") {
      if (this.totalFrame === 5) {
        this.totalFrame = 0;
        if (this.lastFrame <= 4) {
          this.lastFrame++;
        } else {
          this.lastFrame = 0;
        }
      }
    }

    let widthIterator;

    tileHeight = atlasHeight;
    if (this.type === "knight") {
      widthIterator = atlasWidth / 2;
      tileWidth = atlasWidth / 2;
    } else if (this.type === "normal") {
      tileWidth = atlasWidth / 6;
      tileWidth = atlasWidth / 6;
    }
    let updatedTileSizeWx = tileWidth * tileOutputSize;
    let updatedTileSizeHy = tileHeight * tileOutputSize;
    // let arrayTest = [];
    // console.log(
    //   "TILEHEIGHT",
    //   tileHeight,
    //   "TILEWITDTH",
    //   tileWidth,
    //   "ATLASHEIGHT",
    //   atlasHeight,
    //   "ATLASWIDTH",
    //   atlasWidth
    // );
    for (let row = 0; row < atlasWidth; row += widthIterator) {
      // arrayTest.push(row);
      // let newposX = this.posX * tileOutputSize;
      // let newposY = this.posY * tileOutputSize;
      let animationToShow = tileWidth * this.lastFrame;
      // console.log(animationToShow);
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
