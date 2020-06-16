import Model, { attr, belongsTo } from '@ember-data/model';

export default class ProjectModel extends Model {
  @attr name;
  @attr description;
  @attr url;
  @attr summary;
  @attr img;
  @attr highlights;
  @attr links;

  @belongsTo('manager') manager;

  get imgName() {
    return `${this.img}.png`;
  }
}
