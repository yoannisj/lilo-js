'use-strict';

// stric comparison
var is = function(a, b) { return a === b; }

// deeply strict comparison
var equals = require('equals');

module.exports = function(a, b, deep) {
  return deep ? equals(a, b) : is(a, b);
};