// ============================================================================
// =Lilo Main
// ============================================================================

'use-strict';

var Util = require('./util');
var Base = require('./base');

// private container for registered components
var _components = {};

// main function, used to register a new component
var Lilo = module.exports = function(name, Component) {

  if (Lilo.exists(name)) {
    throw new Error('Lilo(): Component with name ' + name + ' already exists.');
    // throw error: Component with name {name} already exists
    return;
  }

  // register component under given name
  _components[name] = Component;

  // name property should correspond to name in register
  Component.name = name;

  // return completed component definition
  return Component;

};

// Introspection Helpers
Lilo.get = function(name) {
  // return previously registered component
  // - will return 'undefined' if component has not been registered yet
  return _components[name];
};

Lilo.exists = function(name) {
  return !!(this.get(name));
};

// Expose utilities and base
Lilo.Base = Base;
Lilo.util = Util;