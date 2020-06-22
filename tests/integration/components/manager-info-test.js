import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { hbs } from 'ember-cli-htmlbars';
import managers from 'ssoc-ember/mirage/fixtures/managers';

const firstManager = managers.firstObject;

module('Integration | Component | manager-info', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders', async function(assert) {
    const store = this.owner.lookup('service:store');
    const manager = await store.findRecord('manager', firstManager.id, { include: 'projects' });
    this.set('manager', manager);

    await render(hbs`<ManagerInfo @manager={{manager}} />`);

    assert.dom('[data-test-manager-title]').hasText(`${manager.name} Projects`);
    assert.dom('[data-test-manager-desc]').exists();
    assert.dom('[data-test-manager-project-list-item]').exists({ count: manager.projects.length });
  });
});
