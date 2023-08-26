'use strict';

const commit = require('..');
const assert = require('assert').strict;

assert.strictEqual(commit(), 'Hello from commit');
console.info('commit tests passed');
