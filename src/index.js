'use-strict';

// ============================================================================
// =Core
// ============================================================================

var Base = require('component/base');

// private container for registered components
var _components = {};

// main function, used to register a new component
var Lilo = module.exports = function(name, Component) {

  if (this.exists(name)) {
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

// Base component
Lilo.Base = Base;

// ============================================================================
// =jQuery plugin
// ============================================================================

var $ = require('jquery');

// initialize variables
var $el, instance, Component;

$.fn.lilo = function(name, options, init) {
  // loop over elements
  for (var i = 0, ln = this.length; i < ln; i++)
  {
    // get element and maybe attached instance
    $el = this.eq(i);
    instance = $el.data('lilo_' + name);

    // if no instance was attached yet
    if (!instance) {
      // get component definition and create instance
      Component = Lilo.get(component);
      instance = Object.create(Component);

      // store reference to instance on DOM element
      $el.data('lilo_' + name, instance);

      // store reference to DOM element on instance
      instance.$el = $el;
      instance.el = $el[0];

      // inject component defaults, in developer defaults, in instance options
      instance.options = $.extend(true, {},
        Component.defaults || {},
        Lilo.defaults[name] || {},
        options || {}
      );

      // optionally initialize component
      if (typeof Component.init == 'function' &&
          (init || $el.attr('data-lilo-init').split(' ').indexOf(name))
      ) {
        Component.init();
      }
    }
  }

  // return instance of first DOM element
  // - so `$el.lilo('name')` can be used to get/attach component instance
  return this.first().data('lilo_' + name);

};