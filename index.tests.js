import * as assert from 'assert';
import {capitalize, hash} from 'string-transform';

const runTests = () => {
  testCapitalize();
  testHashString();
};

const testCapitalize = () => {
  assert.strictEqual('Test', capitalize('test'));
  assert.strictEqual('Test String', capitalize('test string'));
};

const testHashString = () => {
  assert.strictEqual('4Q69R', hash('https://glize.js.org/'));
};

runTests();
