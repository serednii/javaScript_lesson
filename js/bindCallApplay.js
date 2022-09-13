const b1 = document.querySelector('.b-1');
const b2 = document.querySelector('.b-2');

// b1.onclick = test;



function test(color, num) {
  console.log(num)
  this.style.background = color;
}

// test.call(b2);

// b2.onclick = function () {
//   test.call(b1, 'green');
// }

// b2.onclick = function () {
//   test.apply(b1, ['green', 555]);
// }


let a = test.bind(b1, 'red', 777);
let b = test.bind(b2, 'orange', 888);
b2.onclick = b;
// https://www.youtube.com/watch?v=CJ6Txj8leZQ