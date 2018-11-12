<template>
    <div id="productDetail">
        
        <div class="swiperView" ref="box">
            <div class="swiperWrapper" ref="swiperWrapper">
                <div class="banner" v-for="(banner,index) in banners" :key="index">
                        <img :src="banner.src"/>
                </div>
                
            </div>
            <p class = 'btns'>
               <span style="float:right;color:#fff;margin-right:1rem;font-size:0.8rem;background:rgba(0,0,0,0.5);border-radius:1rem;padding:0 0.5rem;">
                   <span style="font-size:1rem;font-weight:blod">{{index+1}}</span>/{{banners.length}}
               </span>
            </p>
        </div>
        <div style="padding-top:0.5rem;">
            <div class="notition" style="float:right;text-align:center;">
                <img src="/src/assets/icon/atition.png" alt=""/>
                <p>关注</p>
            </div>
            <p style="overflow:hidden;min-height:3rem;line-height:1.5rem;">
                <span class="tips" v-if="tips">
                    {{tips}}
                </span>
                {{title}}
            </p>
        </div>
        <p class="notice">
            {{notice}}
        </p>
        <div class="price">
            ￥{{price}}
            <span v-if="plus" class="plus">
                ￥{{plus}}

            </span>
            <button class="cell" @click="openCell()">降价通知</button>
        </div>


        
    </div>
</template>
<script>
    export default {
        data(){
            return{
                
                banners:[],
                index:0,
                interval:null,
                delay:4000,
                title:'',
                notice:'',
                price:'',
                plus:'',
                tips:'',

                
                
            }
        },
       
        methods:{
            changeBanner(i){
                console.log(i)
                this.index = i;
            },
            openCell(){
                console.log('降价通知')
            }
        },
        watch:{
            banners:function(){
                console.log( this.banners )
                this.$refs.swiperWrapper.style.width = (this.banners.length)*100 + '%';
                
            },
            index:function(){
                
                 this.$refs.swiperWrapper.style.left = ( - this.index%this.banners.length ) * 100 + "%";
            }
            
        },
        mounted() {
            this.banners = [ 
                { id:1,src:'/src/assets/static/pro1.webp' },
                { id:2,src:'/src/assets/static/pro2.webp' },
                { id:2,src:'/src/assets/static/pro3.webp' },
            ]

            this.title="360行车记录仪 G300 迷你隐藏 高清夜视 无线测速电子狗一体 黑灰色"
            this.notice="11.8日360品牌会员日秒杀到手299！价保11.11！"
            this.price = '365'
            this.plus = '200'
            this.tips="自营"

            let box = this.$refs.box;
            let longBox = this.$refs.swiperWrapper;

            let onoff = true,startX,endX,disX,index = 0;
            console.log(box)
            box.addEventListener("touchstart", (e)=> {
                console.log('start')
                if (onoff) {
                    var touches = e.touches[0];
                    startX = 0;
                    endX = 0;
                    disX = 0;
                    startX = touches.clientX;
                }
            },false)
            box.addEventListener("touchmove", (e)=> {
                let touches = e.touches[0];
                if(onoff){
                    endX = touches.clientX;
                    disX = endX - startX;
                    console.log( disX )
                    //longBox.style.transition = 0+'ms';
                    //event.preventDefault();
                }

            },false);
            box.addEventListener("touchend",()=> {
                if(onoff){
                    //longBox.style.transition = 300+'ms';
                    onoff = false;
                    if(Math.abs(disX)>200){
                        if(disX>0){
                            if(this.index >0){
                                this.index--;
                            }
                        }else{
                            if( this.index < this.banners.length-1 ){
                                this.index++;
                            }
                        }
                    }else{
                        this.index = this.index;
                    }
                    setTimeout(()=>{
                        onoff = true;
                    },300)
                }
            },false);

                
        },
    }
</script>
<style lang="scss" scoped>
    

    .tips{
        background: #f33333;
        color: #fff;margin:0 0.4rem; 
        font-size:0.8rem;vertical-align: middle;
        border:none;
        padding:0.1rem 0.3rem;
        position:relative;
        top:-0.2rem;

    }
    .notition{
        width:5rem;
        height:2rem;
        font-size: 0.8rem;
        height:2rem;
    }

    .notice{
        font-size:0.8rem;
        margin-top:0.5rem;

        color:#f33333;
    }
    .price{
        margin-top:0.5rem;
        color:#f33333;
    }
    .plus{
        color:#333;
        font-size:0.9rem;
        padding-right:3rem;
        background:url(/src/assets/icon/plus.png) no-repeat;
        background-position: right center;
    }
    .cell{
        font-size:1rem;
        float:right;
        background:#fff;
        border:1px solid #ccc;
        color:#666;
        padding:0.1rem 0.3rem;
        margin-right:0.5rem;
    }
    .swiperView{
        position:relative;
        height:55vh;
        overflow: hidden;
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
    
</style>