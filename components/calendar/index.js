/**
 * Created by peterzhang on 2018/11/3.
 */
import App from './App.vue'
import Vue from 'vue'
import utils from './utils'

const Calendar = Vue.extend(App)
let instance

function remove(event) {
    if (event.target.parentNode) {
        document.body.removeChild(event.target.parentNode)
    }
}

export default (options = {}) =>  {
    let date = new Date()
    if (options.defaultValue.length > 0) {
        date = new Date(options.defaultValue[0])
    }
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    options.enableDate = options.enableDate || []

    let items = []
    items.push({
        year: year,
        month: month,
        date: day,
        children: utils.getDataOfMonth(year, month, day, options.enableDate)
    })

    //检测是否有下个月
    let [nextYear, nextMonth] = utils.getNextMonth(year, month)
    let need = false
    if (options.enableDate.length > 0) {
        let _date = new Date(options.enableDate[options.enableDate.length - 1])
        let _year = _date.getFullYear()
        let _month = _date.getMonth() + 1
        if (_year > year || _month > month) {
            need = true
        }
    }

    if (need) {
        items.push({
            year: nextYear,
            month: nextMonth,
            date: 0,
            children: utils.getDataOfMonth(nextYear, nextMonth, 0, options.enableDate)
        })
    }
    if (!instance) {
        instance = new Calendar({
            el: document.createElement('div'),
            data: {
                items: items,
                current: JSON.parse(JSON.stringify(options.defaultValue))
            }
        })
    } else {
        instance.items = items
        instance.current = JSON.parse(JSON.stringify(options.defaultValue))
    }

    if (instance.visible) return

    instance.onConfirm = options.onConfirm || (() => {})

    instance.close = () => {
        instance.visible = false
        instance.$el.addEventListener('transitionend', remove);
    }

    document.body.appendChild(instance.$el)

    Vue.nextTick(() => {
        instance.$el.removeEventListener('transitionend', remove)
        instance.visible = true
    })
}
