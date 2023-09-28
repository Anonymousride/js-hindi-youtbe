//Primitive Datatype[Call by value] ->(7-types): String, Number, Boolean, Null, Undefine, Symbol, BigInt

// const value= null
// console.log(value);

// const Id = Symbol('123')
// const AnotherId = Symbol('123')
// console.log(Id === AnotherId);

// const BigNumber =34486356488365784344444n
// console.log(BigNumber);

//Non-Primitive Datatypes[Call by Reference] -> Array, Objects, Functions

// Array:
  const heros = ["Manish", "Nightshade", "Devil"];

//Objects:
  let MyObject ={ 
    name: "Manish", 
    age: 22
  }  

//Function:
  const MyFunction =function()
  {
    console.log("Hello World!");
  }  

  console.log(typeof MyFunction);
  console.log(typeof MyObject);
  console.log(typeof heros);
  console.log(typeof null);
