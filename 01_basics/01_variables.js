const accountId = 133553
let accountEmail = "asifashraf276@gmail.com"
var accountPassword = "12345"
accountCity = "Dhaka"
let accountState;

//accountId = 2 // Not allowed --> const


accountEmail = "asif@asif.com"
accountPassword = "212121"
accountCity = "Cumilla"

console.log(accountId);

/*
--> Prefer not to use var
--> because of issue in block scope and functional scope.
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])