let number = parseInt(prompt("Enter a number"));

if (isNaN(number) || number < 0) {
    console.log("Not a valid number");
}

for (let i = number; i >= 0; i--) {
    console.log(i);
}