import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');
    await a11yAudit();

    assert.equal(currentURL(), '/');

    assert.dom('[data-test-index-page-section-headline]').exists();
    assert.dom('[data-test-index-page-section-details]').exists();
    assert.dom('[data-test-index-page-section-links]').exists();
    assert.dom('[data-test-index-page-link]').exists({ count: 3 });
  });
});
