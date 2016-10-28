'use-strict';

var compare = require('src/utils/compare');

module.exports = function(arr, val, strictLiterals) {
  // return true as soon as the value has been found
  for (var i = 0, ln = arr.length; i < ln; i++) {
    if (compare(arr[i], val, strictLiterals)) return true;
  }

  return false;
};