import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class WorkRoute extends Route {
  @action
  error(error) {
    const errors = error.errors || [];
    const [topError = {}] = errors;
    if (topError.status === '404') {
      this.intermediateTransitionTo('not-found');
    } else {
      return true;
    }
  }
}
