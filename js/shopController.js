let buyArmor = () => {
  let levelSelector = document.querySelector("#item-armor .item-next-lvl");
  let priceSelector = document.querySelector("#item-armor .price");
  let imgSelector = document.querySelector("#item-armor img");
  if (inTheShop && player.coins >= Number(priceSelector.innerText)) {
    storeSound.play();

    player.maxHealth *= 2;
    player.health = player.maxHealth;
    player.coins -= priceSelector.innerText;
    priceSelector.innerText = priceSelector.innerText * 2;
    if (Number(levelSelector.innerText) <= 5) {
      imgSelector.src =
        "./assets/items/armor/lvl" + levelSelector.innerText + ".png";
    }
    console.log("./assets/items/armor/lvl" + levelSelector.innerText + ".png");
    levelSelector.innerText = Number(levelSelector.innerText) + 1;
    // console.log("MAXVIDA", player.maxHealth);
  }
};
let buySword = () => {
  let levelSelector = document.querySelector("#item-sword .item-next-lvl");
  let priceSelector = document.querySelector("#item-sword .price");
  let imgSelector = document.querySelector("#item-sword img");

  if (inTheShop && player.coins >= Number(priceSelector.innerText)) {
    storeSound.play();
    player.damage *= 2;
    player.coins -= Number(priceSelector.innerText);
    priceSelector.innerText = priceSelector.innerText * 2;
    if (Number(levelSelector.innerText) <= 13) {
      imgSelector.src =
        "./assets/items/sword/lvl" + levelSelector.innerText + ".png";
    }
    levelSelector.innerText = Number(levelSelector.innerText) + 1;
    // console.log("DAÑO", player.damage);
  }
};
let buyBoots = () => {
  let levelSelector = document.querySelector("#item-boots .item-next-lvl");
  let priceSelector = document.querySelector("#item-boots .price");
  let imgSelector = document.querySelector("#item-boots img");

  if (inTheShop && player.coins >= Number(priceSelector.innerText)) {
    storeSound.play();
    player.speed++;
    player.coins -= Number(priceSelector.innerText);
    priceSelector.innerText = priceSelector.innerText * 2;
    if (Number(levelSelector.innerText) <= 5) {
      imgSelector.src =
        "./assets/items/boots/lvl" + levelSelector.innerText + ".png";
    }
    levelSelector.innerText = Number(levelSelector.innerText) + 1;
    // console.log("SPEED", player.speed);
  }
};
let buyPotion = () => {
  let priceSelector = document.querySelector("#item-potion .price");
  if (inTheShop && player.coins >= Number(priceSelector.innerText)) {
    storeSound.play();
    player.health = player.maxHealth;
    player.coins -= Number(priceSelector.innerText);
    priceSelector.innerText = priceSelector.innerText * 2;
    // console.log("VIDA", player.health);
  }
};
