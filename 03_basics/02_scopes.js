// var c = 300

let a = 300
// {} is called scope. let and const will not work outside the scope. But "var" works outside the scope. This is the problem of var. It can easily be manipulated.

// Outside {} are called "global scope" and inside {} are called "block scope"
if (true){
    let a = 10
    const  b = 20
    //var c = 30
    //console.log("INNER: ", a);
}

//console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Ashraf"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

one()