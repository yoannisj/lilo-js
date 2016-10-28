'use-strict';

var merge = require('../util/merge');
var compose = require('../util/compose');

module.exports = function(mixins, options)
{
  // inject default composition options
  options = merge({},
    this.__composeOptions__ || {},
    options || {}
  );

  // allow passing a single mixin
  if (!Array.isArray(mixins)) mixins = [ mixins ];

  // mutate Base class with mixin properties
  for (var i = 0, ln = mixins.length; i < ln; i++) {
    var Mixin = mixins[i];

    // assign own properties
    compose(this, Mixin, options);
  }

  // method chaining
  return this;
};