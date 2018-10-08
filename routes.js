/**
 * Created by peterzhang on 2018/10/4.
 */
export default [{
    path: '/',
    name: 'home',
    component: resolve => require(['./views/index.vue'], resolve)
}, {
    path: '/switch',
    name: 'switch',
    component: resolve => require(['./views/switch.vue'], resolve)
}, {
    path: '/form',
    name: 'form',
    component: resolve => require(['./views/form.vue'], resolve)
}, {
    path: '/button',
    name: 'button',
    component: resolve => require(['./views/button.vue'], resolve)
}, {
    path: '/picture',
    name: 'picture',
    component: resolve => require(['./views/picture.vue'], resolve)
}, {
    path: '/panel',
    name: 'panel',
    component: resolve => require(['./views/panel.vue'], resolve)
}]
