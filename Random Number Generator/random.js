const randomButton = document.getElementById("randomButton");
const myLabel = document.getElementById("myLabel");
const myH1 = document.getElementById("myH1");
let random;

randomButton.onclick = function() {
    random = Math.floor(Math.random() * 100 - 1 ) + 1;
    myLabel.textContent = random; 
    myH1.textContent = "Generate More Random Numbers by Clicking the Button"
}