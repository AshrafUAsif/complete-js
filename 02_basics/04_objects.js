//const tinderUser = new Object() --> This is called singleton object

const tinderUser = {} // --> THis is called non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Asif"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

// Object এর ভিতর Object

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ashraf",
            lastname: "uddin"
        }
    }
}

//console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
// Object assign for merging two or more objects

//const obj3 = Object.assign({}, obj1, obj2)

// merging can be done by spread operator
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

// Database এর value আসলে 

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },

]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// DeStructuring ------

const course = {
    coursename: "Js in Bangla",
    price: "1000",
    courseInstructor: "Ashraf"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // This is called Object destructuring

console.log(instructor);

// -------------- API JSON Format -----------------


// {
//     "name": "ashraf",
//     "coursename": "js in Bangla",
//     "price": "free",
// }

// [
//     {},
//     {},
//     {}
// ]