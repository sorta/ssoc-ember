import Route from '@ember/routing/route';

export default class WorkRoute extends Route {
  async model() {
    return this.store.findAll('manager', { include: 'projects' });
  }
}
