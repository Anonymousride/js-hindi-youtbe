var c=300
let a= 700
if(true)
{
    let a=10
    const b=20
    // console.log(`The local value of a is: ${a}`);
    // var c= 40
    // d=50
}
// console.log(a);
// console.log(b); //This gives an error because it is a local variable
// console.log(c);

//-------------------------------------------------------------------------------------------------------//
function One()
{
    const username="Rishabh"
    console.log("Hello Rishabh");
    function Two()
    {
        const website ="Youtube"
        console.log(username);
    }
    // console.log(website);
    // Two()
}
One()
