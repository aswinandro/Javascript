// Basics of Javascript Learn Line by Line -------------------------------------------------------


console.log('Hello Novice Programmer')
// alert('yo')

var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);


// document.getElementById('someText').innerHTML=someNumber;

var age=prompt('What is your Age');

document.getElementById("age").innerHTML=age;

// Numbers in Javascript--------------------------------------------------------

var num1 = 5.7;
console.log(5*10);

var num1=10;
num1=num1+1;
console.log(num1);

//  Increment Assignment--------------------------------------------------

num2 = 10;
num2 +=5;
console.log(num2);

console.log(num2%2);

console.log(num2/2);

// functions create.-----------------------------------------------------------

function fun(){
    alert('This is a Function')
}

// function calling ------------------------------------------------------

fun();

// Create a function that takes in a name and returns to you & Concatenation

function greet(){
    var name = prompt('Whats your Name');
    var result = "Hello " + name;
    console.log(result)
}

greet();


// function with arguments -------------------------------------------------------


function sum(x,y){
  console.log(x+y); 
}

sum(10,10);
sum('Aswin ' , ' Andro');

function greeting(lname){
    var result = "Hello " + lname;
    console.log(result)
}


var lname= prompt('Whats your Last Name');
greeting(lname); 

// Looping -  Learn

alert("You are Gonna Learn about Looping")


// While Looping ---------------

var num = 0;

while (num <100){
    num +=1;
    console.log(num)
}

// For loop

for (let num=0 ; num<100; num++){
    console.log(num);
}

// Data Types

var yourAge = 18;
let yourNAme = "Sam";
let name = {first: "Sam", last: "billings"};   //Objects
let truth = false; //boolean;
let groceries = ['apple','banana','mango'] // Array
let random; //undefined
let nothing =null; //null


// ===================================Strings Common Methods

alert('String Methods')

let fruit = "Apple";

let moreFruits = 'bannana \nApple'  // Escape Sequence =-=== New Line
console.log("Length of fruit String is " +fruit.length);

console.log(fruit.indexOf('e'));
console.log(fruit.slice(2,6)); 
console.log(fruit.replace('ple', '123'));
console.log(fruit);
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(3));
console.log(fruit[2]);
console.log(fruit.split(','));


// Array ------------------------------------------------------------------------------

alert('Array ----- Man')

let fruits = ['foo','banana','apple',];
console.log(fruits[2]);

fruits[0]='pear';
console.log(fruits[0])

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// Array Common Methods 

console.log('Array Common Methods');

console.log('toString', fruits.toString());
console.log(fruits.join('*'));
console.log(fruits.pop(),fruits);

// Push

console.log(fruits.push('blackberry'), fruits);
console.log(fruits[4]);
fruits[fruits.length] = 'new fruit' // same as push
console.log(fruits);
fruits.shift(); //remove first element from a list
console.log(fruits);
fruits.unshift('kiwi');
console.log(fruits);

let vegetables = ['tomato','brocoli','onion'];

alert('Combining Arrays');

let allGroceries = fruits.concat(vegetables); // combine arrays
console.log(allGroceries);

console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse()); //reversing array
console.log(allGroceries.sort());

let someNumbers = [5,6,123,4532,67,8,5,34,32,43,21,34,234,,43,21,43];

console.log(someNumbers.sort(function(a,b) { return a-b})); //sorting in ascending order

console.log(someNumbers.sort(function(a,b) { return b-a})); //sorting in descending order

// Array initialising using loop

let emptyArray = new Array();

for (let n=0; n < 10; n++){
    emptyArray.push(n);
}

console.log(emptyArray);