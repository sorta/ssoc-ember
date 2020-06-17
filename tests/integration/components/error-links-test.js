import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | error-links', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<ErrorLinks />`);

    assert.dom('[data-test-error-links-back]').exists();
    assert.dom('[data-test-error-links-home]').exists();
  });
});
