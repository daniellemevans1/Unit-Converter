
/*
1 meter = 3.281 feet        1 foot = 0.305 meter
1 liter = 0.264 gallon      1 gallon = 3.788 liter
1 kilogram = 2.204 pound    1 pound = 0.454 kilogram
*/
/*
20 meters = 65.616 feet | 20 feet = 6.096 meters
20 liters = 5.284 gallons | 20 gallons = 75.708 liters
20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
*/

const convertEl = document.querySelector("#convert-el");
let num;

const meterFeetEl = document.querySelector("#meter-feet");
const litersGallonsEl = document.querySelector("#liters-gallons");
const kilogramsPoundsEl = document.querySelector("#kilograms-pounds");


convertEl.addEventListener("click", function() {
    num = document.querySelector("input").value;
    
    const metersToFeet = num * 3.281;
    const feetToMeters = num * 0.305;
    meterFeetEl.textContent = `${num} meters = ${metersToFeet.toFixed(3)} feet | ${num} feet = ${feetToMeters.toFixed(3)} meters`;
    const litersToGallons = num * 0.264;
    const gallonsToLiters = num * 3.788;
    litersGallonsEl.textContent = `${num} liters = ${litersToGallons.toFixed(3)} gallons | ${num} gallons = ${gallonsToLiters.toFixed(3)} liters`;
    const kilosToPounds = num * 2.204;
    const poundsToKilos = num * 0.454;
    kilogramsPoundsEl.textContent = `${num} kilos = ${kilosToPounds.toFixed(3)} pounds | ${num} pounds = ${poundsToKilos.toFixed(3)} kilos`;

});
