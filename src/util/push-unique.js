'use-strict';

var arrayHas = require('src/utils/array-has');

module.exports = function(arr) {

  var values = [].slice.call(arguments, 1);

  for (var i = 0, ln = values.length; i < ln; i++) {
    var val = values[i];
    if (!arrayHas(arr, val, true)) arr.push(val);
  }
};