/**
 * @fileoverview String transform module from Glize library.
 *
 * @see https://google.github.io/styleguide/javascriptguide.xml
 * @see https://developers.google.com/closure/compiler/docs/js-for-compiler
 * @see https://github.com/Datamart/Glize
 * @module string-transform
 */

import { uint32 } from 'uint';

/**
 * Transforms the first character of each word to uppercase; other
 * characters are unaffected.
 * @param {string} str The string to be transformed.
 * @return {string} Returns transformed string.
 * @see http://www.w3.org/wiki/CSS/Properties/text-transform
 * @method
 */
export const capitalize = (str) => {
  const words = str.split(/\s+/);
  const length = uint32(words.length);

  for (let i = 0; i < length; ++i) {
    const word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join(" ");
};

/**
 * Converts the passed string to a hashed string.
 * @param {string} str The input string.
 * @return {string} Returns a hashed string.
 * @method
 */
export const hash =(str) => {
  const length = uint32(str.length);
  let result = 0;
  let j = 0;

  for (let i = 0; i < length;) {
    result ^= str.charCodeAt(i++) << j;
    j += 8;
    j %= 24;
  }

  return result.toString(36).toUpperCase();
};

/**
 * Converts the passed string into a string of capitalized words without 
 * separators (aka upper camel case).
 * @param {string} str The input string.
 * @return {string} A string convered into a string of capitalized words 
 * without separators.
 * @see https://en.wikipedia.org/wiki/PascalCase
 * @method
 */
export const toPascalCase = (str) => {
  str = toCamelCase_(str);
  return str.substr(0, 1).toUpperCase() + str.substr(1);
};

/**
 * Converts the passed string into a string with the separator denoted by the 
 * next word capitalized (aka lower camel case).
 * @param {string} str The input string.
 * @return {string} A string convered into a string with the separator 
 * denoted by the next word capitalized.
 * @see https://en.wikipedia.org/wiki/Camel_case
 * @method
 */
export const toCamelCase = (str) => {
  str = toCamelCase_(str);
  return str.substr(0, 1).toLowerCase() + str.substr(1);
};

/**
 * Converts the passed string into a string with the separator denoted by the 
 * next word capitalized. The case of the first letter will remain unchanged.
 * @param {string} str The input string.
 * @return {string} A string convered into a string with the separator 
 * denoted by the next word capitalized.
 * @see https://en.wikipedia.org/wiki/Camel_case
 * @private
 */
const toCamelCase_ = (str) => {
  return str.replace(/[-_\s.]+(.)?/g, (...args) =>
    args[1] ? args[1].toUpperCase() : ''
  );
};
