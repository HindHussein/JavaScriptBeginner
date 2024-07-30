let radius;
let circumference;

document.getElementById("myButton").onclick = function() {
    if(this.textContent === "Retry"){
        document.getElementById("myText").value = "";
        document.getElementById("myCircumference").textContent = "";
        this.textContent = "Calculate";
    }
    else { 
        radius = document.getElementById("myText").value;
        console.log(radius);
        circumference = 2 * Math.PI * radius;
        console.log(circumference);

        const formattedCircumference = circumference.toFixed(2);
        document.getElementById("myCircumference").textContent = `The Circumference for a radius of ${radius} is ${formattedCircumference}`;

        this.textContent = "Retry";
    }
}