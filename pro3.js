var name ="Vishanu";
var email ="vishwnath@gamil.com";
let age = 20;
const phone = 1234567890;
let city = "athani";
let state = "karnataka";
const cgpa = 6.86;
var placementReady = true;
const intership = " Software Internship";

function showProfile(){
    document.getElementById("output").innerHTML =`
    
<b>Name :</b>${name}<br>
<b>Email :</b>${email}<br>
<b> Age :</b>${age}<br>
<b>Phone :</b>${phone}<br>
<b>City :</b>${city}<br>
<b>State :</b>${state}<br>
<b>CGPA :</b>${cgpa}<br>
<b>PlacementReady:</b>${placementReady}<br>
<b>Internship :</b>${intership}<br>   `;
}