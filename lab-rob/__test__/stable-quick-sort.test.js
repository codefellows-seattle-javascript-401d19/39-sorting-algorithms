'use strict';

import * as helpers from './lib/test-helpers';
import stableQuickSort from '../lib/stable-quick-sort';

describe('stable-quick-sort.js', () => {
  test('test', () => {
    let test = helpers.assertSorted([1, 2, 3, 2]);
    console.log(test);
    // expect(test).toBeTruthy();
  });
});