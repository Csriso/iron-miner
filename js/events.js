let createEvents = () => {
  document.addEventListener("keydown", function (event) {
    const key = event.code;
    if (key === "ArrowRight" || key === "KeyD") {
      player.eventCatcherMovePlayer(true, undefined, "keydown");
    } else if (key === "ArrowLeft" || key === "KeyA") {
      player.eventCatcherMovePlayer(false, undefined, "keydown");
    } else if (key === "ArrowDown" || key === "KeyS") {
      player.eventCatcherMovePlayer(undefined, false, "keydown");
    } else if (key === "ArrowUp" || key === "KeyW") {
      player.eventCatcherMovePlayer(undefined, true, "keydown");
    } else if (key === "Space") {
      player.eventCatcherMovePlayer(undefined, undefined, "keyDownSpace");
    }
  });
  document.addEventListener("keyup", function (event) {
    const key = event.code;
    if (key === "ArrowRight" || key === "KeyD") {
      player.eventCatcherMovePlayer(true, undefined, "keyup");
    } else if (key === "ArrowLeft" || key === "KeyA") {
      player.eventCatcherMovePlayer(false, undefined, "keyup");
    } else if (key === "ArrowDown" || key === "KeyS") {
      player.eventCatcherMovePlayer(undefined, false, "keyup");
    } else if (key === "ArrowUp" || key === "KeyW") {
      player.eventCatcherMovePlayer(undefined, true, "keyup");
    } else if (key === "Space") {
      player.eventCatcherMovePlayer(undefined, undefined, "keyUpSpace");
    }
  });
};
