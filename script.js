// console.log('connected')

const people = [
    'Bernhard, Sandra',
    'Bethea, Erin',
    'Becker, Carl',
    'Bentsen, Lloyd',
    'Beckett, Samuel',
    'Blake, William',
    'Berger, Ric',
    'Beddoes, Mick',
    'Beethoven, Ludwig',
    'Belloc, Hilaire',
    'Begin, Menachem',
    'Bellow, Saul',
    'Benchley, Robert',
    'Blair, Robert',
    'Benenson, Peter',
    'Benjamin, Walter',
    'Berlin, Irving',
    'Benn, Tony',
    'Benson, Leana',
    'Bent, Silas',
    'Berle, Milton',
    'Berry, Halle',
    'Biko, Steve',
    'Beck, Glenn',
    'Bergman, Ingmar',
    'Black, Elk',
    'Berio, Luciano',
    'Berne, Eric',
    'Berra, Yogi',
    'Berry, Wendell',
    'Bevan, Aneurin',
    'Ben-Gurion, David',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bennington, Chester',
    'Bierce, Ambrose',
    'Billings, Josh',
    'Birrell, Augustine',
    'Blair, Tony',
    'Beecher, Henry',
    'Biondo, Frank',
  ];
  
  const data = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck',
  ];
  
  const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
  ];

//   .Map,.filter,.reduce, some, forEach, for Loop, sort

// for Each method


inventors.forEach(function(identity){
  console.log(identity.passed);
});

//    .map method

const bornYear = inventors.map(function(born){
    return `${born.year}, ${born.first},${born.last}`
})

console.log(bornYear)

const livedYears = inventors.filter(function(lived){
  return (lived.year >= 1815 && lived.year < 1909)
  
});
console.log(livedYears)


const names = people.map(function(persons){
    return `${persons}`
})

console.log(names)

const passed = inventors.map(function(died){
    return `${died.passed}`
})

console.log(passed)



const firstName = inventors.filter(function(evenYears){
 return evenYears ;
})

console.log(firstName)


//    filter method

const peoples = [
{ name: 'Bernhard',
age: 30

},

{ name: 'Berlin',
age: 25,

},

{ name: 'Blake',
age: 15

}
];

const adults = peoples.filter(function(person){
    return person.age >= 18
})

console.log(adults)



const rootEl = document.querySelector('#root');

function createParagraph(inventor, color = 'pink') {
  const paragraph = document.createElement('p');
  // paragraph.style.background = color;
  // paragraph.style.padding = '20px';
  // paragraph.style.fontWeight = '600';
  paragraph.textContent = `${inventor.first} ${inventor.last} was born from ${inventor.year} and passed in ${inventor.passed}`;
  rootEl.appendChild(paragraph);
}

inventors.forEach(function(inventor) {
  return createParagraph(inventor);
});

const num = () =>{
  return Math.floor(math.random()*6) +1
}
// API https://jsonplaceholder.typicode.com/users

fetch('https://reqres.in/api/users')
  .then(res => res.json())
  .then(data => console.log(data))


   
    

