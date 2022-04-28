const randomNumber = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomHeight = () => {
  let randomHeight = randomNumber(canvas.height - 32, 32);
  return randomHeight;
};

const randomWidth = () => {
  let randomWidth = randomNumber(canvas.width - 32, 32);
  return randomWidth;
};

const randomHeightAndWidth = () => {
  let randomHeight = randomNumber(canvas.height - 32, 32);
  let randomWidth = randomNumber(canvas.width - 32, 32);
  return { height: randomHeight, width: randomWidth };
};

const randomHeightAndWidthWithPlayer = (player) => {
  //
  let randomHeight = randomNumber(canvas.height - 32, 32);
  let randomWidth = randomNumber(canvas.width - 32, 32);
  while (
    (randomWidth < player.posX + 16 && randomWidth > player.posX) ||
    (randomHeight < player.posY + 16 && randomHeight > player.posY) ||
    collisionDetectorCoords(randomWidth, randomHeight, 16, 16, shop)
  ) {
    randomHeight = randomNumber(canvas.height - 32, 32);
    randomWidth = randomNumber(canvas.width - 32, 32);
  }
  return { height: randomHeight, width: randomWidth };
};

const generateOnBorders = () => {
  let random = Math.floor(Math.random() * 5) + 1;
  let randomSecond = Math.floor(Math.random() * 8) + 1;
  let randomPosition = Math.floor(Math.random() * 3) + 1;
  let randomHeight = 0;
  let randomWidth = 0;
  switch (randomPosition) {
    case 1:
      // LEFT BORDER
      randomHeight = 272 + random * 16;
      randomWidth = -16 * randomSecond;
      return { height: randomHeight, width: randomWidth };
      break;
    case 2:
      // DOWN BORDER
      randomHeight = canvas.height + 16 * randomSecond;
      randomWidth = 272 + random * 16;
      return { height: randomHeight, width: randomWidth };
      break;
    case 3:
      // RIGHT BORDER
      randomHeight = 272 + random * 16;
      randomWidth = canvas.width + 16 * randomSecond;
      return { height: randomHeight, width: randomWidth };
      break;
    default:
      break;
  }
};

const showHealthImage = (health, maxHealth) => {
  let step = player.maxHealth / 14;
  let sumSteps = 0;
  let healthImgToChange = document.querySelector("#health-img");
  let dynamicArr = [];
  for (let i = 0; i < 14; i++) {
    sumSteps += step;
    dynamicArr.push(Math.round(sumSteps));
  }
  let arrImages = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56];
  let toFind = Math.floor((health * 56) / 100);
  let resultFind = findClosest(dynamicArr, health);
  let indexOfFind = dynamicArr.indexOf(resultFind);
  healthImgToChange.src =
    "./assets/health/" + arrImages[indexOfFind] + "px.png";
  if (health === 0) {
    healthImgToChange.src = "./assets/health/0px.png";
  }
};
const findClosest = (arr, num) => {
  const creds = arr.reduce(
    (acc, val, ind) => {
      let { diff, index } = acc;
      const difference = Math.abs(val - num);
      if (difference < diff) {
        diff = difference;
        index = ind;
      }
      return { diff, index };
    },
    {
      diff: Infinity,
      index: -1,
    }
  );
  return arr[creds.index];
};

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
const catAnimate = document.querySelector("#balloonCat");
const sandwitch = document.querySelector("#sandwitch");
let leftCat = 0;
let topCat = 0;
let omgSandwitch = 0;
let menuAnimChanger = true;
setInterval(() => {
  catAnimate.style.marginLeft = leftCat.toString() + "px";
  catAnimate.style.marginTop = topCat.toString() + "px";
  let omgSandwitch = leftCat + 20;
  sandwitch.style.marginLeft = omgSandwitch.toString() + "px";
  sandwitch.style.marginTop = topCat.toString() + "px";
  if (leftCat > vw + 30) {
    leftCat = -30;
    topCat += 30;
    if (topCat > 90) {
      topCat = 0;
    }
  }
  leftCat++;
}, 1000 / 60);

// CHANGE IMG SLIDE MENU TO ANIMATE IT
let imgMenuSelector1 = document.querySelector("#imgMenu1");
let imgMenuSelector2 = document.querySelector("#imgMenu2");
setInterval(() => {
  if (menuAnimChanger) {
    imgMenuSelector1.style.display = "none";
    imgMenuSelector2.style.display = "";

    menuAnimChanger = false;
  } else {
    imgMenuSelector1.style.display = "";
    imgMenuSelector2.style.display = "none";
    menuAnimChanger = true;
  }
}, 350);
// HIDE MENU BY DEFAULT
document.querySelector("#menu").display = "none";
