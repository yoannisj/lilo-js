# Lilo-js

Write lightweight and modular javascript UI components.

## Features

write modules as simple object literals
- inherit from other modules (prototype pattern)
- include other modules (mixin pattern)
- fine-tune inheritance and inclusion with composition options ('omit', 'select', 'merge')
- attach modules to DOM elements and auto-init with options
- expose utility functions used internally

**Coming Soon**
- loadable modules in AMD, CommonJs and Browser Globals
- conditionally load replacement for `$.extend`

## Writing Components

The **base** component MUST be in the prototype chain of ALL your custom components. It comes with two useful methods to create inheriting objects:
- `include` to add own properties from another object
- `extend` to create an inheriting object, and optionally mixin own properties from other objects.

It also implements the very minimal interface that is expected by Lilo's jquery bridge, used to attach/handle your components' instances on DOM elements:
- the `init` method used to initialize the instance's behaviour
- the `destroy` method used to delete the component's instance and make it available to the Garbage collector.

## API

### Define and register component with Lilo

```js
var Lilo = require('lilo-js');
var Base = require('lilo-js/components/base');
var Collapse = require('lilo-js/mixins/collapse');
var Panel = require('lilo-js/mixins/panel');

// register and expose component
var CollapsePanel = Base.chain([Collapse, Panel], {
  merge: [/* merged props */],
  omit: [/* omitted props */],
  select: [/* selected props */]
}, {
  /* props */
});

// register component
module.exports = Lilo('collapsepanel', CollapsePanel);
```

### Use your component in jQuery

```js
var $el = $('.selector');

// set custom default options for component
lilo.defaults.collapsepanel = {/* custom defaults */};

// instantiate component on DOM element
collapsepanel = $el.lilo('collapsepanel', {/* options */});

// run methods
collapsepanel.open();
collapsepanel.destroy();

// access component instance on element
var collapsepanel = $el.lilo('collapsepanel');

// access element on component instance
var $el = collapsepanel.$el;
var el = collapsepanel.el;

// means this useless code works
$el = $el.lilo('collapsepanel').$el;
el = el.lilo('collapsepanel').el;
collapsepanel = collapsepanel.el.lilo('collapsepanel');
```

### Baked in utility functions

```js
var Lilo = require('lilo-js');
Lilo.util = require('lilo-js/util');

Lilo.util.equals(valA, valB);
Lilo.util.compare(valA, valB);
Lilo.util.arrayHas(array, value);
Lilo.util.pushUnique(array, value);
Lilo.util.arrayMerge(target, source, ...);
Lilo.util.merge(target, source, ...);
Lilo.util.compose(object, properties, options);
```

