const eqObjects = function(object1, object2) {

    if (typeof object1 !== 'object' || typeof object1 !== 'object'){
        return false;
    }
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false
    }

    for (const key in object1) {
        if (object1[key] !== object2[key]) {
            return false
        }
    }
   return true
};

const assertObjectsEqual = function(object1, object2) {
    const inspect = require('util').inspect; // <= add this line

    if (eqObjects(object1, object2) === true) {
        console.log(`✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  
    } else {
      console.log(`❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  };
}


  //tests
assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1});
