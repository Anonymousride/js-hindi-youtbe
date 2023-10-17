// for-of

// const arr =[1,2,3,4,5,6]
// for (const num of arr) {
//     console.log(num);
// }

const greeting="Hello World!"
for (const greet of greeting) {
    if (greet == ' ') {
        continue
    }
    // console.log(`The value is ${greet}`);
}

// Maps
  const map = new Map()
  map.set('IN', "INDIA")
  map.set('USA', "Dogla")
  map.set('Russia', "Best Friend")
  map.set('Pakistan', "India ka Beta")

//   console.log(map);

for (const [key,value] of map) {
    console.log(key,":-",value);
}