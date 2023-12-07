//const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filter --> এর ভিতরে কন্ডিশন দিতে হয় এবং একে একটা variable এ রাখতে হয়
// যদি filter এর ভিতরে Arrow Function এ {} ব্যবহার করি তবে must be "return" দিতে হবে।
// const newNums = myNums.filter( (num) => {
//     return num > 4
//  } )

const newNums = []

myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})

console.log(newNums);


