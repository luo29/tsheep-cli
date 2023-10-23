'use strict';

const custom = require('..');
const assert = require('assert').strict;

assert.strictEqual(custom(), 'Hello from custom');
console.info('custom tests passed');
