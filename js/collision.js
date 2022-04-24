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
