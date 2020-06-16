import Route from '@ember/routing/route';
import { warn } from '@ember/debug';

export default class WorkManagerRoute extends Route {
  async model({ manager_id }) {
    return this.store.findRecord(
      'manager',
      manager_id,
      { include: 'projects' }
    );
  }
}
