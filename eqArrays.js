const assertEqual = function(actual, expected) {
    if (actual !== expected) {
      console.log(`❌ Assertion Failed: ${actual} and ${expected} are NOT equal.`);
      return;
    }
    //Happy Path
    console.log(`✅ Assertion Passed: ${actual} and ${expected} are equal.`);
  };


  const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
    return true;
  };


  //tests
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS