
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


const assertArraysEqual = function(arr1, arr2) {
    if (eqArrays(arr1, arr2) === true) {
      console.log(`✅ Assertion Passed: Arrays are equal.`);
  
    } else {
      console.log(`❌ Assertion Failed: Arrays are NOT equal.`);
    }
  };