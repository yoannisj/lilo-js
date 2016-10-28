'use-strict';

var $ = require('jquery');
var chain = require('src/object/chain');
var include = require('src/object/include');

var Base = module.exports = {

  // method to create inhering object
  chain: chain,

  // method to include mixins
  include: include,

  // container property for Component defaults
  defaults: {},

  // method for initializing Component instance
  init: function() {
    this.$el.addClass('has-' + this.name);
  },

  // method for removing Component instance
  destroy: function() {
    this.$el.removeClass('has-' + this.name);
    this.$el.removeData('seize_' + this.name);
    delete this.$el;
    delete this.el;
  }

};