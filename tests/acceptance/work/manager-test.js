import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Acceptance | work/manager', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /work/manager', async function(assert) {
    await visit('/work/manager');
    await a11yAudit();

    assert.equal(currentURL(), '/work/manager');
  });
});
