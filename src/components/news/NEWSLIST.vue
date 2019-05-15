<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media"  v-for="(item,index) in newslist" :key = "item.id">
                <router-link :to="'/home/newsinfo/'+index">
                    <img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/43991889?s=40&v=4">
                    <div class="mui-media-body">
                        <h1>
                            {{ item.title}}
                        </h1>
                        <p class='mui-ellipsis'>
                            <span>
                                发表时间：{{item.pubdate | dataFormat}}
                            </span>
                            <span> 点击：{{index}} 次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            newslist:[]
        }
    },
    created(){
        this.getNewlist();
    },
    methods: {
        getNewlist () {
            this.axios.get("http://api.komavideo.com/news/list")
                .then(body => {
                    this.newslist = body.data;
                    console.log(this.newslist)
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view{
    li{
        
        h1{
            font-size: 14px;
        }
        .mui-ellipsis{
            display: flex;
            justify-content: space-between;
            color:#226af2;
            font-size: 12px;
        }
    }
}
</style>
