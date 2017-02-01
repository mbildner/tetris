;(function (global, document) {
  'use strict';
  if (global.module && global.module.exports) {
    global.module.exports = {
      flatten: flatten,
      randomFromArr: randomFromArr
    }
  } else {
    global.flatten = flatten;
    global.randomFromArr = randomFromArr;
  }


  function flatten (nestedArr) {
    return nestedArr.reduce(function (flatArr, arr) {
      return flatArr.concat(arr);
    });
  }

  function randomFromArr (arr) {
    var max = arr.length - 1;
    var randIndex = Math.round(Math.random() * max);
    return arr[randIndex];
  }
})(window || global);
