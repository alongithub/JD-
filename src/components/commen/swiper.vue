<template>
    <div id="swiper">
        <div class="swiperWrapper" ref="swiperWrapper">
            <div class="banner" v-for="(banner,index) in banners">
                <router-link  :to="banner.link">
                    <img :src="banner.src"/>
                </router-link>
            </div>
            
        </div>
        <p class = 'btns'>
            <template v-for="(banner,i) in banners">
                <a href="javascript:;" @click="changeBanner(i)" :class="{btn:true,on:i==index%banners.length}"></a>
            </template>
        </p>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                banners:[],
                index:0,
                interval:null,
                delay:4000,
            }
        },
        methods:{
            changeBanner(i){
                console.log(i)
                this.index = i;
            }
        },
        watch:{
            banners:function(){
                console.log( this.banners )
                this.$refs.swiperWrapper.style.width = (this.banners.length)*100 + '%';
                clearInterval( this.interval )
                this.interval = setInterval( ()=>{
                    this.index ++;
                   
                },this.delay )
            },
            index:function(){
                 this.$refs.swiperWrapper.style.left = ( - this.index%this.banners.length ) * 100 + "%";
            }
            
        },
        mounted() {
            this.banners = [ 
                { id:1,link:'',src:'/src/assets/static/timg.jpg' },
                { id:2,link:'',src:'/src/assets/static/timg1.jpg' },
                { id:2,link:'',src:'/src/assets/static/timg2.jpg' },
            ]
            
        },  
    }
</script>
<style lang="scss" scoped>
    #swiper{
        width:100%;
        height:100%;
        overflow-x:hidden;
        position:relative;
    }
    .swiperWrapper{
        position:absolute;
        top:0;
        left:0;
        height:100%;
        transition:0.3s;
    }
    .banner{
        width:100vw;
        height:100%;
        float:left;
            overflow:hidden;
            img{
                
                width:100vw;height:100%;
            }
       
        
    }
    .btns{
        position:absolute;
        width:100vw;
        text-align:center;
        left:0px;
        bottom:20px;
    }
    .btn{
        display:inline-block;
        width:10px;
        height:10px;
        border-radius:5px;
        margin:0 5px;
        background:rgba(0,0,0,0.2);
        &.on{
            background:rgba(0,0,0,0.8);
        }
    }

</style>