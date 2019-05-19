<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max = "max">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" @change="countChanged" ref="changeBox" type="number" value="1" />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
import mui from '../../lib/js/mui.js'
export default {
    mounted () {
        mui('.mui-numbox').numbox()
    },
    methods:{
        countChanged(){
            this.$emit('getCount',parseInt(this.$refs.changeBox.value)) 
        }
    },
    props:[
        "max"
    ],
    /**
     * 如果数据变成异步获取的了，那么需要watch监听
     */
    // watch:{
    //         max:(newValue,oldValue) => {
    //             mui('.mui-numbox')
    //             .numbox()
    //             .setOption('max',newValue)
    //     }
    // },
}
</script>
<style lang="scss" scoped>

</style>
