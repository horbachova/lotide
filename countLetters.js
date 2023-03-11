const assertEqual = function(actual, expected) {
    if (actual !== expected) {
      console.log(`❌ Assertion Failed: ${actual} and ${expected} are NOT equal.`);
      return;
    }
    //Happy Path
    console.log(`✅ Assertion Passed: ${actual} and ${expected} are equal.`);
  };

  const countLetters = function(string) {
let count = {};
for (let letter of string) {

  if (letter === ' ') {
    continue;
  }

  if (count[letter]) {
    count[letter] += 1;
  } else {
    count[letter] = 1;
  }
  
} return count;
}

console.log(countLetters('lighthouse in the house'));