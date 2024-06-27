// stack (primitive), heap( non primitive)

// stack
let myName ="Abhishek"
let anotherName =myName
anotherName = "Aryan"

console.log(myName)
console.log(anotherName)

// heap

let userOne={
 email : "abhhishek7646@gmail.com",
 phone : 7458798743
}

let userTwo = userOne
userTwo.email = "aryan7485748@gmail.com"

console.log(userOne)
console.log(userTwo)