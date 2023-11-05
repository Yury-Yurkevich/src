const counter = document.querySelector('#value');
const decrBtn = document.querySelector(
  '#counter button[data-action="decrement"]');
const incrBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);

let countValue = 0;

decrBtn.addEventListener("click", onDecrBtnClick);
incrBtn.addEventListener("click", onIncrBtnClick); 

function onDecrBtnClick() {
  countValue -= 1;
  // limiter count - 0
  // if (countValue < 0) {
  //   countValue = 0;
  // }
  counter.textContent = countValue;
  console.log("counter -");
};

function onIncrBtnClick() {
  countValue += 1;
  counter.textContent = countValue;
  console.log("Counter +");
};
