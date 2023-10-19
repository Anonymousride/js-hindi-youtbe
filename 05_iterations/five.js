const coding = ["JS","Python","C++","Ruby"]
// coding.forEach( function (value){
//     console.log(value);
// })  // OR
// coding.forEach( (value) => {
    // console.log(value);
// })

// coding.forEach((val,i,array)=>{
//     console.log(val,i,array);
// })

const myCoding =[
    {
        lanuageName : "Javascript",
        languageFileName : "JS"
    },
    {
        lanuageName : "C++",
        languageFileName: "Cpp"
    },
    {
        lanuageName : "Python",
        languageFileName: "Py"
    }
]

myCoding.forEach((item) => {
    console.log(`${item.lanuageName} :- ${item.languageFileName}`);
})