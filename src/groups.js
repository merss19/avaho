import $ from 'jquery';
import { ClsName } from './const';

const Groups = (($) => {

  /**
   * Название класса
   * @constant
   * @type {string}
   * @default
   */
  const NAME                = 'groups'
  const DATA_KEY            = 'groups'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  class Groups {

    /**
     * Создание объекта группы кнопок
     * @param {object} group - Группа кнопок
     * @public
     */


    constructor (group) {
      this.groups = group
      this.groupsItems = $(this.groups).find(ClsName.groupsItem)

      this.groups.on('click', ClsName.groupsItem, () => {
        this.update()
      })
    }

    update(){
      this.groupsItems[0].remove()
      $(this.groups).append(this.groupsItems[0])
      this.groupsItems = $(this.groups).find(ClsName.groupsItem)
    }

    /**
     * Инициализация объекта класса
     * @param {object} config - данные для инициализации
     * @static
     */

    static _init(config) {
      return this.each(function () {
        let $this = $(this),
          data  = $this.data(DATA_KEY)
        if (!data) {
          $this.data(DATA_KEY, (data = new Groups($this)))
        }
      })
    }

  }



  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Groups._init
  $.fn[NAME].Constructor = Groups
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Groups._init
  }

  return Groups

})($)

export default Groups
