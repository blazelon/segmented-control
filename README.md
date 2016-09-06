# iOS Style Segmented Controls
No jQuery, no SASS or Less.
Pure Javascript.

Transforms `radio` and `checkbox` inputs to iOS style segmented controls. Take a look at 
[Apple's documentation](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/UIKitUICatalog/UISegmentedControl.html).

Simple markup, no complex classes. Keeps your markup lean and clean. Just add the class `control-segmented` to a parent `div` and add the following markup.
```html
<div class="control-segmented">
  <label>
    <input type="radio" name="fruits" value="bananas" tabindex="1" checked>Bananas
  </label>
  <label>
    <input type="radio" name="fruits" value="mangoes" tabindex="1">Mangoes
  </label>
  <label>
    <input type="radio" name="fruits" value="apples" tabindex="1">Apples
  </label>
</div>
```

Wire up the `css` and `js` and you are done. The `css` is generated using [Myth](http://www.myth.io/). 
So if you have added Myth to your project then you just need to modify the variable `--ctrl-seg-active-bg` according to your project's needs.
Or you may just use the `css` from the `dist` folder.
 
By default there's a border running all around the exterior. If you need borders in between each control, then simply add the class `bordered` to `control-segmented` like this
```html
<div class="control-segmented bordered">
  ...
</div>
```

All controls are inline, however in case of checkboxes the controls might need to be stacked one above the other. In that case use
```html
<div class="control-segmented block">
  ...
</div>
```

Usually in case of checkboxes, when a checkbox is selected a tick mark might be displayed along with the control. If you need checkmarks/ticks to go along with it, then add
```html
<div class="control-segmented block with-ticks">
  ...
</div>
```

This plugin merely provides the basic building blocks. All inputs are retained within the markup. They are not being replaced, but merely hidden. Modify `segmented-control.css` to your heart's desire to bring about the perfect look.

