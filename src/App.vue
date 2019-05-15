<template>
    <div class="container">
        <!-- 顶部 -->
        <mt-header fixed title="炒鸡饿"></mt-header>
        
        <!-- 中间router-view区域 -->
        <transition>
            <router-view></router-view>
        </transition>

        <!-- 底部区域 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item-llb" >
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/member" class="mui-tab-item-llb" >
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to="/cart" class="mui-tab-item-llb" >
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/search" class="mui-tab-item-llb" >
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>

    export default {
        data() {
            return {

            }
        },
        methods: {
        
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        padding-top: 40px;
        padding-bottom: 50px;
        overflow: hidden;
    }
    .v-enter{
        opacity: 0;
        transform: translateX(100%);
    }
    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }
    .v-enter-active,
    .v-leave-active{
        transition: all 0.3s linear;
    }

    //因为底部不行而重写的样式
    .mui-bar-tab .mui-tab-item-llb.mui-active{
        color: #007aff;
    }
    .mui-bar-tab .mui-tab-item-llb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
	}
</style>
