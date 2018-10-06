/**
 * Created by peterzhang on 2018/10/6.
 */
import Vue from 'vue'
import App from './App.vue'

const Constructor = Vue.extend(App)

class Message {
    constructor(options) {
        let instance = new Constructor({
            el: document.createElement('div')
        })

        instance.type = options.type || ''
        instance.duration = options.duration || 2000
        instance.text = typeof options === 'string' ? options : options.text
        if (options.close) {
            instance.close = !!options.close
            instance.onClose = () => {
                this.close()
            }
        }
        document.body.appendChild(instance.$el)
        this.instance = instance

        Vue.nextTick(() => {
            this.instance.visible = true
            this.instance.$el.removeEventListener('transitionend', this.remove)

            if (this.instance.close) return

            this.instance.timer = setTimeout(() => {
                this.close()
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
        return new Message(options)
    },

    info: (text, duration = 1000) => {
        let options = {
            type: 'info',
            text: text,
            duration: duration
        }

        return new Message(options)
    },

    success: (text, duration = 1000) => {
        let options = {
            type: 'success',
            text: text,
            duration: duration
        }

        return new Message(options)
    },

    error: (text, duration = 1000) => {
        let options = {
            type: 'error',
            text: text,
            duration: duration
        }

        return new Message(options)
    },

    warning: (text, duration = 1000) => {
        let options = {
            type: 'warning',
            text: text,
            duration: duration
        }

        return new Message(options)
    },
}


