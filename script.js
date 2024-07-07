const body = document.body;
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

// Math.round(Math.random() * 15);
// let hexArr = Array.from("0123456789ABCDEF");
let hex = "0123456789ABCDEF";

const randomColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    // color += hexArr[Math.round(Math.random() * 15)];
    color += hex[Math.round(Math.random() * 15)];
  }
  console.log(color);
  return color;
};
// randomColor();
startBtn.addEventListener("click", () => {
  interval = setInterval(() => {
    body.style.backgroundColor = randomColor();
  }, 1000);
  startBtn.setAttribute("disabled", "");
  stopBtn.removeAttribute("disabled");
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  stopBtn.setAttribute("disabled", "");
  startBtn.removeAttribute("disabled");
});
