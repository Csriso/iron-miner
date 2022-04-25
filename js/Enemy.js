class Enemy {
  constructor(posX, posY, type) {
    this.direction = 0;
    this.moving = false;
    this.health = 100;
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
    this.swing;
    this.swingCounter = 0;
  }
  spawnPlayer = () => {
    this.create();
  };
  findPlayer = (x, y) => {
    let difX = this.posX - x;
    let difY = this.posY - y;

    if (difX < 0) {
      difX *= -1;
    }
    if (difY < 0) {
      difY *= -1;
    }

    // console.log(difX, difY, this.posX, this.posY, x, y);
    // SI LA DIFERENCIA DE DISTANCIA EN X ES MAYOR A LA DE Y
    // https://media.tenor.co/images/fa3143e89d76490bdf83835cbd3d9fed/tenor.gif
    let swingSize = 32;
    if (this.swingCounter >= swingSize) {
      this.swingCounter = 0;
    }

    // if(swingCounter === 0){
    //   if (this.posX - x < 0 && this.posY - y < 0) {
    //     this.swing = true;
    //   } // +,-
    //   else if (this.posX - x > 0 && this.posY < 0){
    //     this.swing = true;
    //   } // -,+
    //   else if(this.posX -x < 0 && this.posY > 0){
    //     this.swing = false;
    //   } // -,-
    //   else if(this.posX -x < 0 && this.posY < 0){
    //     this.swing = false;
    //   }
    // }

    let difXY = difX - difY;
    if (difXY < 0) {
      difXY *= -1;
    }
    // console.log(
    //   "DIF",
    //   difXY,
    //   "SWING",
    //   this.swing,
    //   "SWING COUNTER",
    //   this.swingCounter,
    //   "this.x-x",
    //   this.posX - x,
    //   "this.y-y",
    //   this.posY - y
    // );
    if (difXY <= 32 && difXY >= 0) {
      // -,-

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
    } else if (difX <= difY) {
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
    }
  };
  create = () => {
    let imgToUse;
    if (this.movementType === 0 && this.playerMoving === true) {
      imgToUse = enemyWalkImgDown;
    } else if (this.movementType === 1 && this.playerMoving === true) {
      imgToUse = enemyWalkImgLeft;
    } else if (this.movementType === 2 && this.playerMoving === true) {
      imgToUse = enemyWalkImgUp;
    } else if (this.movementType === 3 && this.playerMoving === true) {
      imgToUse = enemyWalkImgRight;
    } else if (this.movementType === 0 && this.playerMoving === false) {
      imgToUse = enemyIdleImgDown;
    } else if (this.movementType === 1 && this.playerMoving === false) {
      imgToUse = enemyIdleImgLeft;
    } else if (this.movementType === 2 && this.playerMoving === false) {
      imgToUse = enemyIdleImgUp;
    } else if (this.movementType === 3 && this.playerMoving === false) {
      imgToUse = enemyIdleImgRight;
    }
    // TAMAÑO TILE DEFECTO
    let tileHeight = 16;
    let tileWidth = 16;
    let tileOutputSize = 1;

    let tileSize = 16;

    let atlasHeight = tileHeight;
    let atlasWidth = tileWidth;
    let mapIndex = 0;

    // CAMBIO TAMAÑO DE ATLAS Y DE OUTPUT DEL PERSONAJE SEGUN SE MUEVE O SE QUEDA QUIETO
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
