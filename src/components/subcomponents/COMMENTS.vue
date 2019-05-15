<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <textarea placeholder="别太爱BB"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in cmtmes" :key="item.index">
                <div class="cmt-title">
                    第{{++index}}楼 用户：{{item.username}} 发表时间:{{item.passtime}}
                </div>
                <div class="cmt-body">
                    {{item.text}}
                </div>
            </div>
        </div>
        
        <mt-button type="primary" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
            cmtmes:[]
        }
    },
    created () {
        this.getNewsInfo1();
    },
    methods:{
         getNewsInfo1() {
             this.axios.get("https://www.apiopen.top/satinGodApi?type=1&page=1")
                .then(body => {
                    this.cmtmes = body.data.data
                    console.log(body.data)
                })
                
         }
    },
}
</script>

<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        margin: 10px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 30px;
                background-color: grey;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 30px;
            }
        }
    }
}
</style>
