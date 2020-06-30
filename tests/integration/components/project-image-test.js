import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { hbs } from 'ember-cli-htmlbars';
import projects from 'ssoc-ember/mirage/fixtures/projects';

const firstProject = projects.firstObject;

module('Integration | Component | project-image', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders', async function (assert) {
    const store = this.owner.lookup('service:store');
    const project = await store.findRecord('project', firstProject.id);
    this.set('project', project);

    await render(hbs`<ProjectImage @project={{project}} />`);

    assert
      .dom('[data-test-project-image]')
      .hasAttribute('alt', `${project.name} screenshot`)
      .hasAttribute('src', `/images/responsive/${project.img}1200w.png`);
  });
});
