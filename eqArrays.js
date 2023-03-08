const assertEqual = function(actual, expected) {
    if (actual !== expected) {
      console.log(`❌ Assertion Failed: ${actual} and ${expected} are NOT equal.`);
      return;
    }
    //Happy Path
    console.log(`✅ Assertion Passed: ${actual} and ${expected} are equal.`);
  };


const eqArrays = function(arr1, arr2) {
    if (arr1.lenght !== arr2.lenght) {
        return false
    }

    for (let i = 0; i < arr1.lenght; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }  return true
}


  //tests
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS