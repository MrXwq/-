<template>
    <div class="shopping-container">
        <div class="goods-list">
            <!-- 商品列表项目区 -->
            <div class="mui-card" v-for="(item,index) in goodslist" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch @change="changeSelected(item.id,$store.getters.getProductSelected[item.id])"
                         v-model="$store.getters.getProductSelected[item.id]"></mt-switch>
                        <img src="https://img10.360buyimg.com/n1/s450x450_jfs/t1/30693/17/7599/332089/5c98cc1fE43eafa3c/3b3515c7537efeaf.jpg" />
                        <div class="info">
                            <h1>{{item.id}}</h1>
                            <p>
                                <span class="price">￥{{item.price}}</span>
                                <!-- 如何获取数量，我们可以把cart中的id作为键，
                                count作为数量，这样我们就可以收到这样的对象了 
                                {id:count}，这样我们就可以调用这个对象{{item.id}}-->
                                <cartbox :initCount = "$store.getters.getProductCount[item.id]" :productId = "item.id"></cartbox>
                                <a href="#" @click.prevent="remove(item.id,index)">删除</a>
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <!-- 商品结算区 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner countP">
                    <div class="left">
                        <p>
                            总价（不含运费）
                        </p>
                        <p>
                            已勾选商品<span>{{$store.getters.getTotalPrice.count}}</span>件，总价<span>￥{{$store.getters.getTotalPrice.price}}</span>
                        </p>
                    </div>
                    <mt-button type = "danger">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
    
        
    
</template>

<script>
import cartbox from '../subcomponents/CART_BOX.vue'
export default {
    data(){
        return {
            goodslist: []//购物车中所有的商品
        }
    },
    created(){
        this.getGoodsList()
    },
    methods:{
        getGoodsList(){
            //获取购物车商品列表
            let idArr = [];
            this.$store.state.cart.forEach(item=>{
                idArr.push(item.id)
            })
            //如果购物车中没有商品，则直接返回，不需要请求接口，否则会报错
            if (idArr.length <=0){
                return;
            }
            //获取购物车商品列表 
            this.goodslist = this.$store.state.cart
        },
        remove(id,index){
            //删除goodslist中的数据
            this.goodslist.splice(index,1);
            //删除store中的数据
            this.$store.commit('removeP',id)
        },
        changeSelected(id,val){
            console.log(id+"-----"+val)
            this.$store.commit('changStoreSelected',{id,val})
        }
    },
    components:{cartbox}
}
</script>

<style lang="scss" scoped>
    .shopping-container{
        .goods-list{
            
            img{
                width: 60px;
                height: 60px;
            }
            
            .info{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                h1{
                    font-size: 13px;
                }
                .price{
                    color: red;
                    font-weight: bold;
                }
            }
        }
        background-color: #eee;
        overflow: hidden;
        .mui-card-content-inner{
            display: flex;
            align-items: center;
        }
        .countP{
            span{
                color: red;
                font-weight: bold;
            }
            display: flex;
            justify-content: space-between;
        }
    }
</style>
