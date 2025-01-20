# typeis-package

`typeis-package` is a handy npm package that returns the type of the variable passed to it. It's designed to handle most variable types, including custom ones. If nothing is passed, it will return `undefined`.

## Installation

You can install the package using npm:

\`\`\`bash
npm i typeis-package
\`\`\`

## Usage

Import `typeIs` from `typeis-package`, and you can use it to determine the type of most variables.

\`\`\`javascript
import typeIs from 'typeis-package';

const result = typeIs('Hello, World!'); // returns 'string'
\`\`\`

### Code

Here's the core code of the package:

\`\`\`javascript
const typeIs = (input) => {
  if (input === null) return "null";
  if (typeof input !== "object") {
    return typeof input;
  }
  let type = (input?.constructor?.name).toLowerCase();
  return type ?? new Error("unknownType");
};

export default typeIs;
\`\`\`

## Special Cases

### Custom Objects

If a custom object is passed, the type that will be returned is its name in lowercase.

### Promises

If a promise is abstracted under another name, the package may fail to identify it a promise and return it as the name of it's constructor.

### Typed Arrays

The code doesn't specifically handle typed arrays like `Int8Array`, `Uint8Array`, etc., so it will return their constructor names in lowercase.

### Global Object

The code will return "object" for the global object (e.g., `window` in browsers), which might be what you want, but it's worth being aware of.

## Examples

\`\`\`javascript
import typeIs from 'typeis-package';

console.log(typeIs(null)); // returns 'null'
console.log(typeIs(42)); // returns 'number'
console.log(typeIs(new Int8Array())); // returns 'int8array'
\`\`\`

## Conclusion

`typeis-package` is a versatile tool for identifying variable types in JavaScript. It's simple to use and covers a wide range of use cases. Be mindful of the special cases mentioned above to get the most out of this package.

Feel free to contribute, report issues, or suggest improvements on the [GitHub repository](#).
