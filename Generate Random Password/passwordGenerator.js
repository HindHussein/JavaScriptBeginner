toSignUp = document.getElementById("toSignUp");
toLogIn = document.getElementById("toLogIn");
createPasswordInput = document.getElementById("createPasswordInput");
confirmPasswordInput = document.getElementById("confirmPasswordInput");
const password = generatePassword(20, true, true, true, true);


toSignUp.addEventListener('click', function(){
    document.querySelector('.card').classList.add('flipped');
});

toLogIn.addEventListener('click', function(){
    document.querySelector('.card').classList.remove('flipped');
});

createPasswordInput.addEventListener('click', function() {
    console.log(`Generate Password Create: ${password}`);
    createPasswordInput.value = password;
    
});

confirmPasswordInput.addEventListener('click', function() {
    console.log(`Generate Password Confirm: ${password}`);
    confirmPasswordInput.value = password;
});



function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChar = "0123456789";
    const symbolsChar = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChar : "";
    allowedChars += includeSymbols ? symbolsChar : "";

    if(length<=0){
        password = "Input a Number Greater than 0";
    }
    else if(allowedChars.length === 0){
        password = "At least one case should be chosen";
    }

    for(let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    

    return password;
}

const passwordLength = 20;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

//const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
//console.log(`Generate Password: ${password}`);

