import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | years', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('basic functionality', function (assert) {
    const currentYear = new Date().getFullYear();
    const devStart = 2011;
    let service = this.owner.lookup('service:years');
    assert.ok(service, 'service exists');

    assert.equal(service.current, currentYear, 'current year is correct');
    assert.equal(
      service.devSpan,
      currentYear - devStart,
      'dev year span is correct',
    );
  });
});
