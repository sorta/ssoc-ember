import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | project', function (hooks) {
  setupTest(hooks);

  test('it has correct props', function (assert) {
    const img = 'test';
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('project', {
      img,
    });
    assert.ok(model, 'Model Exists');
    assert.equal(model.img, img, 'img property is correct');
    assert.equal(model.imgName, `${img}.png`, 'imgName property is correct');
  });
});
