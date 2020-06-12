import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about');
  this.route('work', function() {
    this.route('manager', { path: '/:manager_id' });
  });
  this.route('not-found', { path: '/*path' });
});
