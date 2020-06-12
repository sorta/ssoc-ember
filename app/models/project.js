import Model, { attr, belongsTo } from '@ember-data/model';

export default class ProjectModel extends Model {
  @attr name;
  @attr description;
  @attr url;
  @attr summary;

  @belongsTo('manager') manager;
}
