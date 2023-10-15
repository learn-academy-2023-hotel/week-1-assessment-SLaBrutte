// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// const aaa = (padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))
// console.log(aaa.length)

// Expected output: 9

// Pseudo code:
//For line 29 im setting a varible that combines the array of lines 27 and 28 together using .concat
//Line 30. Since im combined my arrays together. I can call upon the set variable and take its total length = 9.



// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

// const currentCohort = "Golf 2023"
// const aaa = currentCohort.split("")
// const bbb = aaa.reverse()
// const ccc = bbb.join("")

// console.log(ccc)
// Expected output: "3202 floG"


// Pseudo code:
//Use the split command to turn my string into an array because you cant reverse and array
//Line 44 turns my array into a reverse order
//Line 45 turns my array back into a string 
//out puts in reverse order

// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

// const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// for (let i = 0; i < stockExchange.length; i++){
//     if (stockExchange[i] % 2 !== 0){
//         console.log(stockExchange[i])
    // }
// }
// Expected output: 13 5 -5 27

// Pseudo code:
//I use a loop to run my function till the end of its set array
//Line 60. setting my parameters for my loop to run
//says my index of my array cannot have a remainder and if it does to print the index out

