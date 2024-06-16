// JavaScript source code

document.getElementById("myForm").onsubmit = submit;

function submit() {
    var feedbackformtxt = document.getElementById("feedback");
    if (feedbackformtxt.value == "") {
        alert("Feedback is empty, please provide a valid input");
        return false;
    }
    else {
        alert("Thank you for your valuable feedback!");
        return true;
    }

}