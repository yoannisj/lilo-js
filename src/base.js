'use-strict';

var $ = require('jquery');
var extend = require('src/object/extend');
var include = require('src/object/include');

var Base = module.exports = {

  // container prop to track composition options along the prototype chain
  __composeOptions__: {},

  // method to create inhering object
  extend: extend,

  // method to include mixins
  include: include

};