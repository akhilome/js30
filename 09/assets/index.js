const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello my name is %s. I\'m cool AF', 'Kizito');

// Styled
console.log('%c Style me!', 'font-size: 2em; background: purple;');

// warning!
console.warn('Warn yourself!');

// Error :|
console.error('Fuck!');

// Info
console.info('%s loves Andela', 'Kizito');

// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('blam'), 'Doesn\'t exist!');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p); // normal way
console.dir(p) // awesome way

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} do years`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Kay');
console.count('Wes');
console.count('Kay');
console.count('Wes');
console.count('Kay');
console.count('Kay');
console.count('Wes');
console.count('Kay');
console.count('Wes');
console.count('Kay');

// timing
console.time('fetching');
fetch('https://api.github.com/users/akhilome')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching');
    console.log(data.bio);
  });