import Vue from 'vue'


//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入路由模块
import router from './router'

//导入App根组件
import app from './App.vue'

//引入全部组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

//引入mui-ui
import './lib/css/mui.min.css'
import './lib/css/icons-extra.css'

//导入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router//挂载路由
})