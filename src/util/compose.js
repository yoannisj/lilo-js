'use-strict';

var arrayMerge = require('src/utils/array-merge');
var merge = require('src/utils/merge');

module.exports = function(base, mixin, options) {

  // inject default options
  options = merge({
    select: [],
    omit: [],
    merge: []
  }, options || {});

  // loop over mixin properties
  for (var prop in mixin) {
    var mixinProp = mixin[prop],
      baseProp = base[prop],
      mixinPropType = typeof mixinProp,
      basePropType = typeof baseProp;

    // Do not include property in the following cases:
    if (
      // - property is not one of mixin's 'own' properties
      !mixin.hasOwnProperty(prop) ||
      // - 'select' option is used, and property is not listed
      (options.select.length && options.select.indexOf(prop) == -1) ||
      // - property is listed in 'omit' option
      options.omit.indexOf(prop) >= 0
    ) {
      // skip to next property
      continue;
    }

    // object and array properties can be merged
    else if (options.merge.indexOf(prop) >= 0 &&
      mixinPropType == 'object' &&
      basePropType != 'function'
    ) {
      // merge array properties
      if (Array.isArray(mixinProp)) {
        base[prop] = arrayMerge([], baseProp || [], mixinProp);
      }

      // merge object properties
      else if(basePropType == 'object') {
        base[prop] = merge({}, baseProp || {}, mixinProp);
      }
    }

    // override base property
    else {
      base[prop] == mixinProp;
    }

  }

  return base;
};