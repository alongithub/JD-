<template>
    <div ref="home" style="overflow-y:auto;height:100%;">
        <div class="headView" ref="headView">
            <div  style="float:right;width:3rem;height:100%;text-align:center;box-sizing:border-box;padding:0.3rem;">
                <div ref="messageView"  style="background:rgba(0,0,0,0.5);height:2rem;width:2rem;border-radius:1rem;">
                    <along-message :backImgColor="messageBack"></along-message>
                </div>
                
            </div>
            <div style="overflow:hidden;height:100%;">
                <along-search :background="searchBack"></along-search>
            </div>
            
        </div>
        <div class="bannerView">
            <along-banner></along-banner>
        </div>
        <div class="toolsView">
            <div class="huodong">
                
            </div>
            <along-tools></along-tools>
        </div>
        <div class="recommendView">
            <along-recommend ref="recommend" ></along-recommend>
            <p class="getMore">加载更多</p>
        </div>
        
    </div>
</template>
<script>
    import Search from './commen/search.vue'
    import Banner from './commen/swiper.vue'
    import Tools from './commen/tools.vue'
    import Recommend from './commen/recommend.vue'


    export default {
        data(){
            return {
                onoff:false,
                has:true,
                msg:'父组件的内容',
                searchBack:{
                    background:'#fff',
                    color:'#fff',
                },
                messageBack:'white',
            }
        },
        components:{
            'along-tools':Tools,
            'along-banner':Banner,
            'along-search':Search,
            'along-recommend':Recommend,
        },
        methods:{
           changeMsg(val){
               this.msg = val;
           }
        },
        mounted() {
            const $home = this.$refs.home
            
            $home.onscroll = () =>{
                if( $home.scrollTop>100 ){
                    if( this.messageBack != 'black' ){
                        this.$refs.headView.className = 'headView top'
                        this.$refs.messageView.style.backgroundColor = 'transparent'
                        this.searchBack = {
                            background:'#f0f0f0',
                            color:'#fff',
                        }
                        this.messageBack = 'black'
                    }
                    
                }else{
                    if( this.messageBack != 'white' ){
                        this.$refs.headView.className = 'headView'
                        this.$refs.messageView.style.backgroundColor = 'rgba(0,0,0,0.5)'
                        this.searchBack = {
                            background:'#fff',
                            color:'#000',
                        }
                        this.messageBack = 'white'
                    }
                   
                }
                if( this.has ){
                    
                    if( $home.scrollHeight - $home.offsetHeight == $home.scrollTop ){
                        this.has = false;
                        this.$refs.recommend.addShop();

                    }
                }


            }
        },
    }
</script>
<style lang="scss" scoped>
    .headView{
        height:2.8rem;
        position:fixed;
        top:0;
        left:0;
        width:100vw;
        z-index:99;
        transition:0s;
        &.top{
            background : #fff;
            border-bottom: 1px solid #ccc;
        }
    }
    .bannerView{
        height:10rem;
        border-bottom:1px solid #ccc;
    }
    .toolsView{
        margin-top:-0.2rem;
        position:relative;
        z-index:10;
        .huodong{
            background:url( /src/assets/icon/huodong.gif ) no-repeat;
            background-size:100% 100%;
            height:7rem;
        }
        border-radius:10px;
    }
    .getMore{
        height:2rem;
        text-align:center;
        line-height:2rem;
    }
</style>