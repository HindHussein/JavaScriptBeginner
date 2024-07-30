const decreaseButton = document.getElementById("decreaseButton");
const resetButton = document.getElementById("resetButton");
const increaseButton = document.getElementById("increaseButton");
let count = 0;

decreaseButton.onclick = function() {
    count-=1;
    document.getElementById("myH1").textContent = count;
}

increaseButton.onclick = function() {
    count+=1;
    document.getElementById("myH1").textContent = count;
}

resetButton.onclick = function() {
    count=0;
    document.getElementById("myH1").textContent = count;
}