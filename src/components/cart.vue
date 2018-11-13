<template>
    <div id="cart">
        <div class="matters" ref="home">

        
            <div class="header">
            
                <div class="messageView">
                    <along-message></along-message>
                </div>
                <p> 购物车</p>
            </div>
            <div v-for="(matter,index) in matters" :key="index" class="matter">
                <div class="checkbox">
                    
                </div>
                <div class="photo">
                    <img :src="matter.photo" alt="">
                </div>
                <p class="title overText2">
                    {{matter.title}}
                </p>
                <p class="tabs">
                    {{matter.tabs}}
                </p>
                <div class="price">
                    ￥{{matter.price*matter.num}}
                    <!-- <a href="javascript:;" style="float:right;">-</a> -->
                    <input type="text" v-model="matter.num" style="font-size:1rem;width:3rem;float:right;border:none;height:100%;"/>
                    <!-- <a href="javascript:;" style="float:right">+</a> -->
                    <span style="float:right;color:#999;font-size:0.9rem;">件数：</span>
                </div>
                
            </div>
            <div v-if="matters.length==0" style="height:45vh;text-align:center;font-size:1.5rem;color:#ccc;">
                <img src="/src/assets/icon/nocart.png" alt="" style="margin:10vh 0 5vh 0;">
                <br/>
                购物车中还没有商品
            </div>
            <template v-if="matters.length==0" >
                <p class="tuijian">
                    <span>为您推荐</span>
                </p>
                <along-recommend ref="recommend"></along-recommend>
            </template>
        </div>
        <div class="footer">
            <input type="radio">全选
            <span>合计：￥{{count}}</span>
            <a href="javascript:;" class="buynow">去结算</a>
        </div>
    </div>
</template>
<script>
    import Recommend from './commen/recommend.vue'
    export default {
        data(){
            return{
                has:true,
                matters:[]
            }
        },
        computed:{
            count(){
                let count = 0;
                for( let matter of this.matters ){
                    count += matter.price*matter.num;
                }
                return count;   
            }
        },
        methods:{

        },
        mounted(){
           this.matters = this.$store.state.cartList;

            const $home = this.$refs.home
            $home.onscroll = () =>{
                if( this.has ){
                    
                    if( $home.scrollHeight - $home.offsetHeight == $home.scrollTop ){
                        this.has = false;
                        this.$refs.recommend.addShop();

                    }
                }
            }
        },
        components:{
            'along-recommend':Recommend,
        }
       
    }
</script>
<style lang="scss" scoped>
    #cart{
        height: 100%;
        display:flex;
        flex-direction: column;
        background: #fff;
    }
    .matters{
        flex:1 1 0;
        overflow-y:auto;
        
    }
    .footer{
        height: 3rem;
        line-height: 3rem;
        background:linear-gradient(to top, #f2F2f2, #fff,#fdfdfd);
        .buynow{
            float:right;
            height:100%;
            width:7rem;
            color:#fff;
            text-align: center;
            background:linear-gradient(to right, #FF4964, #FF0D0D)
        }
    }
    .header{
        background: url(/src/assets/static/meryback.jpg);
        text-align: center;
        line-height: 3.5rem;
        color:#fff;
        font-size: 1.15rem;
        height:3.5rem;
        letter-spacing: 0.1rem;
        position: relative;
        .messageView{
            position: absolute;
            top:0;
            right: 0;
            height:100%;
            width:3rem;
            padding:0.2rem;
            box-sizing: border-box
        }
    }

    .matter{
        background: #fff;
        overflow:hidden;
        padding:0.5rem;
        margin:0.5rem;
        box-shadow: -0.05rem 0.05rem 0.1rem  #d5d5d5;
        .photo{
            float:left;
            img{
                width:6rem;
                height:6rem;
            }
           
            
        }
        .title{
            font-size: 0.95rem;
            padding:0 0.5rem;
        }
        .tabs{
            height: 1.5rem;
            font-size: 0.8rem;
            color:#999;
            overflow: hidden;
            padding:0 0.5rem;
            line-height: 1.5rem;
        }
        .price{
            height: 2rem;
            line-height: 2rem;
            color:red;
        }
    }
    .tuijian{
        text-align:center;
        height:3rem;
        line-height:3rem;
        position:relative;
        margin:0 0.5rem;
        span{
            font-size:1rem;
            padding:0 1.5rem;
            color:#999;
            background:#FFF;
            position:relative;
            z-index:1;
        }
        &:after{
            content:'';

            position:absolute;
            top:50%;
            left:0;
            width:100%;
            border-bottom:1px solid #999;
        }
    }
</style>
