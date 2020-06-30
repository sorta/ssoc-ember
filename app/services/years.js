import Service from '@ember/service';

export default class YearsService extends Service {
  current = new Date().getFullYear();
  devStart = 2011;

  get devSpan() {
    return this.current - this.devStart;
  }
}
