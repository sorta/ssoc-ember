import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | html-safe', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('inputValue', '1234 <span>test</span>');

    await render(hbs`{{html-safe inputValue}}`);

    assert.equal(this.element.textContent.trim(), '1234 test');
  });
});
