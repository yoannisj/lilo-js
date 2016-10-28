'use-strict';

var extend = (typeof window === 'object' ? require('jquery').extend : require('extend'));

module.exports = function() {
  // pass all arguments to `extend`
  return extend.apply(null,
    // and 'true' as first one for deep assignment
    Array.prototype.slice.call(arguments).unshift(true)
  );
};