let coinFlip;

do {
    coinFlip = Math.round(Math.random()); 
    if (coinFlip === 1) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
} while (coinFlip !== 0);