<template>
    <div class="container">
        <!-- 顶部 -->
        <mt-header fixed title="炒鸡饿"></mt-header>
        
        <!-- 中间router-view区域 -->
        <router-view></router-view>

        <!-- 底部区域 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item" >
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/member" class="mui-tab-item" >
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to="/cart" class="mui-tab-item" >
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/search" class="mui-tab-item" >
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
       <h1>只是一个App组件</h1>
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
    }
</style>
