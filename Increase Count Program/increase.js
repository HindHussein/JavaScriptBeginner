const myH2 = document.getElementById("myH2");
const myH1 = document.getElementById("myH1");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.onclick = function () {

    for (let i = 0; i <= 100; i++) {
        setTimeout(function () {
            console.log(i);
            incrementBtn.style.display = "none";
            myH1.textContent = "Counting Currently";
            document.getElementById("myH2").textContent = i;
        }, i * 200);

        setTimeout(function(){
            incrementBtn.style.display = "inline";
             myH1.textContent = "Count Again?";
        }, 100 * 200);
    }



}
