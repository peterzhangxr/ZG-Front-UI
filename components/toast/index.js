/**
 * Created by peterzhang on 2018/10/6.
 */
import Vue from 'vue'
import App from './App.vue'

const Constructor = Vue.extend(App)

class Toast {
    constructor(options) {
        let instance = new Constructor({
            el: document.createElement('div')
        })

        instance.type = options.type || ''
        instance.duration = options.duration || 2000
        instance.text = typeof options === 'string' ? options : options.text
        document.body.appendChild(instance.$el)
        this.instance = instance

        Vue.nextTick(() => {
            this.instance.visible = true
            this.instance.$el.removeEventListener('transitionend', this.remove)
            this.instance.timer = setTimeout(() => {
                this.close()
                if (options.callback) {
                    callback()
                }
            }, this.instance.duration)
        })
    }


    remove(event) {
        if (event.target.parentNode) {
            event.target.parentNode.removeChild(event.target);
        }
    }

    close() {
        this.instance.visible = false
        this.instance.$el.addEventListener('transitionend', this.remove);
    }

}

export default {
    open: (options = {}) => {
        return new Toast(options)
    },

    success: (text, duration = 1000) => {
        let options = {
            type: 'success',
            text: text,
            duration: duration
        }

        return new Toast(options)

    },

    error: (text, duration = 1000) => {
        let options = {
            type: 'error',
            text: text,
            duration: duration
        }

        return new Toast(options)
    }
}


