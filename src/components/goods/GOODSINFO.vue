<template>
    <div class="goodsinfo-container">

        <!-- 购物车小球 -->
        <transition
        @before-enter="beforeEnter"
        @enter = "enter"
        @after-enter="afterEnter">
            <div class="ball" v-show = "isshow" ref="ball"></div>
        </transition>

        <!-- 商品轮播图区 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                     <swiper></swiper>
                </div>
            </div>
        </div>
        <!-- 商品购买区 -->
        <div class="mui-card">
            <div class="mui-card-header">商品的名称标题</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>￥{{product.oldValue}}</del>&nbsp;&nbsp;销售价：<span class="now_price">
                            ￥{{product.newValue}}
                        </span>
                    </p>
                    <p>
                        <!-- getCount：父组件绑定方法给子组件
                            :max 绑定商品的库存
                         -->
                        购买数量：<goodsinfo_numbox @getCount = "getSelectNum" :max = 'product.productMax'></goodsinfo_numbox>
                    </p>
                    <p>
                        <mt-button type = "primary" size = "small">立即购买</mt-button>
                        <mt-button type = "danger" size = "small" @click="addcart" >加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>
        <!-- 商品详情区 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：6666666666666</p>
                    <p>库存情况：12件</p>
                    <p>上架时间：2015-05-20 01:19:30</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type = "primary" size="large" plain @click="goDesc(1)">图文介绍</mt-button>
                <mt-button type = "default" size="large" plain @click="goComment(1)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
//导入轮播图组件
import swiper from '../subcomponents/SWIPER.vue'
//导入数字选择框组件
import goodsinfo_numbox from '../subcomponents/GOODSINFO_NUMBOX.vue'

export default {
    components:{
        //轮播图选择组件
        swiper,
        //数字选择组件
        goodsinfo_numbox
    },
    data(){
        return{
            //商品id
            id:1,
            //默认小球隐藏
            isshow:false,
            //默认添加一个进购物车
            selectNum:1,
            //商品信息
            product:{'newValue':2000,'oldValue':3000,'productMax':60},
        }
    },
    methods:{
        // 编程式导航跳转
        goDesc(id) {
            this.$router.push({name:'goodsdesc',params: { id }});
        },
        // 编程式导航跳转
        goComment(id) {
            this.$router.push({name:'goodscomment',params: { id }});
        },
        //加入购物车
        addcart(){
            this.isshow =! this.isshow
            //拼接出一个要保存到store中car数组中的商品信息对象
            let productsInfo = {
                    id:this.id,
                    count:this.selectNum,
                    price:this.product.newValue,
                    selected:true
                }
            //调用store中的mutation来将商品加入购物车
            this.$store.commit("addToCart",productsInfo);
        },
        beforeEnter(el) {
            el.style.transform = "translate(0,0)"
        },
        enter(el,done) {
            el.offsetWidth;
            //获取小球的位置
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            // 获取徽标在页面中的位置
            const badgePosition = document.getElementById('badge').getBoundingClientRect();
            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;
            
            el.style.transform = `translate(${xDist}px,${yDist}px)`;
            el.style.transition = "all 0.5s ease";
            done();
        },
        afterEnter(el) {
            this.isshow =! this.isshow;
        },
        //父组件给子组件传递函数
        getSelectNum(count){
            this.selectNum = count;
            console.log('父组件收到的值'+this.selectNum)
        }
    }
}
</script>
<style lang="scss" scoped>
    .goodsinfo-container{
        background-color: #eee;
        padding: 4px;
        .ball{
            width: 15px;
            height: 15px;
            background-color: red;
            border-radius: 50%;
            position: absolute;
            z-index: 99; 
            left: 153px;
            top: 395px;
        }
    }
    .now_price{
        font-size: 16px;
        font-weight: bold;
        color: red;
    }
    .mui-card-footer{
        display: block;
        button{
            margin: 15px 0;
        }
    }
</style>
