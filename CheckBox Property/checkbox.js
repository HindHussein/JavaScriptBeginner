const nameInput = document.getElementById("nameInput");

const graduateCheckBox = document.getElementById("graduate");
const graduateLabel = document.getElementById("graduateLabel");

const studentCheckBox = document.getElementById("student");
const studentLabel = document.getElementById("studentLabel");

const unemployedCheckBox = document.getElementById("unemployed");
const unemployedLabel = document.getElementById("unemployedLabel");

const submitButton = document.getElementById("submitBtn");
const myLabel = document.getElementById("myLabel");
const mySecondLabel = document.getElementById("mySecondLabel");
let myH3;

submitButton.onclick = function() {

    nameInput.style.display = "none";
    graduateCheckBox.style.display = "none";
    graduateLabel.style.display = "none";
    studentCheckBox.style.display = "none";
    studentLabel.style.display = "none";
    unemployedCheckBox.style.display = "none";
    unemployedLabel.style.display = "none";
    submitButton.style.display = "none";
    myLabel.style.display = "none";
    mySecondLabel.style.display = "none";


    if(graduateCheckBox.checked){
        myH3 = `Welcome, ${nameInput.value}! Congratulations on Graduating`
        console.log(myH3);
        document.getElementById("myH3").textContent = myH3;
    }
    else if(studentCheckBox.checked){
        myH3 = `Welcome, ${nameInput.value}! You are Currently a Student`
        document.getElementById("myH3").textContent = myH3;
    }
    else if(unemployedCheckBox.checked){
        myH3 = `Welcome, ${nameInput.value}! You are Currently Unemployed:(`
        document.getElementById("myH3").textContent = myH3;
    }

    else {
        nameInput.style.display = "inline";
        graduateCheckBox.style.display = "inline";
        graduateLabel.style.display = "inline";
        studentCheckBox.style.display = "inline";
        studentLabel.style.display = "inline";
        unemployedCheckBox.style.display = "inline";
        unemployedLabel.style.display = "inline";
        submitButton.style.display = "inline";
        myLabel.style.display = "inline";
        mySecondLabel.style.display = "inline";
        
        myH3 = `Make Sure You're Inputting Information`
        document.getElementById("myH3").textContent = myH3;
    }
}

