// Array

const myArr =[1,2,3,4,5,];
const MyHeros =["Abhishek","Aryan","Amritesh","Aditya"];
console.log(MyHeros[1]);
console.log(MyHeros[1][2]);

const mixArray =[3,5,6,true, "Abhishek", 'A'];
console.log(mixArray[3]);

const myArr2 = new Array(1,2,3,4);
console.log(myArr2[0])

// Array method
myArr.push(20);
myArr.push(10);
myArr.pop();
myArr.unshift(50);
myArr.unshift(40);
myArr.shift();


console.log(myArr);

console.log(myArr.includes(5));
console.log(myArr.includes(9));
console.log(myArr.indexOf(8));
console.log(myArr.indexOf(3));


const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof myArr);
console.log(typeof newArr);

// slice ,splice

console.log("A ",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1,3)
console.log("c ",myArr)
console.log(myArr2)
