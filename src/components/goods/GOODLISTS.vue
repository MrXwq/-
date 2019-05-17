<template>
    <div class="goods-list">
        <router-link to="/home/goodsinfo/1" class="goods-item">
            <img src="https://img10.360buyimg.com/n1/s450x450_jfs/t1/30693/17/7599/332089/5c98cc1fE43eafa3c/3b3515c7537efeaf.jpg">
            <h1 class="ptitle">华为 HUAWEI P30 </h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥4288</span>
                    <span class="old">￥5000</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩66件</span>
                </p>
            </div>
        </router-link>
        <div class="goods-item">
            <img src="https://img10.360buyimg.com/n1/s450x450_jfs/t1/30693/17/7599/332089/5c98cc1fE43eafa3c/3b3515c7537efeaf.jpg">
            <h1 class="ptitle">华为 HUAWEI P30 </h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥4288</span>
                    <span class="old">￥5000</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩66件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://img10.360buyimg.com/n1/s450x450_jfs/t1/30693/17/7599/332089/5c98cc1fE43eafa3c/3b3515c7537efeaf.jpg">
            <h1 class="ptitle">华为 HUAWEI P30 </h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥4288</span>
                    <span class="old">￥5000</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩66件</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created(){
        this.getInfo()
    },
    methods:{
        getInfo(){
            this.axios.get('https://www.easy-mock.com/mock/5cdd4bb2c2870352ad1e237c/example/proxy#!method=get')
                .then(res => {
                    console.log(res);
                })
        }
    }
}
</script>
<style lang="scss" scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 7px;
        .goods-item{
            padding: 2px;
            margin: 4px 0;
            width: 49%;
            min-height: 238px;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            img{
                width: 100%;
            }
            h1{
                font-size: 14px;
            }
            .info{
                p{
                    padding: 0;
                    margin: 0;
                }
                background-color: #ccc;
                .now{
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                }
            }
        }
        
        
    }
</style>