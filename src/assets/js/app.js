const bar = document.querySelector(".loading__bar--inner");
const number = document.querySelector(".loading__counter--number");

let cnt = 0;

let barInterval = setInterval(() => {
  bar.style.width = cnt + "%";
  number.innerText = cnt + "%";
  cnt++;

  if (cnt > 100) {
    clearInterval(barInterval);
  }
}, 20);
