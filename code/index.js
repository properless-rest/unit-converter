import { meterToFeet, footToMeters, literToGallons, gallonToLiters, kiloToPounds, poundToKilos, convert } from "./converter.js";
import { lightSwitcher, darkSwitcher, switchToLightTheme, switchToDarkTheme } from "./themes.js";


function renderAdmissibleInput(inputValue) {
    document.getElementById("length-conv").textContent = 
        `${inputValue} meters = ${convert(inputValue, meterToFeet)} feet | ${inputValue} feet = ${convert(inputValue, footToMeters)} meters`;
    document.getElementById("volume-conv").textContent = 
        `${inputValue} liters = ${convert(inputValue, literToGallons)} gallons | ${inputValue} gallons = ${convert(inputValue, gallonToLiters)} liters`;
    document.getElementById("mass-conv").textContent = 
        `${inputValue} kilos = ${convert(inputValue, kiloToPounds)} pounds | ${inputValue} pounds = ${convert(inputValue, poundToKilos)} kilos`;   
}


function renderInadmissibleInput(inputValue) {
    inputEl.value = 0;
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
    // get rid of trailing zeroes if present;
    if (inputValue >=0 && inputValue <= 999) {
        renderAdmissibleInput(inputValue);
    } else {
        renderInadmissibleInput(inputValue);
    }
}


function validateInput(input) {
    // input no more than 4 characters
    if (input.length > 4) {
        input[3] != "." ? inputEl.value = input.substring(0, 4) : inputEl.value = input.substring(0, 3);
    } 
    if (input.length === 2 && (input[0] === "0" && input[1] !== "0.")) {
        inputEl.value = "0";
    } else if (input[0] === "." || input[0] === ",") {
        inputEl.value = "0";
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
