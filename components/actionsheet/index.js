/**
 * Created by peterzhang on 2018/10/6.
 */
import App from './App.vue'
import Vue from 'vue'
import _ from 'lodash'
const ActionSheet = Vue.extend(App)
let instance

function remove(event) {
    if (event.target.parentNode) {
        document.body.removeChild(event.target.parentNode)
    }
}

export default (options) =>  {
    if (!instance) {
        instance = new ActionSheet({
            el: document.createElement('div')
        })
    }

    if (instance.visible) return

    if (_.isArray(options)) {
        instance.list = options
    } else {
        instance.list = options.list || []

        if (options.cancel) {
            instance.cancel = options.cancel
        }

        if (options.label) {
            instance.label = options.label
        }

        instance.cancelText = options.cancelText || '取消'
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
