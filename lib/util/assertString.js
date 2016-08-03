'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;
function assertString(input) {
  if (typeof input !== 'string' && input) {
    throw new TypeError('This library (validator.js) validates strings only');
  }
  return (input || '')
}
module.exports = exports['default'];