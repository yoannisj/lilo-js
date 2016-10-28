// ============================================================================
// =Lilo Base
// ============================================================================

'use-strict';

var extend = require('./object/extend');
var include = require('./object/include');

var Base = module.exports = {

  // container prop to track composition options along the prototype chain
  __composeOptions__: {},

  // method to create inhering object
  extend: extend,

  // method to include mixins
  include: include

};