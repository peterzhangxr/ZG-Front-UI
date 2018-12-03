/**
 * Created by peterzhang on 2018/11/3.
 */
import App from './App.vue'
import Vue from 'vue'
const Dialog = Vue.extend(App)
let instance

function remove(event) {
    if (event.target.parentNode) {
        document.body.removeChild(event.target.parentNode)
    }
}

export default (options = {}, ok = () => {}, cancel = () => {}) =>  {
    if (!instance) {
        instance = new Dialog({
            el: document.createElement('div')
        })
    }

    if (instance.visible) return

    instance.title = options.title || '提示'
    if (options.cancel) {
        instance.cancel = options.cancel
    }

    if (options.cancelText) {
        instance.cancelText = options.cancelText
    }

    instance.onCancel = cancel

    if (options.ok) {
        instance.ok = options.ok
    }

    if (options.okText) {
        instance.okText = options.okText
    }

    instance.onOk = ok

    if (options.content) {
        instance.content = options.content
    }
    instance.tagClose = options.tagClose || false

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
