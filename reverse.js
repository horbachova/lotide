const assertEqual = function(actual, expected) {
    if (actual !== expected) {
      console.log(`❌ Assertion Failed: ${actual} and ${expected} are NOT equal.`);
      return;
    }
    //Happy Path
    console.log(`✅ Assertion Passed: ${actual} and ${expected} are equal.`);
  };

const reverse = function(string) {
    return string.split('').reverse().join('');
}

//test
assertEqual(reverse("hello"), "hello");
assertEqual(reverse("fish"), "hsif");