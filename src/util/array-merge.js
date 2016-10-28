'use-strict';

var pushUnique = require('src/utils/push-unique');

module.exports = function(arr) {

  var res = arr.slice(),
    values = [].slice.call(arguments, 1);

  for (var i = 0, imax = values.length; i < imax; i++) {
    var val = values[i];

    // allow passing arrays or single values
    // - mimics `Array.prototype.concat` behaviour
    if (Array.isArray(val)) {
      // make a copy of val array so it is not altered by `pushUnique`
      var args = val.slice();
      args.unshift(res);
      pushUnique.apply(null, args);
    }

    else {
      // push value if it is not contained in array already
      pushUnique(res, val);
    }
  }

  return res;
};