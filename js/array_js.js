/*Khai báo mảng trong javascript*/

var fruits = ['Apple', 'Banana'];

console.log("Array: ",fruits);

console.log("Length: ",fruits.length);

/* Access (index into) an Array item */

var first = fruits[0];
// Apple
console.log("First: ",first);
var last = fruits[fruits.length - 1];
// Banana
console.log("Last: ", last);

/* Loop over an Array */

fruits.forEach(function (item, index, fruits) {
    console.log(item, index)
});

/* Add to the end of an Array */

var newLength = fruits.push("Orange");

console.log("Length new: ", newLength);
console.log("Array new: ",fruits);

var random = Math.random();
console.log(random);

var random_iter = Math.floor((Math.random() * 20) + 1);
console.log(random_iter);