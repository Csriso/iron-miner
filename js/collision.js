let collisionWithPlayer = (enemy) => {
  if (
    player.posX < enemy.posX + enemy.w &&
    player.posX + player.w > enemy.posX &&
    player.posY < enemy.posY + enemy.h &&
    player.h + player.posY > enemy.posY
  ) {
    // collision detected!
    return true;
  } else {
    return false;
  }
};

let collisionDetector = (first, second) => {
  if (
    first.posX < second.posX + second.w &&
    first.posX + first.w > second.posX &&
    first.posY < second.posY + second.h &&
    first.h + first.posY > second.posY
  ) {
    // collision detected!
    return true;
  } else {
    // no collision
    return false;
  }
};

let collisionDetectorCoords = (firstX, firstY, firstW, firstH, second) => {
  if (
    firstX < second.posX + second.w &&
    firstX + firstW > second.posX &&
    firstY < second.posY + second.h &&
    firstH + firstY > second.posY
  ) {
    // collision detected!
    return true;
  } else {
    // no collision
    return false;
  }
};

let calculateNextCollisionPlayer = (player, second) => {
  if (player.movingX === 1 && player.movingY === 0) {
    if (
      collisionDetectorCoords(
        player.posX + player.speed,
        player.posY,
        player.w,
        player.h,
        second
      )
    ) {
      player.canMoveRight = false;
    }
  } else if (player.movingX === -1 && player.movingY === 0) {
    if (
      collisionDetectorCoords(
        player.posX - player.speed,
        player.posY,
        player.w,
        player.h,
        second
      )
    ) {
      player.canMoveLeft = false;
    }
  } else if (player.movingX === 0 && player.movingY === 1) {
    if (
      collisionDetectorCoords(
        player.posX,
        player.posY + player.speed,
        player.w,
        player.h,
        second
      )
    ) {
      player.canMoveDown = false;
    }
  } else if (player.movingX === 0 && player.movingY === -1) {
    if (
      collisionDetectorCoords(
        player.posX,
        player.posY - player.speed,
        player.w,
        player.h,
        second
      )
    ) {
      player.canMoveUp = false;
    }
  }
};
