

function roundTo(number, digits) {
    return number.toFixed(digits);
}


export function convert(quantity, conversionRate) {
    // if quantity * conversionRate equals 0, don't round 0 to 3 decimals after comma;
    return quantity * conversionRate === 0 ? 0 : roundTo(quantity * conversionRate, 3);
}


export const meterToFeet = 3.28084;
export const footToMeters = 0.3048;

export const literToGallons = 0.219969;
export const gallonToLiters = 4.54609; 

export const kiloToPounds = 2.204623;
export const poundToKilos = 0.453592;
