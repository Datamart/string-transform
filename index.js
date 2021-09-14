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
 * @return {string} Returns a transformed string.
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
 * Converts the given string into a string with a single dash as a separator.
 * @param {string} str The input string.
 * @return {string} Returns a transformed string.
 * @method
 */
export const toKebabCase = (str) => toSpecialCase_(str, '-');

/**
 * Converts the given string into a string with a single underscore as a separator.
 * @param {string} str The input string.
 * @return {string} Returns a transformed string.
 * @see https://en.wikipedia.org/wiki/Snake_case
 * @method
 */
export const toSnakeCase = (str) => toSpecialCase_(str, '_');

/**
 * Converts the given string into a string of capitalized words without 
 * separators (aka upper camel case).
 * @param {string} str The input string.
 * @return {string} A string transformed into a string of capitalized words 
 * without separators.
 * @see https://en.wikipedia.org/wiki/PascalCase
 * @method
 */
export const toPascalCase = (str) => toCamelCase_(str, true);

/**
 * Converts the given string into a string with the separator denoted by the 
 * next word capitalized (aka lower camel case).
 * @param {string} str The input string.
 * @return {string} A string transformed into a string with the separator 
 * denoted by the next word capitalized.
 * @see https://en.wikipedia.org/wiki/Camel_case
 * @method
 */
export const toCamelCase = (str) => toCamelCase_(str, false);

/**
 * Converts the given string into a string with the separator denoted by the 
 * next word capitalized.
 * @param {string} str The input string.
 * @param {boolean} isUpperCamelCase Specifies the type of transformation of
 * the first letter.
 * @return {string} A string convered into a string with the separator 
 * denoted by the next word capitalized.
 * @see https://en.wikipedia.org/wiki/Camel_case
 * @private
 */
const toCamelCase_ = (str, isUpperCamelCase) => {
  str = str.replace(/[-_\s.]+(.)?/g, (...args) =>
    args[1] ? args[1].toUpperCase() : ''
  );
  return (
    (isUpperCamelCase
      ? str.substr(0, 1).toUpperCase()
      : str.substr(0, 1).toLowerCase()) + str.substr(1)
  );
};

/**
 * Converts the given string into special case style.
 * @param {string} str The input string.
 * @param {string} separator The separator to apply.
 * @return {string} A string convered into special case style.
 * @see https://en.wikipedia.org/wiki/Letter_case#Special_case_styles
 * @private
 */
const toSpecialCase_ = (str, separator) => {
  return str
    .split('')
    .map((letter) => {
      if (/[-_\s.]/.test(letter)) {
        return separator;
      }

      if (letter.toUpperCase() === letter) {
        return separator + letter.toLowerCase();
      }

      return letter;
    })
    .join('')
    // Replacing multiple separators with the single separator.
    .replace(new RegExp(separator + '+', 'g'), separator)
    // Deleting the separator from the beginning of the string.
    .replace(new RegExp('^' + separator), '')
    // Deleting the separator at the end of the string.
    .replace(new RegExp(separator + '$'), '');
};
