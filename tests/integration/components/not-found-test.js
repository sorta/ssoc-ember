import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | not-found', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<NotFound />`);

    assert.dom('[data-test-not-found-title]').exists();
    assert.dom('[data-test-error-links]').exists();
  });
});
