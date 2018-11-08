/**
 * Created by peterzhang on 2018/11/3.
 */
import App from './App.vue'
import Vue from 'vue'
const DayPicker = Vue.extend(App)
let instance

function remove(event) {
    if (event.target.parentNode) {
        document.body.removeChild(event.target.parentNode)
    }
}

export default (options = {}) =>  {
    console.log(options)
    if (!instance) {
        instance = new DayPicker({
            el: document.createElement('div')
        })
    }

    if (instance.visible) return

    instance.day = instance.defaultValue = options.defaultValue || ''
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
