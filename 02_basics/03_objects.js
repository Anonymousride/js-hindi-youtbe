//object ke andar keys aur value ka concept hota hai 

// Singleton
//Object.create

// Object literals

const mysym = Symbol("Keys1")
const objJs = {
    name: "Manish",
    [mysym] : "Symbol Use",
    "another name": "Nightshade",
    age: 20,
    course: "Javascript",
    email: "manishkumar@gmail.com",
    location: "Meerut",
    isLoggedIn: false
}

// console.log(objJs.name);
// console.log(objJs.email);
// console.log(objJs["email"]); //another way of printing values in object 
// console.log(objJs.another name); // yha another_name ko dot(.) ke through access nhi possible hai
// console.log(objJs["another name"]);

// console.log(objJs[mysym]);   //yha bhi mysym ko dot(.) ke through access nhi possible hai

// objJs.email = "nightshade@gmail.com"  // freeze ka istemal se pehla email change krna pr change ho jayega pr baad mei nhi
// console.log(objJs.email)

// Object.freeze(objJs)
objJs.email = "nightshade@gmail.com"
// console.log(objJs.email)
// console.log(objJs)

objJs.greeting = function(){ 
      console.log("Hello World!");
     }


objJs.greetingTwo = function(){ 
        console.log(`Hello user,${this.name}`);
     }     
console.log(objJs.greeting())
console.log(objJs.greetingTwo());
