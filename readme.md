# Lilo-js

Compose lightweight and modular javascript components.

## Features

- write modules as simple object literals
- inherit from other modules (prototype pattern)
- include other modules (mixin pattern)
- fine-tune inheritance and inclusion with composition options ('omit', 'select', 'merge')
- expose utility functions used internally

**Coming Soon**
- loadable modules in AMD, CommonJs and Browser Globals
- conditionally load replacement for `$.extend`

## Writing Components

The **base** component MUST be in the prototype chain of ALL your custom components. It comes with two useful methods to create inheriting objects:
- `include` to add own properties from another object
- `extend` to create an inheriting object, and optionally mixin own properties from other objects.

## API

### Define and register component with Lilo

```js
var Lilo = require('lilo-js');
var Base = require('lilo-js/base');
var Collapse = require('mixins/collapse');
var Panel = require('mixins/panel');

// register and expose component
var CollapsePanel = Base.extend([Collapse, Panel], {
  merge: [/* merged props */],
  omit: [/* omitted props */],
  select: [/* selected props */]
}, {
  /* props */
});

// register component
module.exports = Lilo('collapsepanel', CollapsePanel);
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

