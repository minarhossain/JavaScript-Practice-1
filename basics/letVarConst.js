const accountId = 1445669;
let accountEmail = 'example@gmail.com';
var accountPassword = "123456";

accountCity = "Khulna";

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

// accountId = 9; // not allowed

accountEmail = "second@gmail.com";
console.log(accountId);

console.table([accountId, accountEmail, accountPassword])