import data from "./rawBooks.json" assert { type: "json" };

// console.log(data[25]["# Pages"]);
//  QUESTION 1
let sum = BigInt(0);
for (var x = 0; x < data.length; x++) {
  sum = sum + BigInt(data[x]["# Pages"]);
}
sum = sum / BigInt(data.length);
console.log(sum + " <- This is the AVG # of Pages!");
//console.log(data[2]['# Pages']);

// for(var x = 0; x < data.length; x++){
//     sum = sum + (data[x]['# Pages'])
//     console.log(sum + " ");
// }

//QUESTION 2:

// go through the list and pick all the generes
// loop through list
// check if its a new genre
// if so, save it
// count the generes (add one to the count of the specific genre)
// see which one is most

let genreArray = new Array();
for (var x = 0; x < data.length; x++) {
  if (!genreArray.includes(data[x]["category"])) {
    genreArray.push(data[x]["category"]);
  }
}
// console.log(genreArray);

var biggestGenre = "null";
var numInGenre = 0;

for (var x = 0; x < genreArray.length; x++) {
  var currentGenre = genreArray[x];
  var numInCurrentGenre = 0;
  for (var y = 0; y < data.length; y++) {
    if (currentGenre == data[y]["category"]) {
      numInCurrentGenre += 1;
    }
  }
  if (numInCurrentGenre > numInGenre) {
    numInGenre = numInCurrentGenre;
    biggestGenre = currentGenre;
  }
}
console.log(biggestGenre + " is your favorite genre with " + numInGenre + " books read!");

//  QUESTION 3

var amtOfTBRBooks = 0;
var sumOfTBRTIME = 0;
var avg = 0;

for (var x = 0; x < data.length; x++) {
  // if(data[x]["Time on TBR (days)"] !== "N/A" && data[x]["Time on TBR (days)"] > 0){
  //don't include things that were never bought or read
  if (data[x]["Time on TBR (days)"] !== "N/A") {
    if (data[x]["Date Read"] !== "") {
      if (data[x]["Date Bought"] !== "") {
        // console.log(data[x]["Time on TBR (days)"]);
        amtOfTBRBooks += 1;
        sumOfTBRTIME = parseInt(sumOfTBRTIME) + data[x]["Time on TBR (days)"];
      }
    }
  }
}
console.log("amt " + amtOfTBRBooks + " time " + sumOfTBRTIME);
avg = sumOfTBRTIME / amtOfTBRBooks;
console.log(
  avg + " <- This is the average time spent on the TBR shelf (days)"
);

// QUESTION 4
let authorArray = new Array();
for (var x = 0; x < data.length; x++) {
  if (!authorArray.includes(data[x]["author"])) {
    authorArray.push(data[x]["author"]);
  }
}
// console.log(authorArray);

var biggestAuthor = "null";
var numInAuthor = 0;

for (var x = 0; x < authorArray.length; x++) {
  var currentAuthor = authorArray[x];
  var numInCurrentAuthor = 0;
  for (var y = 0; y < data.length; y++) {
    if (currentAuthor == data[y]["author"]) {
      numInCurrentAuthor += 1;
    }
  }
  if (numInCurrentAuthor > numInAuthor) {
    numInAuthor = numInCurrentAuthor;
    biggestAuthor = currentAuthor;
  }
}
console.log(biggestAuthor + " is your favorite author with " + numInAuthor + " books read by them!");

// QUESTION 5




//DATA IS THE JSON ARRAY

// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
