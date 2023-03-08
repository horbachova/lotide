const eqArrays = function(arr1, arr2) {
    if (arr1.length === arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
    } else {
      return false;
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


  const without = function(sourse, itemsToRemove) { 
    let newArr = [];

    for (const item of sourse) {
        if (!itemsToRemove.includes(item)) {
            newArr.push(item);
        }
    } return newArr;

  }

//making sure the original array was not altered by the without function
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//tests
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
