const fromDollarToYen = function(valueInDollar) {
    // Primero, pasamos de USD a EUR
    let valueInEuro = valueInDollar / 1.07;
    // Luego de EUR a JPY
    let valueInYen = valueInEuro * 156.5;
    return valueInYen;
};


// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromYenToPound = function(valueInYen) {
    // Primero, pasamos de JPY a EUR
    let valueInEuro = valueInYen / 156.5;
    // Luego de EUR a GBP
    let valueInPound = valueInEuro * 0.87;
    return valueInPound;
};


// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound }