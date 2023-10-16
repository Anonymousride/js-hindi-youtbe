// Immediate Invoked Function Expression  (IIFE)


//Normal function
// function code()
// {
//     console.log(`DBMS system`);
// }
// code()

(function code()
{
    console.log(`DBMS system`);
})();  //semicolon is mandatory in iife because it does not know where to stop

(() =>{
    console.log(`IIFE code`);
})();

((name) =>{
    console.log(`IIFE code: ${name}`);
})("Manish");