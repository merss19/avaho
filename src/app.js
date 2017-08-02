import $ from 'jquery';
import Groups from './groups';
import {ClsName} from './const';

class App {

  /**
   * Создание объекта приложения
   *
   */

  constructor() {
    console.log('appp')
    this.$groups = $(ClsName.groups)
    if (this.$groups.length) {
      this.$groups.groups()
    } else {
      throw new Error(`class '${ClsName.groups}' not found`);
    }
  }
}

let app = new App()