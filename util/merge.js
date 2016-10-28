'use-strict';

var extend = (typeof window === 'object' ? require('jquery').extend : require('extend'));

module.exports = function() {
  // collect all arguments in an array in ordet to pass them to `extend`
  var args = Array.prototype.slice.call(arguments);
  // and 'true' as first one for deep assignment
  args.unshift(true);

  return extend.apply(this, args);
};