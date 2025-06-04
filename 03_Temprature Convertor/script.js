let textbox = document.getElementById("textbox");
let c2f = document.getElementsByClassName("conversion")[0];
let f2c = document.getElementsByClassName("conversion")[1];
let submit = document.getElementById("submit");
let output = document.getElementById("output");

function ctof(c){
    return (c * 9/5) + 32;
}

function ftoc(f){
    return (f - 32) * 5/9;
}

submit.addEventListener("click", function() {
    let input = Number(textbox.value);

    if(c2f.checked){
        output.innerText = "Temp: " + ctof(input) + " °F";
    }else if(f2c.checked){
        output.innerText = "Temp: " + ftoc(input) + " °C";
    }
    else if(input === 0){
        output.textContent = "Enter a Valid Temperature";
    }
    else{
        output.textContent = "Enter a Valid Temperature";
    }
});
