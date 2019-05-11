<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
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
</style>
