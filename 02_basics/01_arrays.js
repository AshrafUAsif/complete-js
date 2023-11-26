// array

const myArr = [0, 1, 2, 3, 4, 5]

const myHeroes = ["ironman","superman"]

const myArr2 = new Array(1,2,3,4)

//console.log(myArr[1]);

// Array methods

//myArr.push(6) // Add values inside the array's last
//myArr.push(7) // Add values inside the array's last
//myArr.pop() // remove values inside the array's last

// myArr.unshift(9) // Add values inside the array's first
// myArr.shift() // remove values inside the array's first

//console.log(myArr.includes(9));// Whether the element is inside the array or not
//console.log(myArr.indexOf(9));// Check the array index

// const newArr = myArr.join()


// console.log(myArr);
// console.log(newArr);

// Slice, Splice(Changes original Array)

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)

console.log(myn2);
console.log("C ", myArr);