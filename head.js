const assertEqual = function(actual, expected) {
    if (actual !== expected) {
      console.log(`❌ Assertion Failed: ${actual} and ${expected} are NOT equal.`);
      return;
    }
    //Happy Path
    console.log(`✅ Assertion Passed: ${actual} and ${expected} are equal.`);
  };

  const head = function(array) {
    return array[0];
  };

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");