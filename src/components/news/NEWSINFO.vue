<template>
    <div class="newsinfo-container">
        <h3 class="suptitle">{{newsInfoList.title}}</h3>
        <p class="subtitle">
            <span>发表时间{{newsInfoList.pubdate | dataFormat}}</span>
            <span>点击：{{id}}次</span>
        </p>
        <div class="news-content" v-html="newsInfoList.content"></div>
        <comments :id="this.id"></comments>
    </div>
</template>

<script>
import comments from '../subcomponents/COMMENTS.vue'
export default {
    data () {
        return {
            id:this.$route.params.id,
            newsInfoList:{},
        }
    },
    created(){
        this.getNewsInfo();
    },
    methods:{
         getNewsInfo() {
             this.axios.get('http://api.komavideo.com/news/list/'+this.id)
                .then(body => {
                    this.newsInfoList=body.data[this.id];
                })
                
         }
    },
    components:{
            comments
    }
}
</script>

<style lang="scss" scoped>
.newsinfo-container{
    padding: 0 4px;
    .suptitle{
        font-size: 16px;
        text-align: center;
        margin:15px 0;
        color: red;
    }
    .subtitle{
        font-size: 13px;
        color:#226aff;
        display: flex;
        justify-content: space-between;
    }
    .news-content{}
}
</style>
