const myArr = ["Manish", 1, 45, "Nightshade", "a",42]
const mynewArr= ["Devil","Satan","Danav","Dayan"]
// myArr.push(mynewArr)
// console.log(myArr);
// console.log(myArr.push(mynewArr));

// console.log(myArr[3]);
// console.log(myArr[3][1]);
// console.log(myArr[6][1]);


//concatenation
// const array1 = myArr.concat(mynewArr);
// console.log(array1);

//spread

// const spread1 = [...myArr,...mynewArr];
// console.log(spread1);
// console.log("\n",spread1);

//flat in array

const another_array = [1,2,3,13[4,56,6],8,[9,0,[5,6,11]]]

// const another_array = [1,2,3,13[4,56,6],8,[9,0,[5,6,11]]]

// const Real_another_array = another_array.flat(2)
const Real_another_array = another_array.flat(Infinity);
// console.log(Real_another_array);

//_____________________________________________________________________________//

let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1,score2,score3));

console.log(Array.from("Manish"));
console.log(Array.isArray("Manish"));
console.log(Array.from({name: "Manish"})); // interesting: Discussed later
