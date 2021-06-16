// HEY KIDDO

const age = 11;

const isAdult = function(age) {
    if(age >= 18) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isAdult(age));

const greeting = function() {        
    if(isAdult(age) == true) {
        return console.log("Hello there!");
    }
    else if(isAdult(age) == false) {
        return console.log("Hey kiddo!");
    }
}

greeting();
    

// VAT CALCULATIONS

// EXERCISE 1

//const vatHigh = 1.21; // VAT 21%
//const vatLow = 1.09; // VAT 9%
//const vatNone = 1.00; // VAT 0%
const productType = dutyFree;
//const productType = food;
//const productType = regular;
const basePrice = 10;


const typeVat = function(productType) {
    if (productType = dutyFree) {
        return 1.00;
    }
    else if (productType = food) {
        return 1.09;
    }
    else if (productType = regular) {
        return 1.21;
    }
};
typeVat(productType);

const calculatePrice = function(basePrice) {
    priceVAT = basePrice * typeVat(productType);
    return priceVAT;
}
console.log(calculatePrice());


// EXERCISE 2

const calculateVatAndPrice = function(priceWithVat, vatPercentage) {
    basePrice2 = priceWithVat - (priceWithVat/vatPercentage);
    vatPercentage = typeVat2(productType);
    return [basePrice2, vatAmount];
}

const typeVat2 = function(productType) {
    if (productType = dutyFree) {
        return 1.00;
    }
    else if (productType = food) {
        return 1.09;
    }
    else if (productType = regular) {
        return 1.21;
    }
};
typeVat2(productType);