const  accountId = 1335353
let accountEmail = "super@google.com"
var accountPassword = "123354"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "he@jj.com"
accountPassword = "312323322"
accountCity = "Gurgaon"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope     // scope = {} curly braces like if else or for loops[all loops]
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
