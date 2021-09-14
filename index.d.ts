// typescript 

/**
 * Transforms the first character of each word to uppercase; other
 * characters are unaffected.
 * @param {string} str The string to be transformed.
 * @return {string} Returns transformed string.
 * @see http://www.w3.org/wiki/CSS/Properties/text-transform
 */
export declare function capitalize(str: string): string;

/**
 * Converts the passed string to a hashed string.
 * @param {string} str The input string.
 * @return {string} Returns hashed string.
 */
export declare function hash(str: string): string;

/**
 * Converts the passed string into a string of capitalized words without 
 * separators (aka upper camel case).
 * @param {string} str The input string.
 * @return {string} A string convered into a string of capitalized words 
 * without separators.
 * @see https://en.wikipedia.org/wiki/PascalCase
 */
export declare function toPascalCase(str: string): string;

/**
 * Converts the passed string into a string with the separator denoted by the 
 * next word capitalized (aka lower camel case).
 * @param {string} str The input string.
 * @return {string} A string convered into a string with the separator 
 * denoted by the next word capitalized.
 * @see https://en.wikipedia.org/wiki/Camel_case
 */
export declare function toCamelCase(str: string): string;

/**
* Converts the given string into a string with a single underscore as a separator.
* @param {string} str The input string.
* @return {string} A convered string.
* @see https://en.wikipedia.org/wiki/Snake_case
*/
export declare function toSnakeCase(str: string): string;

/**
 * Converts the given string into a string with a single dash as a separator.
 * @param {string} str The input string.
 * @return {string} A convered string.
 */
 export declare function toKebabCase(str: string): string;
 