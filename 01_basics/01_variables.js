const accountId = 123123
let accountEmail = "manishgoogle@gmail.com"
var accountPassword = "122333"
accountCity = "Meerut"
let accountState;


/*  Prefer not to use "var" because of issue in block scope and functional scope  */
// accountId = 23 // not allowed
accountEmail = "nightshade@gmail.com"
accountPassword = "876543"
console.log(accountId);
console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);