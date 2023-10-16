const user ={
    username:"Manish",
    age: 13,

    WelcomeMessage: function(){
        console.log(`${this.username},welcome to the website`);
        // console.log(this);
    }
}
// user.WelcomeMessage()
// console.log(user.WelcomeMessage());
// user.username ="Nightshade"
// user.WelcomeMessage()

// console.log(this);

//---------------------------------------------------------------------------------------------------------------//

// function life()
// {
//     console.log(this);
// }
// life()


//-----------------------------------------------------------------------------------------------------------------//
//  Arrow Function

//  const chai = () => {
//     let username ="Manish"
// //    console.log(this.username);
//    console.log(this);
//  }
// // chai()
// console.log(chai());

// const addTwo =(num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4));

// const addTwo =(num1,num2) =>  num1+num2
// const addTwo =(num1,num2) =>  (num1+num2)
// console.log(addTwo(3,4));

const addi =(num1,num2) =>  ({username:"Manish"})
console.log(addi(3,4));
