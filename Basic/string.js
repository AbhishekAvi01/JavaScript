const name ="Abhishek"
const repoCount =50

//  console.log(name + repoCount)// this is not used in modern 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another important method of declaration of string
const gameName = new String("Aryan_Abhishek");
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase()); // all value is UperCase but original value is not changed
//console.log(gameName);

console.log(gameName.charAt(2));

console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,3)
console.log(newString)

const anotherString = gameName.slice(-5, 3)
console.log(anotherString)


const newString1=new String("Abhishek")
console.log(newString1)

const anotherstring2 = newString1.slice(-8 ,0);
console.log(anotherstring2)



const url = "http:/abhishek%20@gamil.com"
console.log(url.replace('%20','_'))

console.log(url.includes('abhishek'))

console.log(gameName.split('_'))





let myString = new String("   Aryan_Abhishek%20_delhi");
console.log(myString);

console.log(myString.length);

console.log(myString[3]);

console.log(myString.charAt(8));

console.log(myString.indexOf('k'));

console.log(myString.substring(0,5));

console.log(myString.slice(6,14));

console.log(myString.slice(-2));

 console.log(myString.trim());

 let myNewString = myString.replace('%20',"@");
 console.log(myNewString);

 console.log(myNewString.toUpperCase());

 console.log(myNewString.toLowerCase());

 console.log(myNewString.bold());

 console.log(myString.fontcolor("red"));

 let myCity = "Jaipur ";
 console.log(myCity.repeat(4));


 console.log(myCity.padEnd(10,'-'));

 console.log(myCity.padEnd(10,'.'));
 
 console.log(myCity.padEnd(10,'@'));

 
