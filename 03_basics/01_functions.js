function sayMyName()
{
    console.log("N");
    console.log("i");
    console.log("g");
    console.log("h");
    console.log("t");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("d");
    console.log("e");
}
// sayMyName()

// function addTwonumber(num1,num2)
// {
//     console.log(num1+num2);
// }
// addTwonumber(3,5)


function addTwonumber(num1,num2)
{
    let res = num1+num2
    return res
    console.log("Hello"); //unreachable due to return(does not give this output)
}
const result=addTwonumber(3,5)
// console.log(result);

function loginUser(username)
{
    if(username === undefined) // if(!username) can also be use at this place
    {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUser());

//----------------------------------------------------------------------------------------------------------//

// function calculateItemPrice(...num)
// {
//     return num
// }
// console.log(calculateItemPrice(200,400,500,2000));

// function calculateItemPrice(val1,val2,...num)
// {
//     return num
// }
// console.log(calculateItemPrice(200,400,500,2000));

// function using Object
const user= 
{
    username: "Manish",
    hobby: "Volleyball"
}
function handleObject(anyObject)
{
    console.log(`User name is ${anyObject.username} and his hobby is ${anyObject.hobby}`);
}
// handleObject(user)
handleObject({
    username: "Nightshade",
    hobby: "Badminton"
})

//function using Array
const myNewArray= [200,300,500,800]
function returnSecondValue(anyArray)
{
    return anyArray[3]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([2000,400,120,360,540]));