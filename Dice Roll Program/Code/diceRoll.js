function rollDiceBtn() {
    const numberInput = document.getElementById("numberInput").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i=0; i< numberInput; i++){
        const value = Math.floor((Math.random() * 6) + 1);
        values.push(value);
        images.push(`<img src="Images/${value}.png">`);
        console.log(...images);
    }

    diceResult.textContent = `Dice: ${values.join(`, `)}`;
    diceImages.innerHTML = images.join(" ");

}