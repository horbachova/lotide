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

  const middle = function(arr) {
    let result = [];
    let middleIndex = Math.floor(arr.length / 2);

    if (arr.length <= 2) {
        return [];
    }

    if (arr.length % 2 === 0){
       result.push(arr[middleIndex - 1], arr[middleIndex])
    } else {
    result.push(arr[middleIndex])
    }

    return result;

  }

//tests
assertArraysEqual(middle([1]), []); //For arrays with one or two elements, there is no middle. Return an empty array.
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); //For arrays with odd number of elements, an array containing a single middle element should be returned.
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
