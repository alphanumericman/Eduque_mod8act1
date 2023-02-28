var fullname, user, genderset, description, birthYear, aged, pfp;

fullname = prompt("Please enter your full name:");
user = prompt("Enter your username:");
let MorF;
if (confirm("What is your gender \n Press OK if you are Male \n Cancel if Female") == true) {
    alert("Your profile gender is set to MALE");
    genderset = "M";
}
else {
    genderset = "F";
    alert("Your profile gender is set to FEMALE");
}
description = prompt("Please type a brief description of yourself");
birthYear = parseInt(prompt("Please enter your Birth Year:"));

let pfpYN;
if (confirm("Do you want a custom profile picture?") == true) {
    pfp = prompt("Please enter the name of the picture. (Ex: wow.jpg");
    alert("Profile picture has been updated.");
    document.getElementById("ppic").src = pfp;
}
else {
    alert("No image has been set");
}

aged = 2023 - birthYear;

document.getElementById("fname").innerHTML = fullname;
document.getElementById("gender").innerHTML = genderset;
document.getElementById("username").innerHTML = user;
document.getElementById("desc").innerHTML = description;
document.getElementById("year").innerHTML = birthYear;
document.getElementById("age").innerHTML = aged;