'use strict '

var user_name = prompt("Please enter your name: ");
var gender = prompt("Enter his/her gender: [male / female]");
if (gender == "male" || gender == "female" || gender == "m"  || gender == "f") {
    var age = prompt("Please enter your age: ");

while (age <= 0) {
    alert("You're age have to be more than zero");
    age = prompt("please enter your age again: ");
}

var conf = prompt("Do you want to skip the welcoming message !? [y/n]");

if (conf == "n"){
    switch (gender) {
        case "female":
        case "f": 
            alert("You are welcome Ms. " + user_name);
            break;
        
        case "male":
        case "m": 
            alert("You are welcome Mr. " + user_name);
            break;

        default:
            alert("You are welcome "+ user_name); 
            break;
    }
}

}
else{
    gender = prompt("Please enter the gender again: ");
}




