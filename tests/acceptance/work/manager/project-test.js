import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';
import a11yAudit from 'ember-a11y-testing/test-support/audit';
import projects from 'ssoc-ember/mirage/fixtures/projects';

const firstProject = projects.firstObject;
const projectUrl = `/work/${firstProject.managerId}/${firstProject.id}`;

module('Acceptance | work/manager/project', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /work/manager/project', async function (assert) {
    await visit(projectUrl);
    await a11yAudit();

    const { highlights, img, links, name, url } = firstProject;

    assert.equal(currentURL(), projectUrl);
    assert.dom('[data-test-project-title]').hasText(`${name} Project Details`);
    assert.dom('[data-test-project-image-link]').hasAttribute('href', url);
    assert
      .dom('[data-test-project-image]')
      .hasAttribute('alt', `${name} screenshot`)
      .hasAttribute('src', `/images/responsive/${img}1200w.png`);
    assert.dom('[data-test-project-description]').exists();
    assert
      .dom('[data-test-project-highlight]')
      .exists({ count: highlights.length });
    assert.dom('[data-test-project-meta-link]').exists({ count: links.length });
  });
});
