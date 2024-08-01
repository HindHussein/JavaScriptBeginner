const toFahrenheit = document.getElementById("toFahrenheit");
const toFahrenheitBtn = document.getElementById("toFahrenheitBtn");
const celsiusTemperature = document.getElementById("celsiusTemperature");
const fahrenheitTemperature = document.getElementById("fahrenheitTemperature");

const toCelsius = document.getElementById("toCelsius");
const toCelsiusBtn = document.getElementById("toCelsiusBtn");
const fahrenheitInputTemperature = document.getElementById("fahrenheitInputTemperature");
const celsiusToFTemperature = document.getElementById("celsiusToFTemperature");


toFahrenheit.addEventListener('click', function () {
    document.querySelector('.card').classList.add('flipped');
    celsiusTemperature.value = "";
    fahrenheitTemperature.textContent = "";
});

toCelsius.addEventListener('click', function () {
    document.querySelector('.card').classList.remove('flipped');
    fahrenheitInputTemperature.value = "";
    celsiusToFTemperature.textContent = "";
});

toFahrenheitBtn.onclick = function () {
    let fahrenheit;
    fahrenheit = celsiusTemperature.value * (9 / 5) + 32;
    fahrenheitTemperature.textContent = `Fahrenheit is equal to ${fahrenheit.toFixed(2)}`;
}

toCelsiusBtn.onclick = function () {
    let celsius;
    celsius = (fahrenheitInputTemperature.value - 32) * 5 / 9;
    celsiusToFTemperature.textContent = `Celsius is equal to ${celsius.toFixed(2)}`;
}
