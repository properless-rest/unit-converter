import { meterToFeet, footToMeters, literToGallons, gallonToLiters, kiloToPounds, poundToKilos, convert } from "./converter.js";
import { lightSwitcher, darkSwitcher, switchToLightTheme, switchToDarkTheme } from "./themes.js";


function renderAdmissibleInput(inputValue) {
    document.getElementById("length-conv").innerHTML = 
        `${inputValue} meters = ${convert(inputValue, meterToFeet)} feet |<br>${inputValue}&nbsp;feet = ${convert(inputValue, footToMeters)}&nbsp;meters`;
    document.getElementById("volume-conv").innerHTML = 
        `${inputValue} liters = ${convert(inputValue, literToGallons)} gallons |<br>${inputValue}&nbsp;gallons = ${convert(inputValue, gallonToLiters)}&nbsp;liters`;
    document.getElementById("mass-conv").innerHTML = 
        `${inputValue} kilos = ${convert(inputValue, kiloToPounds)} pounds |<br>${inputValue}&nbsp;pounds = ${convert(inputValue, poundToKilos)}&nbsp;kilos`;   
}


function renderInadmissibleInput() {
    inputEl.value = "";
    hintEl.classList.remove("invisible");
    timeOutId ? clearTimeout(timeOutId) : null;
    timeOutId = setTimeout(
        () => {
            hintEl.classList.add("invisible");
        }, 
        2500);
}


function renderConvertedValues() {
    let inputValue = inputEl.value;
    if (!inputValue) {
        // don't do anything if nothing was input;
        return null;
    }
    // "0.00", "0.0" and "0" will be rendered as 0 in converted metrics;
    if (Number(inputValue) === 0) {inputValue = 0}
    // get rid of trailing zeroes if present;
    if (inputValue >=0 && inputValue <= 999) {
        renderAdmissibleInput(inputValue);
    } else {
        renderInadmissibleInput();
    }
}


function validateInput(input) {
    // input no more than 4 characters
    if (input.length > 4) {
        input[3] != "." ? inputEl.value = input.substring(0, 4) : inputEl.value = input.substring(0, 3);
    } 
    // prevent trailing zero & substitute with the input non-zero digit
    if (input.length === 2 && (input[0] === "0" && input[1] !== ".")) {
        inputEl.value = `${input[input.length - 1]}`;
    // add decimals on absent integer zero (start typing a decimal with ".")
    } else if (input[0] === "." || input[0] === ",") {
        inputEl.value = `0.${input[input.length - 1]}`;
    }
}


function activateEventListeners() {
    lightSwitcher.addEventListener("click", switchToLightTheme);
    darkSwitcher.addEventListener("click", switchToDarkTheme);
    inputEl.addEventListener("input", () => { validateInput(inputEl.value) })
    btnConvert.addEventListener("click", renderConvertedValues);
}


// if __name__ == "_main__":
const inputEl = document.querySelector(".input-value");
const hintEl = document.getElementById("hint");
const btnConvert = document.querySelector(".btn-convert");

let timeOutId;

activateEventListeners();
