const accountId = 144553
let accountEmail = "subh@subh.com"
var accountPasswd = "123456"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPasswd = "21212121"
accountCity = "Bengaluru"

/* prefer not use var
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPasswd, accountCity, accountState])
