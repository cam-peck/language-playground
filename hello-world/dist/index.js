'use strict';
const sales = 123456789;
const course = 'TypeScript';
const is_published = true;
let level;
const user = [1, 'Mosh'];
var Size;
(function (Size) {
  Size[Size.Small = 1] = 'Small';
  Size[Size.Medium = 2] = 'Medium';
  Size[Size.Large = 3] = 'Large';
})(Size || (Size = {}));

const mySize = Size.Medium;
console.log(mySize);
function calculateTax(income) {
  if (income < 50000) {
    return income * 1.2;
  }
  return 0;
}
function returnsNothing(income) {
  console.log('I return nothing!');
}
const employee = { id: 1, name: 'Cameron' };
// # sourceMappingURL=index.js.map
