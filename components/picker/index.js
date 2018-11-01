/**
 * Created by peterzhang on 2018/10/6.
 */
import App from './App.vue'
import Vue from 'vue'
import _ from 'lodash'
const Picker = Vue.extend(App)
let instance

function remove(event) {
    if (event.target.parentNode) {
        document.body.removeChild(event.target.parentNode)
    }
}

export default (options = {}) =>  {
    if (!instance) {
        instance = new Picker({
            el: document.createElement('div')
        })
    }

    if (instance.visible) return

    if (_.isArray(options)) {
        instance.items = options
    } else {
        instance.items = options.items || []

        instance.labelKey = options.labelKey || 'label'
        instance.labelValue = options.labelValue || 'value'
        instance.labelChild = options.labelChild || 'children'
        instance.defaultValue = options.defaultValue || ''

        instance.confirmText = options.confirmText || '确定'
        instance.cancelText = options.cancelText || '取消'

        instance.onConfirm = options.onConfirm || (() => {})
        instance.onCancel = options.onCancel || (() => {})
    }
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
