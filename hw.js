/* Strive-Homework-M2-W3-P1 */

/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help if you get stuck, reach a Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux
- The solution must be pushed into your repository and be available in eduflow before the next lecture day
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/* WRITE YOUR ANSWER HERE */

// const area = function (l1, l2) {
//     let calculateTheArea = l1 * l2
//     return calculateTheArea
// }

// console.log(area (2,3)) // 6
// console.log(area (10,3)) // 30
// console.log(area (1,3)) // 3

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */

// const crazySum = function (int1, int2){
//     if (int1 === int2){
//         return (int1 + int2)*3
//     }else{
//         return int1+int2
//     }
// }

// console.log(crazySum (2,2)) // 12
// console.log(crazySum (1,3)) // 4



/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */

// const crazyDiff = function (n){
//     if (n > 19){
//         return (Math.abs(19-n))*3
//     }else{
//         return Math.abs(19-n)
//     }
// }

// console.log(crazyDiff(20))

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */

// const boundary = function (n){
//     if (n>20 && n <=100 || n === 400){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(boundary(400))

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */
// const strivify = function (str){
//     if (str.includes("Strive") === true){
//         return str
//     }else{
//         return ("Strive"+str)
//     }
// }
// console.log(strivify("school"))
// console.log(strivify("Strive alumn"))

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */
// const check3and7 = function (n){
//     if (n%3 === 0){
//         return ("it is a multiple of 3")
//     }if (n%7 === 0){
//         return ("it is a multiple of 7" )
//     }else{
//         return ( "Not 3 or 7")
//     }
// }
// console.log(check3and7(27))

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */
// const reverseString = function (str){
//     let newString = ""
//     for (let i=str.length-1; i>=0; i--){
//         newString = newString + str[i]
//     }
//     return newString
// }

// console.log (reverseString ("Strive"))

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */
// const upperFirst = function (str1){
//     let str2= ""
//     str2 = str1.charAt(0).toUpperCase() + str1.slice(1)
//     return str2
// }
// console.log(upperFirst("this"))

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

// const cutString = function (str1){
//         let str2= ""
//         str2 = str1.slice(1,-1)
//         return str2
//     }
// console.log(cutString("madame"))

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

// const giveMeRandom = function (n){
//     let a=[]
//     for (let i=0; i<=10; i++){
//         a.push(Math.floor(Math.random()*11))
//     }
//     return a
// }
// console.log(giveMeRandom(8))


/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/