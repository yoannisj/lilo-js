'use-strict';

var compose = require('src/util/compose');

module.exports = function(proto, props, options) {
  var res = Object.create(proto);
  // if own properties are passed, use composition to include them
  return (props ? compose(res, props, options) : res);
};