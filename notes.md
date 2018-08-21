# Challenge Notes

Here, I'd be itemizing, in bullets, new concepts I come across as I traverse the course.

## Day 1

* `keydown` event
* HTML `data-*` Global Attribute
* `HTMLMediaElement.play()` method
* `HTMLMediaElement.currentTime` property. In fact, the `HTMLMediaElement` DOM interface
* `transitionend` DOM event

## Day 2

* CSS `transform-origin` property
* DOM `setInterval()` method

## Day 3

* CSS variables can be updated with javascript
* HTML `<input type="range">`
* CSS variables
* `.dataset` javascript property from set `data-*` in HTML
* DOM `document.documentElement`
* CSS `CSSStyleDeclaration.setProperty`

## Day 4

* `console.table` over `console.log` for Arrays and Objects
* Using `Array.prototype.reduce` to count instances of values (from an array) in an object

## Day 5

* Flexbox (take the flexbox.io tutorial)
* CSS `transform` property is awesome
* DOM `element.classList.toggle()`

## Day 6

* `fetch()` API
* Regex
* DOM `keyup` event
* DOM `change` event

## Day 7

* `Array.prototype.some()`
* `Array.prototype.every()`
* `Array.prototype.find()`
* `Array.prototype.findIndex()`
* `Array.prototype.splice()`

## Day 8

* HTML Canvas -- the entire thing is foreign
* DOM Canvas API
* `mousemove` event
* `mousedown` event
* `mouseup` event
* `mouseout` event
* HSL (mothereffinghsl)
* flag in javascript

## Day 9

* Add a breakpoint on attribute modification in dev tools to see which javascript functions are modifying an element
* `%s` ==> for string interpolation
* `%c` ==> for styling
* `console.warn()`
* `console.error()`
* `console.info()`
* `console.assert()`
* `console.clear()`
* `console.dir()`
* `console.group()` ... `console.groupEnd()`, or
* `console.groupCollasped()` ... `console.groupEnd()`
* `console.count()`
* `console.time()` ... `console.timeEnd()`
* `console.table()`

## Day 10

* DOM `KeyboardEvent.key` property

## Day 11

* HTML5 Video -- brush up on this.
* DOM `timeupdate` event 

## Day 12 

* Using negative values in the `Array.splice()` prototype.

## Day 13

* 'debounce' function calls for performance improvement. (There's also 'throttle', too).
* The `window` DOM object
* `HTMLElement.offsetTop` property
* `window.scroll*`
* `window.innerHeight`

## Day 14 

* For making a copy of arrays, not referencing, use any of:
  * `Array.from()`
  * `Array.slice()`
  * `[...array]` - spread.
  * `Array.concat()`

* For making a copy (shallow copy) of object, not referencing, use any of:
  * `Object.assign()`
  * `{...object}` - object spread (introduced ES2018)

* For making deep copy:
  * lodash's `_cloneDeep()`
  * "Poor man's deep clone" - JSON.parse(JSON.stringify(obj))

## Day 15

* `localStorage`
  * `localStorage.setItem()`
  * `localStorage.getItem()`

* `JSON.stringify()`
* `JSON.parse()`
* `HTMLFormElement.reset()`
* Event delegation -- Very responsible parents with very negligent children. :)
* DOM's `Element.matches()` method
* DOM's `Event.preventDefault()` method

## Day 16

* Object destructuring
* Quick tip:
  * `this` => the element that you listened on.
  * `event.target` => the element that the event got triggered on.
* DOM's `MouseEvent.offsetX`
* DOM's `MouseEvent.offsetY`

## Day 17

* `Array.sort`
* Regex, fucking learn Regex, Kay!

## Day 18

* `Array.map()` can be chained multiple times together. I.e. 

```js
array.map(someAwesomeFunction).map(anotherAwesomeFunction).map(theAwesomest);
```

## Day 19 

* Browsersync
* DOM's `Navigator` interface
* DOM's `MediaDevices` interface
* DOM's `URL` interface
* DOM's `createObjectURL()` method
* DOM's `Node.insertBefore()` method
* DOM's `Node.firstChild` property
* `canplay` event

## Day 20

* HTML's `contenteditable` attribute
* DOM's Web Speech API
* DOM's `SpeechRecognition` interface
* Web Speech API's `result` event 
* Web Speech API's `end` event

## Day 21

* DOM's Geolocation API
* DOM's `Geolocation.watchPosition()` method

## Day 22

* DOM's `ParentNode.append()` method
* DOM's `Element.getBoundingClientRect()` method
* `Window.scrollX`, `Window.scrollY` properties

## Day 23 

* DOM's `SpeechSynthesisUterance` interface
* DOM's `SpeechSynthesis` interface
* DOM's `SpeechSynthesisVoice` interface
* DOM's Web Speech API's `voiceschanged` event

## Day 24

* `HTMLElement.offsetHeight` property
* DOM's `scroll` event
* CSS transition can occur on `max-width` but not `width`
* Tip: Target a parent element and manipulate its children's styles based on the parent.

## Day 25

* Here's an idea of what happens when an event is fired in the browser:
  * the browser captures the event from the top of the "Tree" down to the element where the event was triggered on, then
  * the action attached to the fired event is triggered on every element from the element it was triggered on, to the top of the "Tree".
* Simply put, when an event is fired, two things happen => Event Capture, and Event Bubbling.
* The DOM's `Event.stopPropagation()` method can be used to stop further propagation of the action attached to the event in either the capture, or the bubbling phase.
* When listening for events on elements using the `Element.addEventListener()` method, options can be passed in to control event capturing and even something known as "Event Once" as thus:

```js
element.addEventListener('event', functionToRun, {
  capture: true,
  once: true
});
```
* Passing in `once` removes the event listener from the element in the `Element.removeEventListener()` fashion immediately the event is triggered once.

## Day 26

* DOM's `element.classList` methods (`add`, `remove`, `toggle`, etc) 
* Shortcircuiting with `&&` and `||` 

## Day 27

* `MouseEvent.pageX`
* `HTMLElement.offsetLeft`
* `element.scrollLeft`
