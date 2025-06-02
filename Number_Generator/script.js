particlesJS.load('particles-js', 'particles.json',);

let disnumber = document.getElementById("displaynumber");
let generate = document.getElementById("generate");

// Getting Min Values
let increamentmin = document.getElementsByClassName("min-max-buttons")[0];
let decreamentmin = document.getElementsByClassName("min-max-buttons")[1];
let minvalue = document.getElementsByClassName("min-max-input")[0];
// Getting Max Values
let increamentmax = document.getElementsByClassName("min-max-buttons")[2];
let decreamentmax = document.getElementsByClassName("min-max-buttons")[3];
let maxvalue = document.getElementsByClassName("min-max-input")[1];


// Changing the Min Value
increamentmin.addEventListener("click", function() {
    minvalue.value = parseInt(minvalue.value) + 1;
});
decreamentmin.addEventListener("click", function() {
    minvalue.value = parseInt(minvalue.value) - 1;
});


// Changing the Max Value
increamentmax.addEventListener("click", function() {
    maxvalue.value = parseInt(maxvalue.value) + 1;
});
decreamentmax.addEventListener("click", function() {
    maxvalue.value = parseInt(maxvalue.value) - 1;
});

// Generating the Random Number

generate.addEventListener("click", function() {
    disnumber.textContent = Math.floor(Math.random() * (parseInt(minvalue.value) - parseInt(maxvalue.value) -1)) + parseInt(maxvalue.value) + 1;
});
