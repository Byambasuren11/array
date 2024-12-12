// 1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr) {
  // your code here
  for (let i = 0; i <= arr.length - 1; i++) {
    arr[i] = arr[i] * 2;
  }
  return arr;
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// Take an array of numbers and make them strings
function stringItUp(arr) {
  // your code here
  let stringIt = [];
  for (i = 0; i <= arr.length - 1; i++) {
    stringIt.push(arr[i].toString());
  }
  return stringIt;
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// 3) Capitalize each of an array of names
function capitalizeNames(arr) {
  // your code here
  let toLower = [];
  let firtsUpper = [];
  for (i = 0; i <= arr.length - 1; i++) {
    toLower.push(arr[i].toLowerCase());
    toLower[i] = toLower[i].charAt(0).toUpperCase()+toLower[i].slice(1,toLower[i].length);
   // firtsUpper.push(toLower[i].slice(1,toLower[i].length));
  }
  return toLower;
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// 4) Make an array of strings of the names
function namesOnly(arr) {
  // your code here
  let nameOnly=[];
  for(i=0; i<=arr.length-1;i++){
    nameOnly.push(arr[i].name);
  }
  return nameOnly;
}

console.log(
  namesOnly([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr) {
  // your code here
  for(i=0; i<=arr.length-1;i++){
    if(arr[i].age>=21){
       arr[i]=arr[i].name+" can go to The Matrix"
    }
    else{
         arr[i]=arr[i].name+" is under age!!"
    }
  }
  return arr
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

/*
  Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
   
  Examples:
      doubleValues([1,2,3]) // [2,4,6]
      doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
   
  */
function doubleValues(arr) {

}
// console.log(doubleValues([1,2,3]));

//   Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
function onlyEvenValues(arr){
    let evenNumber=[];
for(i=0;i<=arr.length-1;i++){
    if(arr[i]%2===0){
        evenNumber.push(arr[i]);
    }
}
return evenNumber;
}
//   Examples:
//       onlyEvenValues([1,2,3]) // [2]
      // [2,10]
   console.log(onlyEvenValues([5,1,2,3,10]));

// function onlyEvenValues(arr) {}
// console.log(onlyEvenValues([1, 2, 3, 4, 5, 7, 8, 9, 10, 11]));

// console.log(filteredNumbers);F

// console.log(`Initial array ${numbers}`);

// numbers.pop();
// console.log(`Popped array ${numbers}`);

// numbers.push(123);
// console.log(`Pushed array ${numbers}`);

// numbers.shift();
// console.log(`shifted array ${numbers}`);

// numbers.unshift(1234123);
// console.log(`Unshifted array ${numbers}`);

// const string = "string";
// console.log(string.split(""));
// const arrayOfStings = string.split("");
function originalFlavors(arr){
    if(originalFlavors.length===31){
        return true;
    }
    else {
        return false;
    }
}

const arr = [
  "Banana Nut Fudge",
  "Black Walnut",
  "Burgundy Cherry",
  "Butterscotch Ribbon",
  "Cherry Macaron",
  "Chocolate",
  "Chocolate Almond",
  "Chocolate Chip",
  "Chocolate Fudge",
  "Chocolate Mint",
  "Chocolate Ribbon",
  "Coffee",
  "Coffee Candy",
  "Date Nut",
  "Eggnog",
  "French Vanilla",
  "Green Mint Stick",
  "Lemon Crisp",
  "Lemon Custard",
  "Lemon Sherbet",
  "Maple Nut",
  "Orange Sherbet",
  "Peach",
  "Peppermint Fudge Ribbon",
  "Peppermint Stick",
  "Pineapple Sherbet",
  "Raspberry Sherbet",
  "Rocky Road",
  "Strawberry",
  "Vanilla",
  "Vanilla Burnt Almond",
];
console.log(originalFlavors(arr));
/* Task 1: Confirm that the array is exactly 31 flavors. Your function should accept:
   
  (1) an array
   
  Your function should return a boolean TRUE if the length of the array is 31 and FALSE if the length of the array is NOT 31.
   
   
   
  To save you from having to count the items above, you can assume that length of originalFlavors is 31. You may also want to test your function by creating and passing an array of a different length, to make sure it returns FALSE if length is not 31.
   
  i.e. is31Flavors(originalFlavors) will return TRUE.*/

/* Task 2: Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor.
   
  Your function should accept:
   
  (1) an array
  (2) a flavor
   
   
   
  Your function should add the flavor to the front of the array and console.log the resulting array.
   
  For example addFlavor("Rainbow Sherbert", originalFlavors) should return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"] */

function addFlavor(array, flavor) {}

/* Task 3: Houston, we have a problem! There are now 32 flavors in the array! Your task is to remove an item from the end of the array.
   
  Your function should accept:
   
  (1) an array
   
  Your function should remove a flavor from the end of the array and console.log the resulting array.
   
   
   
  For example removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]*/

/* Task 4: Write a function that returns a flavor at a given index in the array.
   
  Your function should accept:
   
  (1) an array
  (2) an index
   
  For example, getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully. */

/* Task 5: As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that flavor from the array.
   
  Your function should accept:
   
  (1) an array
  (2) a string (flavor)
   
  For example, removeFlavorByName(originalFlavors, "Vanilla") would return an array with the length 30 including all of the flavors except Vanilla.
   
  Hint: You can use .splice() for this
   
  */

/* Task 6: With all of these changes going on, we don't want to lose track of the actual, original 31 flavors. Write a function called copy that makes a copy of the array.
   
  Your function should accept:
   
  2 arguments 1 for your new array and one for your original array
   
  and should return a new array that is identical to the old array. You can name the new array however you'd like. */

/* Task 7: July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional materials highlighting all of their chocolate flavors. Write a function that checks every item in the array for a given string and returns a new array called filteredArray with just these values. Rather than hardcoding "chocolate" into your function, pass a string as a parameter, and invoke with the argument "chocolate". This way you could also filter for "Vanilla", "Sherbert", etc. when those holidays roll around.
   
  Your function should accept:
   
  (1) an Array
  (2) a string (i.e. "chocolate")
   
  and return a new array.
   
  For example, filterByWord(originalFlavors, "Chocolate") should return ["Chocolate", "Chocolate Almond",..."Chocolate Ribbon"].
   
  DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem.
   
  hint - you can use the .includes method to help you solve this */

// function filterByWord(array, word) {
//   const filteredArray = [];
//   array.forEach(function (flavor) {
//     if (flavor.includes(word)) {
//       console.log(flavor);
//     }
//   });
//   //   return filteredArray;
// }

// console.log(filterByWord(originalFlavors, "chocolate"));
/* 🧁🍦🍨 STRETCH 🍨🍦🍫*/

/* STRETCH 1: Write a function that returns the average number of words in an array. You should be able to use this function for any array, but can test with originalFlavors.
   
  Your function should accept:
   
  (1) an array
   
  and should return the average number of words per item in the array.
   
  For example, getAverageWordLength(originalFlavors) should return a number between 0 and 3. */

function getAverageWordLength(/*code here*/) {
  /*code here*/
}
// Exercise 1
// Write a JavaScript function to sort three numbers in array. Return sorted array.
// Sample numbers : [0, -1, 4]
// Output : [4, 0, -1]
// notes:
//     https://www.geeksforgeeks.org/javascript-array-sort/
//     https://www.w3schools.com/jsref/met_win_alert.asp
 
// 1. write function ==> function will take array as input
// 2. sort the numbers inside the array and return sorted array
 
function sortedArray(array) {
    array.sort(function(a, b){return a-b} );
    array.reverse();
    return array;
}

let example = [10, 20, 100]
10, 100, 20  
console.log(sortedArray([5, 7, 10, -10, 56]));
// ==> [56, 10, 7,5,-10]

 
 
 
// Exercise 1
 
// Create a function that will display the smallest value in the array.
function findSmallest(arr){
    arr.sort(function(a, b){return a-b} );
    return arr[0];
}
// Example:
console.log(findSmallest([30, 45, 60, 7]));
// > 1
 
 
// Exercise 2
 
// Create a function that will accept an array, check the data type of each element. The function will delete string elements and will return a the new array
 function numbersOnly(arr){
    let onlyNumber=[];
   //console.log(typeof arr[0])
    for(i=0; i<=arr.length-1;i++){
        if((typeof arr[i])==="number"){
            onlyNumber.push(arr[i]);
        }
    }
    return onlyNumber;
 }
// Example:
 console.log(numbersOnly(['text', 3, 7, 'github', 13, 'dev']));
// > [ 3, 7, 13 ]
 
// Exercise 3
 
// Create a function that will accept an array and do the following:
// Get the lowest element
// Get the highest element
// Get the length of array
// Get the Average of all element;
// Store these criteria in a new array
 function minMaxLengthAverage(arr){
    let push=[];
    let sum=0;
    arr.sort(function(a, b){return a-b});
    push.push(arr[0]);
    push.push(arr[arr.length-1])
    for(i=0;i<=arr.length-1;i++){
        sum+=arr[i];
    }
    push.push(arr.length);
    push.push(sum/arr.length);
    return push;
 }
// Example:
console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));
// > [ 3, 100, 5, 40 ]
 
// Exercise 4
 
// Count the number of Words
// Return how many words was given
function countWords(sen){
    let count=0;
    for(i=0;i<=sen.length-1;i++){
        if(sen[i]===" "){
            count++;
        }
    }
    return count+1;
 }
// Example:
console.log( countWords('hello from kbpsystem!'));
// > 3
 
// Exercise 5
 
// Multiply by Length
// Multiply all elements in an array by it's length
 function multiplyByLength(arr){
    for(i=0;i<=arr.length-1;i++){
        arr[i]*=arr.length;
    }
    return arr;
 }
// Example:
 console.log(multiplyByLength([4,1,1]));
// > [12, 3, 3]
 
// Exercise 6
 
// Find the correct Index location
// Return the index location of an element from a given array. First argument is the array you'd like to search and the second one is the element (either string/number) to look for.
 function findIndex(arr,arrElement){
    for(i=0;i<=arr.length;i++){
        if(arr[i]===arrElement){
            return arr.indexOf(arr[i]);
        }
    }
 }
// Example:
 console.log(findIndex(['github', 'gitlab', 'bitbucket', 'apollo'], 'gitlab'));
// > 1
 

 