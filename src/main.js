import Vue from 'vue'


//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入路由模块
import router from './router'

import Vuex from 'vuex'
Vue.use(Vuex)

//一开始就获取cart，如果有就获取本地存储，如果没有就传一个空数组，字符串传进来的都是一个字符串，需要把他转成数组
let cart = JSON.parse(localStorage.getItem('cart') || '[]')
let store = new Vuex.Store({
    state:{//this.store.state.***
        cart:cart
            //{id:商品的id,count:要购买的数量，price：商品的价格，selected：商品是否要购买的状态}
        
    },
    mutations:{//this.store.commit('方法得名称','按需传入的唯一参数')
        //点击加入购物车
        addToCart(state,productsInfo){
            /** 分析：
             *       1. 如果之前就购物车中就有数据，那么只需要更新数量
             *       2. 如果没有，则直接把商品数据，push到cart中
            */
           //假设商品一开始没有找到
            let flag = false;

            state.cart.some(
                item => {
                if(item.id == productsInfo.id) {
                    //客户端传过来的数据有可能是个字符串，所以转换一下
                    item.count += parseInt(productsInfo.count)
                    flag = true
                    //如果找到那么终止循环
                    return true
                }
            })
            //如果没有直接push
            if(!flag){
                state.cart.push(productsInfo)
            }
            
            //保存cart到本地
            localStorage.setItem('cart',JSON.stringify(state.cart))
        },
        //改变cart中的数量
        changeCount(state,goodsinfo){
            state.cart.some(item => {
                if(item.id == goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count)
                }
                return true
            }) 
            localStorage.setItem("cart",JSON.stringify(state.cart))
        },
        //删除购物车
        removeP(state,id){
            state.cart.some((item,index) => {
                if(item.id == id){
                    state.cart.splice(index,1)
                }
            })
            localStorage.setItem("cart",JSON.stringify(state.cart))
        },
        //修改store中的selected
        changStoreSelected(state,info){
            state.cart.some(item => {
                if(item.id == info.id){
                    item.selected = info.val
                }
            })
            localStorage.setItem("cart",JSON.stringify(state.cart))
        }
    },
    getters:{//this.store.getters.***
        //计算出总数量
        getAllCount(state){
            var c = 0;
            state.cart.forEach(item => {
                c += item.count;
            })
            return c;
        },
        //得到每个商品数量的值
        getProductCount(state){
            let o = {}
            state.cart.forEach(item => {
                o[item.id] = item.count
            })
            return o
        },
        //获取选中状态
        getProductSelected(state){
            let o = {}
            state.cart.forEach(item => {
                o[item.id]=item.selected;
            })
            return o;
        },
        //获取商品的数量和价格
        getTotalPrice(state){
            let o = {
                count:0,
                price:0
            }
            state.cart.forEach(item => {
                if(item.selected){
                    o.count += item.count
                    o.price += item.price * item.count
                }
            })
            return o;
        }
    }
})

//导入格式化时间的过滤器
import moment from 'moment'
//定义全局的过滤器
Vue.filter('dataFormat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})

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
    router,//挂载路由
    store//挂载vuex
})