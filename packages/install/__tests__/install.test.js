'use strict';

const install = require('..');
const assert = require('assert').strict;

assert.strictEqual(install(), 'Hello from install');
console.info('install tests passed');
