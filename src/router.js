
//1. 导入vue-router 包
import VueRouter from 'vue-router'

import HOME from './components/tabbar/HOME.vue'
import MEMBER from './components/tabbar/MEMBER.vue'
import CART from './components/tabbar/CART.vue'
import SEARCH from './components/tabbar/SEARCH.vue'
//3.创建路由对象
export default new VueRouter({
    routes: [
        {path: '/home',component: HOME},
        {path: '/member',component: MEMBER},
        {path: '/cart',component: CART},
        {path: '/search',component: SEARCH}
    ],
    linkActiveClass: 'mui-active'//vue-router自带
});
