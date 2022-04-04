// var age = prompt("What's your age? ");
// document.getElementById('age').innerHTML = age;

// function fun(name){
//   console.log("hello " + name);
// }

// var name = prompt("Please telll me your name? ");
// fun(name);


// function sumNum(num1, num2){
//   console.log(num1+num2);
// }

// sumNum(20,30);

// var num =1;
// while(num <=100){
//   console.log(num);
//   num++;
// }


// for(let num1 = 1; num1<=10; num1++){
//   console.log(num1);
// }

// let random //undefined
// let nothing = null // value null


// let fruit = 'mango';
// let moreFruits = 'mango\nbanana'; //new line
// console.log(moreFruits);

// console.log(fruit.length); //string length
// console.log(fruit.indexOf('q')); 
// console.log(fruit.slice(2,5));
// console.log(fruit.replace('man','123'));
// console.log(fruit.toUpperCase());
// console.log(fruit.charAt(2));
// console.log(fruit.split(''));


// let fruits = ['a','b','c'];
// let veg = ['a','b','c'];
// console.log(fruits.toString());
// console.log(fruits.join(" - "));
// console.log(fruits.pop()); //remove last elemnet
// console.log(fruits.push("d"),fruits); //append
// console.log(fruits.shift());
// console.log(fruits.unshift("test")); 
// console.log(fruits.concat(veg));
//slice
//reverse
//sort() string
//function(a,b){ return a - b } asc
 //function(a,b){ return b - a } desc
//  let emptyArr = new Array();

// let student = {
//   fname : "Pooja",
//   lname : "paul",
//   studentInfo : function (){
//     return this.fname + " " + this.lname;
//   }
// }

// console.log(student.fname);
// console.log(student.studentInfo());
let age = 28;
if(age > 18 ){
  console.log("greater than 18")
}else{
  console.log("younger than 18")
}



switch (6) {
  case 0:
    text = "weekend";
    break;
  case 5:
    text = "weekend";
    break;
  case 6:
    text = "weekend";
    break;
  default:
    text = "weekday"
    break;
}
console.log(text)