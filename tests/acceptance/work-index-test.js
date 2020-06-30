import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';
import a11yAudit from 'ember-a11y-testing/test-support/audit';
import managers from 'ssoc-ember/mirage/fixtures/managers';
import projects from 'ssoc-ember/mirage/fixtures/projects';

const firstManager = managers.firstObject;
const firstProject = projects.firstObject;

module('Acceptance | work index', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /work', async function(assert) {
    await visit('/work');
    await a11yAudit();

    assert.equal(currentURL(), '/work');
    assert.dom('[data-test-manager-title]').exists({ count: managers.length });
    assert.dom('[data-test-manager-project-list-item]').exists({ count: projects.length });
  });

  test('manager link works', async function(assert) {
    await visit('/work');
    assert.equal(currentURL(), '/work');

    await click(`[data-test-manager-title-link=${firstManager.id}]`);
    assert.equal(currentURL(), `/work/${firstManager.id}`);
  });

  test('project link works', async function(assert) {
    await visit('/work');
    assert.equal(currentURL(), '/work');

    await click(`[data-test-manager-project-link=${firstProject.id}]`);
    assert.equal(currentURL(), `/work/${firstProject.managerId}/${firstProject.id}`);
  });
});
