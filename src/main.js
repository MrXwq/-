import Vue from 'vue'

//导入App根组件
import app from './App.vue'

//引入全部组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

//引入mui-ui
import './lib/css/mui.min.css'


var vm = new Vue({
    el: '#app',
    render: c => c(app)
})