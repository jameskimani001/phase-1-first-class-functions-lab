// Function to return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// Example usage:
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 
// Output: ['Antonia', 'Nuru']

// Function to return the last two drivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// Example usage:
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 
// Output: ['Amari', 'Mo']

// Array containing the two driver selection functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function to create a fare multiplier
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

// Function to double the fare
const fareDoubler = createFareMultiplier(2);

// Example usage:
console.log(fareDoubler(10)); 
// Output: 20

// Function to triple the fare
const fareTripler = createFareMultiplier(3);

// Example usage:
console.log(fareTripler(10)); 
// Output: 30

// Function to select different drivers based on the provided function
const selectDifferentDrivers = function(drivers, selectingFunction) {
    return selectingFunction(drivers);
};

// Example usage:
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); 
// Output: ['Antonia', 'Nuru']

console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); 
// Output: ['Amari', 'Mo']

// Export the functions for testing
module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
};

