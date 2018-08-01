// start with strings, numbers and booleans

let age = 100;
let age2 = age;

console.log(age, age2);
age = 200;
console.log(age, age2);


let name = 'Kay';
let name2 = name;
console.log(name, name2);
name = 'Kizito';
console.log(name, name2);

console.clear();

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

console.log(players, team);

// You might think we can just do something like this:
team[3] = 'Lux';

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way

const team2 = players.slice();

// or create a new array and concat the old one in

const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'Sucrose';
console.log(team4);


const team5 = Array.from(players);
team5[2] = 'Salam';
console.log(team5);

console.clear();

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:

// how do we take a copy instead?

const cap2 = Object.assign({}, person,{number: 99, age: 12});
console.log(cap2);

// We will hopefully soon see the object ...spread

const cap3 = {...person};
console.log(cap3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const kay = {
  name: 'Kay',
  age: 85,
  social: {
    twitter: '@kizitoakhilome',
    facebook: 'kizitoakhilome'
  }
}

console.log(kay);
console.clear();

// const dev = Object.assign({}, kay);
const dev = {...kay};
console.log(dev);