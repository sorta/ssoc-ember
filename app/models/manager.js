import Model, { attr } from '@ember-data/model';

export default class ManagerModel extends Model {
  @attr name;
  @attr description;
}
