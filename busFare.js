/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


var ticketPrice = 500 ; 
var age = 5 ; 
var isStudent = true;

if(age<10){
  console.log("Your ticket Price free")
}else if(isStudent){
  console.log("Your ticket price is " , ticketPrice - ticketPrice *0.5 )
}else if(age  >= 60){
  console.log("Your ticket price is " , ticketPrice - ticketPrice *0.15 )
}else {
  console.log("Your ticket Price is " , ticketPrice)
}