//PROMISE
// console.log('Start message');
// const list = fetch('https://jsonplaceholder.typicode.com/posts');
// list.then(data => data.json()).then(countries => {
//     console.log(countries)
// })

function m(cal, cal1) {
    cal();
    cal1();
}

function calla() {
    console.log('calla');
}

function calla1() {
    console.log('calla1');
}

m(calla, calla1);


function test(x) {
    let a = x;
    return function () {
        a++;
        console.log(a);
    }
}

const test1 = test(5);

test1();
test1();
test1();
test1();