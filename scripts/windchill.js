// Select the elements
const wcf = document.querySelector('#wcf');
const lastModified = document.querySelector('#lastModified');
const currentYear = document.querySelector('#currentYear');

// Function to calculate wind chill
function calculatewindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    );
}

// Set the temperature and wind speed
let tempC = 10; // Example temperature
let speed = 4;  // Example wind speed

// Calculate wind chill and update the text content
if (tempC <= 10 && speed > 4.8) {
    wcf.textContent = calculatewindChill(tempC, speed).toFixed(1);
} else {
    wcf.textContent = "N/A";
}

// Update last modified date
lastModified.textContent = new Date(document.lastModified).toLocaleString();

// Get current year
currentYear.textContent = new Date().getFullYear();