# Seize-js

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

## Writing Components

The **base** component MUST be in the prototype chain of ALL your custom components. It comes with two useful methods to create inheriting objects:
- `include` to add own properties from another object
- `chain` to create an inheriting object, and optionally mixin own properties from other objects.

It also implements the very minimal interface that is expected by Seize's jquery bridge, used to attach/handle your components' instances on DOM elements:
- the `init` method used to initialize the instance's behaviour
- the `destroy` method used to delete the component's instance and make it available to the Garbage collector.

## API

### Define and register component with Seize

```js
var Seize = require('seize-js');
var Base = require('seize-js/components/base');
var Collapse = require('seize-js/mixins/collapse');
var Panel = require('seize-js/mixins/panel');

// register and expose component
var CollapsePanel = Base.chain([Collapse, Panel], {
  merge: [/* merged props */],
  omit: [/* omitted props */],
  select: [/* selected props */]
}, {
  /* props */
});

// register component
module.exports = Seize('collapsepanel', CollapsePanel);
```

### Use your component in jQuery

```js
var $el = $('.selector');

// set custom default options for component
seize.defaults.collapsepanel = {/* custom defaults */};

// instantiate component on DOM element
collapsepanel = $el.seize('collapsepanel', {/* options */});

// run methods
collapsepanel.open();
collapsepanel.destroy();

// access component instance on element
var collapsepanel = $el.seize('collapsepanel');

// access element on component instance
var $el = collapsepanel.$el;
var el = collapsepanel.el;

// means this useless code works
$el = $el.seize('collapsepanel').$el;
el = el.seize('collapsepanel').el;
collapsepanel = collapsepanel.el.seize('collapsepanel');
```

### Baked in utility functions

```js
var Seize = require('seize-js');
Seize.util = require('seize-js/util');

Seize.util.equals(valA, valB);
Seize.util.compare(valA, valB);
Seize.util.arrayHas(array, value);
Seize.util.pushUnique(array, value);
Seize.util.arrayMerge(target, source, ...);
Seize.util.merge(target, source, ...);
Seize.util.compose(object, properties, options);
```
