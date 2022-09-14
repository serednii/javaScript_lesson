//PROMISE
// console.log('Start message');
// const list = fetch('https://jsonplaceholder.typicode.com/posts');
// list.then(data => data.json()).then(countries => {
//     console.log(countries)
// })




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