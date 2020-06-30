import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | link-ext', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.extUrl = 'https://emberjs.com/';

    await render(hbs`
      <LinkExt @href={{extUrl}}>
        template block text
      </LinkExt>
    `);

    assert
      .dom('[data-test-link-ext]')
      .hasAttribute('href', this.extUrl, 'href attr is correct')
      .hasAttribute('target', '_blank', 'target attr is correct')
      .hasAttribute('rel', 'noopener noreferrer', 'rel attr is correct')
      .hasText('template block text', 'content is correct');
  });
});
