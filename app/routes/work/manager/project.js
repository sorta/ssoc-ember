import Route from '@ember/routing/route';

export default class WorkManagerProjectRoute extends Route {
  async model({ project_id }) {
    return this.store.findRecord(
      'project',
      project_id,
      { include: 'manager' }
    );
  }
}
