/*
Generate a random number between one and ten
Prompt user to enter number
Compare the two values
Return answer
*/
function random_number_generator(min, max){
    let random_number = Math.floor(Math.random() * (max-min+1)+min);
    return random_number;
}
const random_number = random_number_generator(1,10);
const user_input = prompt ('Enter a random number from 1 to 10');
const user_number =  parseInt(user_input);

while(true)
{
if (isNaN(user_number)){
    console.log("Invalid input!, try again.")
}else if (user_number === random_number){
    console.log("Good Work")
    break;
}else {
    console.log(`Not matched. The correct number was ${random_number}`)
    break;
}
}

/*
Check Student Marks
If 89<= Total<=100 give A+
if exam='Final'&&Total>=90 give A+
*/
function checkGrade(totalMarks, examination) {
    if (examination === "Final" && totalMarks >= 90) {
        return true; 
    } else if (totalMarks >= 89 && totalMarks <= 100) {
        return true; 
    } else {
        return false; 
    }
}

//output of code
/*
1. String One
2. String One
3. True
*/
