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
    // no collision
  }
};

let collision = (x, y) => {
  if (
    x.posX < y.posX + y.w &&
    x.posX + x.w > y.posX &&
    x.posY < y.posY + y.h &&
    x.h + x.posY > y.posY
  ) {
    // collision detected!
    return true;
  } else {
    // no collision
  }
};
