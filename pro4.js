var brand = "Toyota";
let model = "Fortuner";
const year = 2024;
let color = "Black";
const fuel = "Diesel";
let price = 4500000;
var automatic = true;
const mileage = 14;

function showProfile() {
    document.getElementById("output").innerHTML = `
        <b>Brand :</b> ${brand}<br>
        <b>Model :</b> ${model}<br>
        <b>Year :</b> ${year}<br>
        <b>Color :</b> ${color}<br>
        <b>Fuel :</b> ${fuel}<br>
        <b>Price :</b> ₹${price.toLocaleString("en-IN")}<br>
        <b>Automatic :</b> ${automatic}<br>
        <b>Mileage :</b> ${mileage} km/l<br>
    `;
}