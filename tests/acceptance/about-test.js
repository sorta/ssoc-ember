import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Acceptance | about', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /about', async function(assert) {
    await visit('/about');
    await a11yAudit();

    assert.equal(currentURL(), '/about');
  });
});
