import { helper } from '@ember/component/helper';
import { htmlSafe as safe } from '@ember/template';

export default helper(function htmlSafe(params) {
  return safe(params.join(''));
});
