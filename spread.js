let a, b, rest;
console.log(a, b, rest);

// [a, b] = [10, 20];
// console.log(a, b);
[a, b, ...rest] = [10, 20, 30, 40, 50, [1, 2, 3], { firstName: "Ron" }];
console.log(a, b);
console.log(rest);
