// # .filter()
//     Returns: A new array with only the filtered out items from the original array
//     Purpose: Reducing a data set into a sub-data set.
//         Ex: Initial array has all movies ( action, fantasy, horror )
//             You could use filter to return an array with only the action movies.

// .filter()

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = arr.filter(function (num) {
  if (num % 2 === 0) {
    return true;
  }
});
console.log(result);
// this is the same operation using es6
// const result = arr.filter(num => num % 2 === 0 )

// console.log(result)
// this is an else if statement es6 ? mark stands for if : stands for else
// ? true : false

const movies = [
  { name: "movie1", genre: "horror" },
  { name: "movie2", genre: "action" },
  { name: "movie3", genre: "action" },
  { name: "movie4", genre: "fantasy" },
];
const act = movies.filter(function (mov) {
  if (mov.genre === "horror") {
    return true;
  }
});

console.log(act);

// this does the same thing as my code above with es6 shortenign it
// const actionMovies = movies.filter(movie => movie.genre === "horror")

const num = [1, 3, 6, 10, 25, 0];

const fiveOrGreater = num.filter(function (number) {
  if (number > 5) {
    return true;
  }
});
console.log(fiveOrGreater);

const evenNum = [2, 4, 5, 6, 8, 9, 20, 10, 36];

const evenNumbers = evenNum.filter(function (even) {
  if (even % 2 === 0) {
    return true;
  }
});
console.log(evenNumbers);

const animals = ["dog", "wolf", "by", "family", "eaten", "camping"];

const lessThanFive = animals.filter(function (ani) {
  if (ani.length <= 5) {
    return true;
  }
});
console.log(lessThanFive);

const celberties = [
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true },
];

const members = celberties.filter(function(mem){
    if (mem.member === false){
        return true
    }
})
console.log(members)

const ofAge = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
];

const oldEnough = ofAge.filter(function(older){
    if (older.age >= 18){
        return true
    }
})
console.log(oldEnough)