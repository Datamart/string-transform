import * as assert from 'assert';
import {capitalize, hash, toKebabCase, toCamelCase, toPascalCase, toSnakeCase} from 'string-transform';

const runTests = () => {
  testCapitalize();
  testHashString();
  testToKebabCase();
  testToCamelCase();
  testToPascalCase();
  testToSnakeCase();
};

const testCapitalize = () => {
  assert.strictEqual('Test', capitalize('test'));
  assert.strictEqual('Test String', capitalize('test string'));
};

const testHashString = () => {
  assert.strictEqual('4Q69R', hash('https://glize.js.org/'));
};

const testToKebabCase = () => {
  assert.strictEqual('to-kebab-case', toKebabCase('toKebabCase'));
  assert.strictEqual('to-kebab-case', toKebabCase('to kebab case'));
  assert.strictEqual('to-kebab-case', toKebabCase('to_kebab_case'));
  assert.strictEqual('to-kebab-case', toKebabCase('to.kebab.case'));
  assert.strictEqual('to-kebab-case', toKebabCase('to - Kebab case...'));
};

const testToSnakeCase = () => {
  assert.strictEqual('to_snake_case', toSnakeCase('toSnakeCase'));
  assert.strictEqual('to_snake_case', toSnakeCase('to snake case'));
  assert.strictEqual('to_snake_case', toSnakeCase('to-snake-case'));
  assert.strictEqual('to_snake_case', toSnakeCase('to.snake.case'));
  assert.strictEqual('to_snake_case', toSnakeCase('to - Snake case...'));
};

const testToCamelCase = () => {
  assert.strictEqual('toCamelCase', toCamelCase('to-camel-case'));
  assert.strictEqual('toCamelCase', toCamelCase('to camel case'));
  assert.strictEqual('toCamelCase', toCamelCase('to_camel_case'));
  assert.strictEqual('toCamelCase', toCamelCase('to.camel.case'));
};

const testToPascalCase = () => {
  assert.strictEqual('ToPascalCase', toPascalCase('to-pascal-case'));
  assert.strictEqual('ToPascalCase', toPascalCase('to pascal case'));
  assert.strictEqual('ToPascalCase', toPascalCase('to_pascal_case'));
  assert.strictEqual('ToPascalCase', toPascalCase('to.pascal.case'));
};

runTests();
