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

  let gameOverBtn = document.querySelector("#gameoverBtn");
  gameOverBtn.addEventListener("mouseenter", function () {
    gameOverBtn.src = "./assets/restart.png";
  });
  gameOverBtn.addEventListener("mouseleave", function () {
    gameOverBtn.src = "./assets/gameover.png";
  });
  gameOverBtn.addEventListener("click", function () {
    restartGame();
  });

  // VOLUME CONTROL START
  let volume = document.querySelector("#volume-control");
  let savedVolumeState = 0;
  volume.addEventListener("change", function (e) {
    setAllSoundsVolume(e.currentTarget.value / 100);
    if (e.currentTarget.value / 100 === 0) {
      document.querySelector("#volume-icon").innerText = "volume_mute";
    } else if (e.currentTarget.value / 100 >= 0.5) {
      document.querySelector("#volume-icon").innerText = "volume_up";
    } else {
      document.querySelector("#volume-icon").innerText = "volume_down";
    }
  });

  let volumeIcon = document.querySelector("#volume-icon");
  volumeIcon.addEventListener("click", function (e) {
    if (volume.value >= 1) {
      savedVolumeState = volume.value;
      bgMusic.volume = 0;
      volume.value = 0;
      setAllSoundsVolume(0);
      document.querySelector("#volume-icon").innerText = "volume_mute";
    } else {
      volume.value = savedVolumeState;
      document.querySelector("#volume-icon").innerText = "volume_up";
      setAllSoundsVolume(document.querySelector("#volume-control").value / 100);
    }
  });
  // VOLUME CONTROL FINISH

  // let startGameBtn = document.querySelector("#startBtn");
  // startGameBtn.addEventListener("click", function (e) {
  //   startGame();
  // });

  const burgerMenuBtn = document.querySelector("#burgerIcon");
  const hiddenMenu = document.querySelector("#menu");
  burgerMenuBtn.addEventListener("click", function (e) {
    if (hiddenMenu.style.display === "none") {
      hiddenMenu.style.display = "";
      hiddenMenu.classList.add("bounceInDown");
    }
  });

  const closeMenuBtn = document.querySelector("#closeMenu");
  closeMenuBtn.addEventListener("click", function (e) {
    hiddenMenu.classList.remove("bounceInDown");
    hiddenMenu.classList.add("bounceOutUp");
  });
  hiddenMenu.addEventListener("webkitAnimationEnd", function (e) {
    if (e.animationName === "bounceOutUp") {
      hiddenMenu.className = "";
      hiddenMenu.style.display = "none";
    }
  });
  const catAnimate = document.querySelector("#balloonCat");
  const sandwitch = document.querySelector("#sandwitch");
  catAnimate.addEventListener("mouseenter", function () {
    sandwitch.style.opacity = 1;
  });
  catAnimate.addEventListener("mouseleave", function () {
    sandwitch.style.opacity = 0;
  });

  window.addEventListener("load", function () {
    let startGameBtn = document.querySelector("#startBtn");
    let loadingGameBtn = this.document.querySelector("#startBtnLoading");

    // do things after the DOM loads fully
    startGameBtn.style.display = "";
    loadingGameBtn.style.display = "none";
    startGameBtn.addEventListener("click", function (e) {
      startGame();
    });
  });

  let itemArmorSelector = document.querySelector("#item-armor");
  itemArmorSelector.addEventListener("click", buyArmor);

  let itemSwordSelector = document.querySelector("#item-sword");
  itemSwordSelector.addEventListener("click", buySword);

  let itemBootsSelector = document.querySelector("#item-boots");
  itemBootsSelector.addEventListener("click", buyBoots);

  let itemPotionSelector = document.querySelector("#item-potion");
  itemPotionSelector.addEventListener("click", buyPotion);
};
