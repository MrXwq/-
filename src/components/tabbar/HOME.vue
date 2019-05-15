<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../lib/img/1.png">
                    <div class="mui-media-body">
                        新闻资讯
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photos">
                    <img src="../../lib/img/2.png">
                    <div class="mui-media-body">
                        图片分享
                        </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../lib/img/3.png">
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../lib/img/4.png">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../lib/img/5.png">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../lib/img/6.png">
                    <div class="mui-media-body">联系我们</div></a></li>
		</ul> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }

    },
    created(){
        this.getlunbotu();
    },
    methods: {
        getlunbotu() {
            this.axios.get("http://api.komavideo.com/news/list")
                .then(body => {
                    console.log(body);
                })
        }
    }
}
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
        .mint-swipe-item{
            &:nth-child(1){
                background-color: aquamarine;
            }
            &:nth-child(2){
                background-color: aqua;
            }
            &:nth-child(3){
                background-color: red;
            }
        }
    }
    .mui-grid-view.mui-grid-9{
        background-color: white;
        border: 0;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0;
        .mui-media-body{
            font-size: 13px;
        }
    }
</style>
