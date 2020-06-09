import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | layouts/main', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`
      <Layouts::Main>
        Page content
      </Layouts::Main>
    `);

    const currentYear = (new Date()).getFullYear();

    assert.dom('[data-test-layout-main-logo]').exists();
    assert.dom('[data-test-layout-main-nav]').exists();
    assert.dom('[data-test-layout-main-content]').containsText('Page content');
    assert.dom('[data-test-layout-main-copyright]').hasText(`© Sophie Orta ${currentYear}`);
    assert.dom('[data-test-layout-main-resume-link]').exists();
  });
});
