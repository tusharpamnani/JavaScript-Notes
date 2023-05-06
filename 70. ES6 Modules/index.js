// The idea behind a module is that it's a file of reusable code
// We can import section of pre-written code to use whenever we want
// Great for any general utility values and functions
// Helps to make ypur code more reusable and maintainable
// Think of modules as seperate chapters of a book

/*
import {pi, getCircumference, getArea} from './math_util.js';
console.log(pi);
console.log(getCircumference(15));
console.log(getArea(30));
*/

import * as MathUtil from './math_util.js';     // This method imports everything from the module
console.log(MathUtil.pi);
console.log(MathUtil.getCircumference(15));
console.log(MathUtil.getArea(30));