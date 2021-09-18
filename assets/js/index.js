//Excercise 4 starts from here
let userAge = prompt("Enter Your Age")
let remainingAge = 18 - userAge
if(userAge >= 18){
    alert("you are old enough to drive")
}
else if(userAge <= 1){
    alert(`hey kiddo, you are just of ${userAge} year. Wait for ${remainingAge} years and then start driving`)
}
else{
    alert(`hey kiddo, you are just of ${userAge} years. Wait for ${remainingAge} years and then start driving`)
}
//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result
//to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = 15
let yourAge = prompt("Enter Your Age")
let differenceBetweenAge = yourAge - myAge
let differenceBetweenMyage = myAge - yourAge
if(yourAge>myAge){
    console.log(`you are bigger than me by ${differenceBetweenAge} years`)
}
else{
    console.log(`I am bigger than you by ${differenceBetweenMyage} years`)
}

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways 
//by if else statement
let a = 4, b = 3
if(a>b){
    console.log("a is bigger than b")
}
else{
    console.log("b is smaller than a")
}
//by ternary operator
a>b
? console.log("a is bigger than b")
: console.log("a is smaller than b")

//even and odd number detector
let value = prompt("Enter a number to find that it is even or odd")
if(value % 2 == 0){
    console.log(`The number ${value} is even`)
}
else{
    console.log(`the number ${value} is odd`)
}


//Exercise2
//Write a code which can give grades to students according to theirs scores:
let score = prompt("What is your score")
let marks = 1
if(score >= 80 && score <= 100){
    console.log("your grade is \"A\"")
}
else if(score >= 70 && score <= 79){
    console.log("your grade is \"B\"")
}
else if(score >= 60 && score <= 69){
    console.log("your grade is \"C\"")
}
else if(score >= 50 && score <= 59){
    console.log("your grade is \"D\"")
}
else if(score >= 0 && score <= 49){
    console.log("your grade is \"F\"")
}
else{
    console.log("yourscore is wrong please enter the right value")
}

//Check if the season is Autumn, Winter, Spring or Summer. If the user input is : 
let gibberish_month = prompt("Enter about which month you wanna know about")
let month = gibberish_month.toLowerCase()
if(month == "october" || month == "november" || month == "september"){
    console.log(`${month} month having autumn season`)
}
else if(month == "january" || month == "february" || month == "december"){
    console.log(`${month} month having winter season`)
}
else if(month =="march" || month == "april" || month == "may"){
    console.log(`${month} month having summer season`)
}
else if(month == "june" || month == "july" || month == "august"){
    console.log(`${month} month having rainy season`)
} 
else{
    console.log("please write the right spelling of month")
}
//Check if a day is weekend day or a working day. Your script will take day as an input. 
let daily = prompt("enter your day buoy")
let day = daily.toLowerCase()
if(day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday"){
    console.log(`This ${day} is a working day buoy`)
}
else{
    console.log(`this ${day} is a weekend day enjoy buoy`)
}
//Write a program which tells the number of days in a month
let daysinmonth = prompt('Enter which you wanna know about')
let daysInMonth = daysinmonth.toLowerCase()
if(daysInMonth == "january" || daysInMonth == "march" || daysInMonth == "december" || daysInMonth == "may" || daysInMonth == "july" || daysInMonth == "august" || daysInMonth == "october"){
    console.log(`the month ${daysInMonth} has 31days`)
}
else if(daysInMonth == "february"){
    console.log(`this month ${daysInMonth} has 28days and in leap year ${daysInMonth} has 29days`)
}
else if(month == "april" || month == "june" || month == "september" || month =="november"){
    console.log(`this month ${daysInMonth} has 30days`)
}
else{
    console.log("entered spelling is wrong please enter right spelling")
}
