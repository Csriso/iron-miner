let collisionWithPlayer = (enemy) => {
  if (
    player.posX < enemy.posX + enemy.w + 4 &&
    player.posX + player.w + 4 > enemy.posX &&
    player.posY < enemy.posY + enemy.h + 4 &&
    player.h + 4 + player.posY > enemy.posY
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

let calculateNextCollision = (first, second) => {
  if (first.movingX === 1 && first.movingY === 0) {
    if (
      collisionDetectorCoords(
        first.posX + first.speed,
        first.posY,
        first.w,
        first.h,
        second
      )
    ) {
      first.canMoveRight = false;
    }
  } else if (first.movingX === -1 && first.movingY === 0) {
    if (
      collisionDetectorCoords(
        first.posX - first.speed,
        first.posY,
        first.w,
        first.h,
        second
      )
    ) {
      first.canMoveLeft = false;
    }
  } else if (first.movingX === 0 && first.movingY === 1) {
    if (
      collisionDetectorCoords(
        first.posX,
        first.posY + first.speed,
        first.w,
        first.h,
        second
      )
    ) {
      first.canMoveDown = false;
    }
  } else if (first.movingX === 0 && first.movingY === -1) {
    if (
      collisionDetectorCoords(
        first.posX,
        first.posY - first.speed,
        first.w,
        first.h,
        second
      )
    ) {
      first.canMoveUp = false;
    }
  }
};
