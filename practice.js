// pattern to match numbers
pattern = /\d+/g;
console.log("abc123abc456".match(pattern));


// finding username  and hashtag with regex pattern 
let post = "Hey @MozzyPants, did you see the new #JavaScript tutorial? #coiding";

// finding username with regex pattern 
let mention = post.match(/@[a-zA-Z0-9]+/g);
console.log("Mentions: ", mention);

// finding hashtags
let hashtags = post.match(/#[a-zA-Z0-9]+/g);
console.log("Hashtags: ", hashtags);

// letting hero list  = heroes
let heroes = ['hulk','iron man','black widow']
console.log(heroes);

// appending  items to end of array 
heroes.push('spider man', 'captain america'); // [ 'hulk', 'iron man', 'black widow', 'spider man', 'captain america' ]
console.log(heroes);

// popping the last item from array
console.log(heroes.pop()); // 'captain america'
console.log(heroes); // [ 'hulk', 'iron man', 'black widow', 'spider man' ]

// Getting the last item from array
console.log(heroes[heroes.length - 1]); // 'spider man'


// removing the first item from array
console.log(heroes.shift()); // 'hulk'
console.log(heroes); // [ 'iron man', 'black widow', 'spider man' ]

// length of array 
console.log(heroes.length); // length 3

// Returning each hero in the array with for...of loop
heroes.forEach(hero => {
    console.log("Hero: ",hero);
})

// Another EXAMPLE to loop through array using for...of loop
let codingLanguages = ['JavaScript', 'Python', 'Java', 'C++'];

codingLanguages.forEach(language => {
    console.log("coding language: ", language);
})

// Map function saving values to console
let amazingHeros = heroes.map(hero => "The Amazing " + hero);
console.log(amazingHeros); // [ 'The Amazing hulk', 'The Amazing iron man', 'The Amazing black widow', 'The Amazing spider man' ]

// Map function to add 'is super dope!' to each language
let dopeLanguage = codingLanguages.map(language => language + " is super dope!");
console.log(dopeLanguage); // [ 'JavaScript is super dope!', 'Python is super dope!', 'Java is super dope!', 'C++ is super dope!' ]

// filter function to get languages that start with 'J'
let filteredLanguages = codingLanguages.filter(language => language.startsWith('J'));
console.log(filteredLanguages); // [ 'JavaScript', 'Java' ]

// Another Example of filter function 
// everything that is true gets put into the function's return value
let scores = [75, 85, 90, 60, 70];
let corAbove = scores.filter(score => score > 70);
console.log(corAbove); // [ 75, 85, 90 ]

//reduce function 
let expenses = [100,50,200,150];

// accumulator is the parameter that holds the returned compounding value 
let total = expenses.reduce((accumulator, expense) => accumulator + expense, 0);
console.log(total); // 500

// sort function to sort the array in alphabetical order
let sortedHeroes = heroes.sort();
console.log(sortedHeroes); // [ 'black widow', 'hulk', 'iron man','spider man' ]

// sorting numbers 
let numbers = [33, 3, 1, 609354, 5, 2, 4, 42, 57, 5756];
console.log(numbers.sort()); // [1, 2, 3, 33, 4, 42, 5, 57, 5756, 609354]
// always need to provide a custom compare function when sorting arrays of numbers
numbers.sort(
    function(a,b){
        return a - b; 
    }
)
console.log(numbers);
