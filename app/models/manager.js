import Model, { attr, hasMany } from '@ember-data/model';

export default class ManagerModel extends Model {
  @attr name;
  @attr description;

  @hasMany('project') projects;
}
