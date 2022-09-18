const arr = [12, , 34, 56, 23, 'kolo', 'auto'];
const [a, d = 1254, , b, ...c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//Objects

const person = {
    name: 'mas',
    age: 20,
    address: {
        country: 'Ukraine',
        city: 'Moskov'
    }
}

// const {
//     name,
//     age,
//     car = 'auto none',//default
//     address: {
//         city,
//         country
//     }
// } = person;

const {
    name,
    ...info
} = person;
console.log(name);
console.log(info);
// console.log(city);
// console.log(country);