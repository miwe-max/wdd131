const windChillElement = document.querySelector("#wcf");
const lastModifiedElement = document.querySelector("#lastModified");
const currentYearElement = document.querySelector("#currentYear");

const temperature = 30;
const windSpeed = 10;

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
    windChillElement.textContent = "N/A";
}

currentYearElement.textContent = new Date().getFullYear();
lastModifiedElement.textContent = document.lastModified;