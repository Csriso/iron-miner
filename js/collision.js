let collisionWithPlayer = (enemy) => {
  if (
    player.posX < enemy.posX + enemy.w &&
    player.posX + player.w > enemy.posX &&
    player.posY < enemy.posY + enemy.h &&
    player.h + player.posY > enemy.posY
  ) {
    // collision detected!
    console.log("COLISION");
    return true;
  } else {
    // no collision
  }
};
