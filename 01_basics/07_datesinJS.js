// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

let newDate= new Date(2023, 0, 14)
// console.log(newDate.toDateString());

// console.log(newDate.toLocaleString());
// console.log(newDate.toLocaleDateString());

// let newdate1= new Date("2023-01-18")
let newdate1= new Date("1-15-2023")
// console.log(newdate1.toLocaleDateString());


// Time stamp

//   let myTimeStamp= Date()
let myTimeStamp= Date.now() //this give millisecond value from 1970
  console.log(myTimeStamp);
  console.log(myDate.getTime());