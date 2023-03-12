const assertEqual = function(actual, expected) {
    if (actual !== expected) {
      console.log(`❌ Assertion Failed: ${actual} and ${expected} are NOT equal.`);
      return;
    }
    //Happy Path
    console.log(`✅ Assertion Passed: ${actual} and ${expected} are equal.`);
  };

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

//tests
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
