// For loop

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// console.log(i); // it give error because it is only define in loop scope

//-------------------------------------------------------------------------------------------------
// let myArray = ["Iron Man", "Wolverin","Black Panther","Deadpool"];
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
// }

for (let i = 1; i <= 20; i++) {
    if(i==5)
    {
        console.log(`Detected 5`);
        // break
        continue
    }
    console.log(`Value of i is ${i}`);
}