/**
 * Created by peterzhang on 2018/11/3.
 */
import App from './App.vue'
import Vue from 'vue'
const Calendar = Vue.extend(App)
let instance

function remove(event) {
    if (event.target.parentNode) {
        document.body.removeChild(event.target.parentNode)
    }
}

export default (options = {}) =>  {
    if (!instance) {
        instance = new Calendar({
            el: document.createElement('div')
        })
    }

    if (instance.visible) return

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
