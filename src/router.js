
//1. 导入vue-router 包
import VueRouter from 'vue-router'

import HOME from './components/tabbar/HOME.vue'
import MEMBER from './components/tabbar/MEMBER.vue'
import CART from './components/tabbar/CART.vue'
import SEARCH from './components/tabbar/SEARCH.vue'

//新闻页
import NEWSLIST from './components/news/NEWSLIST.vue'
//新闻详情
import NEWSINFO from './components/news/NEWSINFO.vue'
//图片分享
import PHOTOS from './components/photos/PHOTOLIST.vue'
//商品列表
import GOODLISTS from './components/goods/GOODLISTS.vue'
//商品详情
import GOODSINFO from './components/goods/GOODSINFO.vue'
//商品评论
import GOODSCOMMENT from './components/goods/GOODSCOMMENT.vue'
//商品描述
import GOODSDESC from './components/goods/GOODSDESC.vue'

//3.创建路由对象
export default new VueRouter({
    routes: [
        {path: '/',redirect: '/home'},
        {path: '/home',component: HOME},
        {path: '/member',component: MEMBER},
        {path: '/cart',component: CART},
        {path: '/search',component: SEARCH},
        {path: '/home/newslist',component: NEWSLIST},
        {path: '/home/newsinfo/:id',component: NEWSINFO},
        {path: '/home/photos',component: PHOTOS},
        {path: '/home/goods',component: GOODLISTS},
        {path: '/home/goodsinfo/:id',component: GOODSINFO},
        {path: '/home/goodscomment/:id',component: GOODSCOMMENT,name:'goodscomment'},
        {path: '/home/goodsdesc/:id',component: GOODSDESC,name:'goodsdesc'}
    ],
    linkActiveClass: 'mui-active'//vue-router自带
});
