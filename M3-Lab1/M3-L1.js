//step1
let favMovies = ["Sultan", "Dangal", "Lagaan", "Swades", "Barfi"];
console.log(favMovies[1]);

//step2
let movies = new Array(5);
movies[0] = "Sultan";
movies[1] = "Dangal";
movies[2] = "Lagaan";
movies[3] = "Swades";
movies[4] = "Barfi";

console.log(movies[0]);


//step3
movies.splice(2, 0, "Raazi");
console.log(movies.length);

//step4
movies = ["Sultan", "Dangal", "Lagaan", "Swades", "Barfi"];
delete movies[0];
console.log(movies); 

//step5
movies = ["Sultan", "Dangal", "Lagaan", "Swades", "Barfi", "War", "Raazi"];

for (let index in movies) {
  console.log(movies[index]);
}

//step6
for (let movie of movies) {
  console.log(movie);
}


//step7
for (let movie of [...movies].sort()) {
  console.log(movie);
}


//step8
let leastFavMovies = ["Radhe", "Race 3", "Zero"];

console.log("Movies I like:\n");
for (let movie of movies) {
  console.log(movie);
}

console.log("\nMovies I regret watching:\n");
for (let movie of leastFavMovies) {
  console.log(movie);
}

//step9
movies = movies.concat(leastFavMovies).sort().reverse();
console.log(movies);


//step10
console.log(movies.at(-1));


//step11
console.log(movies.shift());


//step12
let indices = leastFavMovies.map(movie => movies.indexOf(movie));

console.log(indices);

let newFavMovies = ["Don", "Krrish", "Baazigar"];

indices.forEach((index, i) => {
    if (index !== -1) {
        movies[index] = newFavMovies[i];
    }
});

console.log(movies);


//step13
let movies = [
  ["Sultan", 1],
  ["Dangal", 2],
  ["Lagaan", 3],
  ["Swades", 4],
  ["Barfi", 5]
];

let movieNames = movies
  .flat()
  .filter(item => typeof item === "string");

console.log(movieNames);


//step14
let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

let showEmployee = function (empArray) {
  console.log("Employees:\n");
  for (let emp of empArray) {
    console.log(emp);
  }
};

showEmployee(employees);


//step15
function filterValues(arr) {
    return arr.filter(value => value);
}

console.log(filterValues([58, '', 'abcd', true, null, false, 0]));


//step16
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(getRandomItem(numbers));



//step17
function getLargestNumber(arr) {
    return Math.max(...arr);
}

console.log(getLargestNumber([10, 20, 100, 5, 80]));