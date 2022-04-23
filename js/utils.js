const randomNumber = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
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

document.querySelector("#menu").display = "none";
