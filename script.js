let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

let div = document.querySelector('.item');

btn1.onclick = function () {
  div.style.display = 'flex';
  btn1.style.display = 'none';
  btn2.style.display = 'flex';
};

btn2.onclick = function () {
  div.style.display = 'none';
  btn2.style.display = 'none';
  btn1.style.display = 'flex';
};
