'use-strict';

// deeply strict comparison
var equals = require('equals');

// stric comparison
var is = function(a, b) { return a === b; }

module.exports = function(a, b, deep) {
  return deep ? equals(a, b) : is(a, b);
};