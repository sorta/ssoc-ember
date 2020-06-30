import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | button-back', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<ButtonBack />`);

    assert.equal(this.element.textContent.trim(), 'Go Back');

    await render(hbs`
      <ButtonBack>
        Back button text
      </ButtonBack>
    `);

    assert.equal(this.element.textContent.trim(), 'Back button text');
  });
});
