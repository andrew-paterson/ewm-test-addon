import { click, visit } from '@ember/test-helpers';
import window from 'ember-window-mock';

export default [
  {
    title: 'it can mock window in acceptance tests',
    testFunction: async function (assert) {
      await visit('/');
      await click('button');
      assert.strictEqual(window.location.href, 'http://www.example.com/');
    },
  },
];
