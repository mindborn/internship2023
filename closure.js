// function power(p)
// {
//     return function (x)
//     {
//         return Math.pow(x, p);
//     }
// }

let power=(p)=>(x)=>Math.pow(x, p);

// let square = power(2);
// let cube = power(3);
// console.log(square);
// console.log(cube);

// console.log(square(5));
// console.log(cube(5));
console.log(power(4)(5))