import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class WorkManagerRoute extends Route {
  async model({ manager_id }) {
    return hash({
      manager: this.store.findRecord('manager', manager_id),
      projects: this.store.query('project', { manager: manager_id }),
    });
  }
}
