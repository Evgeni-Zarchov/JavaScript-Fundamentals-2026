// Advanced array functionality.
// 1. push - add to the end.
// 2. pop - remove from the end.
// 3. unshift - add to the beginning.
// 4. shift - remove from the beginning.
// 5. includes - look for value.
// 6. indexOf - find index of value.

// ------------------------------------------------

// Manipulating array.

// 1. slice - create a new array from part of another, gets range of selected items start to end(exclusive), the original array will not be modified.

// 2. splice - adds/remove elements and returns the removed items, this function change the original array.

let arr = [1, 3, 4, 5, 6];

let push = arr.push(8);

let index = arr.indexOf(9); // indexOf search for the value and return the index, if not present returns -1.

let shift = arr.shift();
let pop = arr.pop();

let slice = arr.slice(0, arr.length); // the value is exclusive so is not necessary to write arr.length - 1.
console.log(slice);
console.log(arr.join(" "));