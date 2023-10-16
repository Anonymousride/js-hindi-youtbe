
// const UserId = "n"
// if(UserId)
// {
//     console.log("Got user id",`${UserId}`);
// }
// else{
//     console.log("Don't have user id");
// }

// falsy values -> false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value -> "0", "false",'false','0',[],{}, function(){}

// const empObj ={}
// if(Object.keys(empObj).length === 0)
// {
//     console.log("Object is empty");
// }

//Nullish Coalesacing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 15
// val1 = undefined ?? 200
// val1 = null ?? undefined ?? 200
// console.log(val1);

//---------------------------------------------------------------------------------------------------------//

// Ternary operator
//  condition ? true:false

const iceTeaPrice = 200
iceTeaPrice <= 100 ? console.log("price is less than 100") : console.log('Price is greater than 100');