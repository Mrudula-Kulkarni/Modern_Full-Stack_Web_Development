//STEP 1
function halfNumber(value) {
    let halfValue = value / 2;
    console.log(`Half of ${value} is ${halfValue}.`);
    return halfValue;
}

//STEP 2
function squareNumber(value) {
    let squaredValue = value * value;
    console.log(`The result of squaring the number ${value} is ${squaredValue}.`);
    return squaredValue;
}

//STEP 3
function percentOf(partValue, wholeValue) {
    let percentage = (partValue / wholeValue) * 100;
    console.log(`${partValue} is ${percentage}% of ${wholeValue}.`);
    return percentage;
}

//STEP 4
function findModulus(num1, num2) {
    let result = num2 % num1;
    console.log(`${result} is the modulus of ${num1} and ${num2}.`);
    return result;
}