let score = 33
let score1 ="33abc"
//let score1 =null   => output 0  after conversion in number
//let score1 = undefined  => NaN
//let score1 = true   => 1
// let score1 ="Abhishek" => NaN


console.log(typeof score);
console.log(typeof(score));

console.log(typeof score1);

let valueInNumber = Number(score1)
console.log(typeof valueInNumber);
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN => NaN stands for not a number
// true => 1 ; false => 0



let isLoggedIn = 1
//let isLoggedIn = ""  
//let isLoggedIn = "Abhishek"
let booleanIsLoggedIN =Boolean(isLoggedIn)
console.log(booleanIsLoggedIN)

//1 => true ; 0 => false;
//" " => false;
//"Abhishek" => true


let  someNumber =54

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)