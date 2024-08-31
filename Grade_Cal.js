/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/


var grade = 45 ; 
if(grade >=90 && grade <= 100){
  console.log("Grade A");
}else if(grade >=80 && grade <= 89){
  console.log("Grade B");
}else if(grade >=70 && grade <= 79){
  console.log("Grade C");
}else if(grade >=60 && grade <= 69){
  console.log("Grade D");
}else if(grade >=0 && grade <= 59){
  console.log("Grade F");
}else{
  console.log("you are not student")
}

