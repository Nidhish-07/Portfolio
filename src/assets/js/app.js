import gsap from "gsap";

const bar = document.querySelector(".loading__bar--inner");
const number = document.querySelector(".loading__counter--number");

let cnt = 0;

let barInterval = setInterval(() => {
  bar.style.width = cnt + "%";
  number.innerText = cnt + "%";
  cnt++;

  if (cnt > 100) {
    clearInterval(barInterval);

    gsap.to(".loading__bar", {
      duration: 5,
      rotate: "90deg",
      opacity: 0,
    });

    gsap.to(".loading__counter, .loading__text", {
      duration: 0.5,
      opacity: 0,
    });
    gsap.to(".loading__box", {
      duration: 1,
      height: "500px",
      borderRadius: "50%",
    });
    gsap.to(".loading__svg", {
      duration: 10,
      opacity: 1,
    });
    gsap.to(".loading__box", {
      delay: 2,
      border: "none",
      duration: 0.5,
    });
    gsap.to(".loading", {
      // duration: 2,
      delay: 2,
      background: "transparent",
      opacity: 0.5,
    });
  }
}, 20);
