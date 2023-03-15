const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");
const computed = window.getComputedStyle(items);

let treshhold;

right.addEventListener("click", function(e) {
  e.preventDefault();
  //let currentRight = parseInt(computed.right);

if (treshhold) return;
treshhold - true;

let currentRight = parseInt(computed.right);

  if (currentRight < 500) {
    items.style.right = `${currentRight + 100}px`;
  }

  if (currentRight == 500) {
    items.style.right = `${0}px`;
  }

  setTimeout (() => {
    treshhold = false; 
  }, 300);
});

left.addEventListener("click", function(e) {
  e.preventDefault();
  if (treshhold) return;
  treshhold = true;
  let currentRight = parseInt(computed.right);

  if (currentRight > 0) {
    items.style.right = `${currentRight - 100}px`;
  }

  if (currentRight == 0) {
    items.style.right = `${currentRight + 500}px`;
  }

  setTimeout (() => {
    treshhold = false; 
  }, 300);
});
