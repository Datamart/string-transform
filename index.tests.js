import * as assert from 'assert';
import {capitalize, hash, toCamelCase, toPascalCase} from 'string-transform';

const runTests = () => {
  testCapitalize();
  testHashString();
  testToCamelCase();
  testToPascalCase();
};

const testCapitalize = () => {
  assert.strictEqual('Test', capitalize('test'));
  assert.strictEqual('Test String', capitalize('test string'));
};

const testHashString = () => {
  assert.strictEqual('4Q69R', hash('https://glize.js.org/'));
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
