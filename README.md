# addScrollClass
Simple script to add specific classes while scrolling up or down

## How to use

```
import addScrollClass from '[path/to/addScrollClass.js]'

addScrollClass().init()
```
By default addScrollClass will use `.-scroll-down` and `.-scroll-up` you can change this by using an options object: 

```
const opts = {
	upClass: 'custom-class-up',
	downClass: 'custom-class-down',
}

addScrollClass(opts).init()
```
