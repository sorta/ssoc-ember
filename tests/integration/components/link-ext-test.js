import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | link-ext', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`<LinkExt />`);

    assert.equal(this.element.textContent.trim(), '');

    await render(hbs`
      <LinkExt>
        template block text
      </LinkExt>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
