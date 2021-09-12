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
 * Converts <code>str</code> to hashed string.
 * @param {string} str The input string.
 * @return {string} Returns hashed string.
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
