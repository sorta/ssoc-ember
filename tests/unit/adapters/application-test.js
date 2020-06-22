import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | application', function(hooks) {
  setupTest(hooks);

  test('basic functionality', function(assert) {
    const adapter = this.owner.lookup('adapter:application');
    assert.ok(adapter, 'adapter exists');
    assert.equal(adapter.namespace, 'api', 'api is namespaced');
  });
});
