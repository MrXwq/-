<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
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
    }
}
</script>
<style lang="scss" scoped>

</style>
