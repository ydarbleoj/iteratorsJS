var Iterators = (function() {
      return {
    each: function (arr, action) {
      for(var i = 0; i < arr.length; i++) {
        action(arr[i]);
      }
      return arr;
    },
    map: function(arr, action) {
    var new_array = [];
    Iterators.each(arr, function(x){
      new_array.push(action(x));
    });
    return new_array;
  },
    reduce: function(arr, base, action) {
      Iterators.each(arr, function(x){
        base = action(base, x);
      });
      return base;
    }
  };
})();


var arr = [1,2,3];

// should output
// 1
// 2
// 3
console.log("results of applying Iterators.each to arr:");
Iterators.each(arr, function (number) {
  console.log(number);
});

// should output
// => [1,2,3]
console.log("applying Iterators.each to arr should return the array:");
Iterators.each(arr, function (number) {
});

// should output
// [2, 4, 6]
console.log("results of applying Iterators.map to arr:");
console.log(
  Iterators.map(arr, function (number) {
    return number * 2;
  })
);

// should output
// false to indicate that the array returned
// by map is a different object than the array
// that had been passed in
console.log("arr and the array returned by map are identical:");
console.log(
  arr === Iterators.map(arr, function (number) {
    return number * 2;
  })
);

// should output arr's contents to indicate that map did not 
// modify the original array's contents
console.log("arr's contents:");
console.log(arr);

// BONUS: should output the sum
console.log("result of applying Iterators.reduce to arr with a sum function:");
console.log(
  Iterators.reduce(arr, 0, function (a, b) {
    return a + b;
  })
);
