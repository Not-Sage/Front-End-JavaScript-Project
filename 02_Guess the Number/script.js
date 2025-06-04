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

// Accessing incnum and decnum

let incnum = document.getElementsByClassName("changenum")[0];
let decnum = document.getElementsByClassName("changenum")[1];


// Accessing Inpnum 

let inputnum = document.getElementById("num");

incnum.addEventListener("click", function() {
    inputnum.value = parseInt(inputnum.value) + 1;
});
decnum.addEventListener("click", function() {
    inputnum.value = parseInt(inputnum.value) - 1;
});

// Generating the Random Number

rannum = Math.floor(Math.random() * (parseInt(minvalue.value) - parseInt(maxvalue.value) -1)) + parseInt(maxvalue.value) + 1;


let count = 0;

// let rannum;
generate.addEventListener("click", function() {
    let inputval = document.getElementById("num");
    inputval = Number(inputval.value);
    count++;
    if(inputval == rannum){
        disnumber.textContent = `${rannum} is the generated number and you took ${count} attempts to guess it right!`;
        count = 0; // Reset count after correct guess
        rannum = Math.floor(Math.random() * (parseInt(minvalue.value) - parseInt(maxvalue.value) -1)) + parseInt(maxvalue.value) + 1;
    }
    else if (inputval < minvalue.value || inputval > maxvalue.value) {
        disnumber.textContent = `Please enter a number between ${minvalue.value} and ${maxvalue.value}`;
    }
    else if(inputval >= rannum){
        disnumber.textContent = `${inputval} is too High!!`;
    }
    else if(inputval <= rannum){
        disnumber.textContent = `${inputval} is too Low!!`;
    }
    else{
        disnumber.textContent = "Please enter a valid number";
    }
});
