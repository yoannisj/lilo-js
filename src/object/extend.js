'use-strict';

var composeDefaults = {
  merge: [ 'defaults' ]
};

module.exports = function(mixins, options, props) {

  // allow omitting 'mixins' and 'options'
  switch (arguments.length) {
  case 2:
    // omitted 'mixins' argument
    if (!Array.isArray(mixins)) {
      props = options;
      options = mixins;
      mixins = [];
    }
    // omitted 'options' argument
    else {
      options = {};
    }
  case 1:
    // omitted both 'mixins' and 'options'
    props = mixins;
    options = {};
    mixins = [];
  }

  // inject default options
  if (this.__composeOptions__) {
    // use parent class's options as defaults
    options = merge({}, this.__composeOptions__, options);
  } else {
    // use general default options
    options = merge({}, composeDefaults, options);
  }

  // create inheriting object
  var child = Object.create(this);

  // include own properties using composing options
  if (props) compose(child, props, options);

  // include mixins using composing options
  this.include(mixins, options);

  // attach default composition options so they can be
  // re-used as defaults in inheriting objects
  child.__composeOptions__ = options;

  // return inheriting object
  return child;
};
