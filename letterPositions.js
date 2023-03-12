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


const assertArraysEqual = function(arr1, arr2) {
    if (eqArrays(arr1, arr2) === true) {
      console.log(`✅ Assertion Passed: Arrays are equal.`);
  
    } else {
      console.log(`❌ Assertion Failed: Arrays are NOT equal.`);
    }
  };

  const letterPositions = function(string) {
    let result = {};

    for (const [index, letter] of string.split('').entries()) {
        if (result[letter]) {
            result[letter].push(index);
          } else {
            result[letter] = [index];
          }
      }
      return result;
  }

//tests
assertArraysEqual(letterPositions("hello").e, [1]);