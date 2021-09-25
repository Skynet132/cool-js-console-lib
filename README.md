# cool-js-console-lib

# `-` **How to use:** `-`

`$` simply copy/paste the lib.js file's code into your js file and you are done!

`$` To use this, do this in your main file or the file you want to use these functions in:

```js
const alertSys = require("./lib.js");

let test = "Hello";

if (test !== "Hello") {
   alertSys.error("invalid string!");
   altertSys.warn("invalid string!");
   alertSys.alert("invalid string!");
}

