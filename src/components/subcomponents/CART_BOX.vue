<template>
    <div class="mui-numbox" data-numbox-min='1' style=" height : 25px;">
        <button class="mui-btn mui-btn-numbox-minus" type="button" >-</button>
        <input id="test" class="mui-input-numbox" 
        @change="countChanged" type="number"
        ref="numbox" :value="initCount"/>
        <!-- ref是可以直接操作dom的名字 -->
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
import mui from '../../lib/js/mui.js'
export default {
    mounted () {
        mui('.mui-numbox').numbox()
        console.log(this.productId)
    },
    methods:{
        countChanged(){
            console.log(this.$refs.numbox.value)
            //每当数量改变，同步到购物车的store中
            this.$store.commit('changeCount',
            {id:this.productId,count:this.$refs.numbox.value}
            )
        }
    },
    props:["initCount","productId"]
}
</script>
<style lang="scss" scoped>

</style>
