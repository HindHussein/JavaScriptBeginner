const minNum = 1;
const maxNum = 100;
const random = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a Number Between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please Insert a Number");
    }

    else if (guess < minNum || guess > maxNum) {
        window.alert(`Please Enter a Number Between ${minNum} and ${maxNum}`);
    }

    else {
        attempts++;
        if(guess < random){
            window.alert(`Try to Guess Higher`);
   
        }
        if(guess > random){
            window.alert(`Try to Guess Lower`);
   
        }

        if(guess === random){
            window.alert(`It took you ${attempts} attempts to guess it right`);
   
        }
    }
}