function sayMyName(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("A");
    console.log("F");
}

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
    // return একবার User করার পর আর কিছু execute হবেনা Function এর ভিতরে    
}

const result = addTwoNumbers(3, 5) // Function Run এর সময়ে ভিতরে যা দিবো এদের Arguments বলে

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("asif199069"))
//console.log(loginUserMessage("asif"))

// "..." is called "rest operator" here.
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 300, 500, 2000))

const user = {
    username: "Asif",
    price: 199
}

function handeObject(anyobject){
    //console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handeObject(user)
handeObject({
    username: "asif",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 100, 600]))
