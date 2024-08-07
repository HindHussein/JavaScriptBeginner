// console.log(`Hello`);
// console.log(`I like pizza`);
// window.alert(`okay whats going on`);

// document.getElementById("myH1").textContent = `Hind`;
// document.getElementById("myP").textContent = `I like Pizza`;

// let age = 21;

// console.log(typeof age);
// console.log(`You are ${age} years old`);

// let email = "HindHu1205@gmail.com"
// console.log(typeof email);

/*let fullName = "Hind Hussein";
let age = 21;
let typeOfEducation = "Graduate"; 

document.getElementById("p1").textContent = `Your Full Name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} Years Old`;

if(typeOfEducation.match("Student")) { 
    document.getElementById("p3").textContent = `You are Currently a Student`;
} else if (typeOfEducation.match("Graduate")) {
    document.getElementById("p3").textContent = "You have Graduated";
} else if (typeOfEducation.match("Unemployed")) {
    document.getElementById("p3").textContent = "You are Currently Unemployed";
} else {
    document.getElementById("p3").textContent = "You're Working!";
}


let result = 12 % 5 + 8 / 2;
console.log(result); */

/*
let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myLabel").style.display = "none";
    document.getElementById("myH1").textContent = `Welcome ${username}`;
    document.getElementById("myText").style.display = "none";
    document.getElementById("myButton").style.display = "none";
    console.log(username);
}
    */



/*let age = window.prompt("Whats your Age?");
age = Number(age); //making it a number since its a string by default
age+= 1;
document.getElementById("myH1").textContent = `You are ${age} Years Old`;
console.log(age);

*/

/*function add(x, y){
    let result = x + y;
    return result;
}

console.log("hello");

let answer = add(6, 4);
console.log(answer);

*/

/*let numbers = [1, 2, 3, 4, 5];
numbers.forEach(display);

function display(number){
    console.log(number);
}
*/

/*let fruits = ["apple", "oranges", "banana"];
fruits.forEach(capatalize);
fruits.forEach(display);

function capatalize(element, array, index){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}*/

/*const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
display(squares);

function square(element){
    return Math.pow(element, 2);
}

function display(element){
    console.log(element);
}*/

/*const students = ["Hind", "Mahmoud", "Amal", "Ayatt"];
const upper = students.map(upperCase);
console.log(upper);

function upperCase(element){
    return element.toUpperCase();
}*/

/*const dates = ["2024-06-01", "2022-07-06", "2003-05-12"];
const formattedDates = dates.map(formattedDate);
console.log(formattedDates);

function formattedDate(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}*/

/*let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNums = numbers.filter(isOdd);
console.log(evenNums);

function isEven(element){
    return element % 2 == 0;
}

function isOdd(element){
    return element % 2 != 0;
}*/

/*const ages = [16, 17, 18, 20, 17, 21];
let minors = ages.filter(isMinor);
console.log(minors);

function isMinor(element){
    return element >= 18;
}*/

/*const words = ["apple", "orange", "banana", "cocounut", "pomegranate"];
const shortWords = words.filter(getShortWords);
console.log(shortWords);

function getShortWords(element) {
    return element.length <= 6;
}*/

/*const prices = [5, 30, 25, 20, 10, 15];
const total = prices.reduce(sum)
console.log(`$${total.toFixed(2)}`);

function sum(sum, element){
    return sum + element;
}*/

/*const grades = [75, 50, 90, 80, 65, 95];
const maximum = grades.reduce(getMax);
console.log(maximum);

function getMax(accumlator, element){
    return Math.max(accumlator, element);
}*/

/*const numbers = [1, 2, 3, 4, 5, 6];
const cubes = numbers.map((element) =>
    Math.pow(element, 3));

console.log(cubes);

*/

/*const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
}*/


/*function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

}

const car1 = new Car("Miata", "Mustang", 2018, "black");
*/

/*class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(4)}`);

    }

    withSalesTax(salesTax) {
        //const sum = salesTax + this.price;
        //console.log(`Price with Tax: ${sum}`)
        return salesTax + this.price;
    }


}

const product1 = new Product("Shirt", 20.99);
//product1.withSalesTax(2);
const salesTax = 5;
product1.displayProduct();

const total = product1.withSalesTax(salesTax);
console.log(`Price with tax: ${total.toFixed(3)}`);*/


