import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | manager-info', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`<ManagerInfo />`);

    assert.equal(this.element.textContent.trim(), '');

    await render(hbs`
      <ManagerInfo>
        template block text
      </ManagerInfo>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
