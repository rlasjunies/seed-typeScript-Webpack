// from: https://www.metachris.com/2017/01/custom-errors-in-typescript-2.1/
// https://www.bennadel.com/blog/2828-creating-custom-error-objects-in-node-js-with-error-capturestacktrace.htm
// this should work in Nodejs
// not tested
// require node-util to polyfill this package in browsers
import * as util from "util";

// Custom Error 1
// const CustomError1 = function(message) {
//     Error.captureStackTrace(this, this.constructor);
//     this.name = this.constructor.name;
//     this.message = message;
// };
// util.inherits(CustomError1, Error);

// Custom Error 2
// const CustomError2 = function(message) {
//     Error.captureStackTrace(this, this.constructor);
//     this.name = this.constructor.name;
//     this.message = message;
// };
// util.inherits(CustomError2, Error);

// Tests
// let e = new CustomError1("Foo");
// console.log("instanceof error: ", e instanceof Error);  // true
// console.log("instanceof own class: ", e instanceof CustomError1);  // true
// console.log("instanceof other error class: ", e instanceof CustomError2);  // false