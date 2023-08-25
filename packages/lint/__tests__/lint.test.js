'use strict';

const lint = require('..');
const assert = require('assert').strict;

assert.strictEqual(lint(), 'Hello from lint');
console.info('lint tests passed');
