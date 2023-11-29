
// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// Un named IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('ashraf')// () first one is function definition and () second one is execution.

// Global scope এর Pollution সরানোর জন্যই আমরা মূলত iife ব্যবহার করি।

