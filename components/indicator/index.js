/**
 * Created by peterzhang on 2018/10/6.
 */
import Vue from 'vue'
import App from './App.vue'

let instance;
const Indicator = Vue.extend(App)

function remove(event) {
    if (event.target.parentNode) {
        event.target.parentNode.removeChild(event.target);
    }
}

export default {
    open(options = {}) {
        if (!instance) {
            instance = new Indicator({
                el: document.createElement('div')
            })
        }


        if (instance.visible) return

        instance.text = typeof options === 'string' ? options : options.text || ''
        document.body.appendChild(instance.$el)

        Vue.nextTick(() => {
            instance.$el.removeEventListener('transitionend', remove)
            instance.visible = true
        })
    },
    //关闭
    close() {
        if (instance) {
            instance.visible = false
            instance.$el.addEventListener('transitionend', remove);
        }
    }

}
