import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';
import a11yAudit from 'ember-a11y-testing/test-support/audit';
import managers from 'ssoc-ember/mirage/fixtures/managers';

const firstManager = managers.firstObject;
const managerUrl = `/work/${firstManager.id}`;

module('Acceptance | work/manager', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /work/manager', async function(assert) {
    await visit(managerUrl);
    await a11yAudit();

    assert.equal(currentURL(), managerUrl);
    assert.dom('[data-test-manager-title]').exists({ count: 1 });
    assert.dom('[data-test-manager-project-list-item]').exists({ count: firstManager.projectIds.length });
  });

  test('project link works', async function(assert) {
    await visit(managerUrl);
    assert.equal(currentURL(), managerUrl);

    const firstProjectId = firstManager.projectIds.firstObject;

    await click(`[data-test-manager-project-link=${firstProjectId}]`);
    assert.equal(currentURL(), `/work/${firstManager.id}/${firstProjectId}`);
  });
});
