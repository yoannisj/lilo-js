# Seize-js

Write lightweight and modular javascript UI components.

## Features

write modules as simple object literals
- inherit from other modules (prototype pattern)
- include other modules (mixin pattern)
- fine-tune inheritance and inclusion with composition options ('omit', 'select', 'merge')
- attach modules to DOM elements and auto-init with options
- expose utility functions used internally
- loadable modules in AMD, CommonJs and Browser Globals

## API

### Define and register component with Seize

```js
var Seize = require('seize');
var Base = require('seize/components/base');
var Collapse = require('seize/mixins/collapse');
var Panel = require('seize/mixins/panel');

// register and expose component
var CollapsePanel = Base.extend([Collapse, Panel], {
  merge: [/* merged props */],
  omit: [/* omit props */],
  select: [/* select props */]
}, {
  /* props */
});

// register component
module.exports = seize('collapsepanel', CollapsePanel);
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