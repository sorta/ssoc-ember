import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LinkBackComponent extends Component {
  @action goBack() {
    history.back();
  }
}
