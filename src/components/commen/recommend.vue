<template>
    <div id="recommend">
        
        
        <div id="recommendList">
            <div v-for="(shop,index) in shopList" class="recommend_list" :key="index">
                <router-link :to="shop.link">
                    <img class="photo" :src="shop.photo"/>
                    <p class="title overText2"><span class="tips" v-if="shop.tips">{{shop.tips}}</span>{{shop.title}}</p>
                    <p class="price">￥{{shop.price}}<span class="preferential" v-if="shop.preferential">{{shop.preferential}}</span><router-link to="/searchList" class="btn_like">看相似</router-link></p>
                    <div class="plus"><p class="plus_price" v-if="shop.plus">￥{{shop.plus}}</p></div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                shopList:[],
                off:null,
            }
        },
        methods:{
            addShop(){
                this.shopList.push( {
                        photo:'/src/assets/static/360.dpg',
                        title:'360自行车暗红色的看来圣诞节按时打卡上就2看来圣诞节按时打卡上就2看来圣诞节按时打卡上就23232 ',
                        price:'360',
                        link:'',
                        tips:'自营',
                    } );
                 this.shopList.push( {
                        photo:'/src/assets/static/360.dpg',
                        title:'360自行车暗红色的看来圣诞节按时打卡上就2323 ',
                        price:'360',
                        link:'',
                        tips:'自营',
                    } );
                this.$parent.has = true;
            }
        },

        watch:{
            
        },
        mounted() {
            

            this.shopList = [
                {
                    photo:'/src/assets/static/360.dpg',
                    title:'360自行车暗红色的看来圣诞节按时打卡上就 ',
                    price:'360',
                    link:'/product/1/detail',
                    tips:'',
                    plus:'200',
                    preferential:'满减'
                },
                {
                    photo:'/src/assets/static/360.dpg',
                    title:'360自行车暗红色的看来圣诞节按时打卡上就 ',
                    price:'360',
                    link:'/product/2/detail',
                    tips:'自营',
                }
            ]
        },
    }
</script>   
<style lang="scss" scoped>
    #recommendList{
        overflow:hidden;
    }
    
    .recommend_list{
        width:49.5vw;
        box-sizing:border-box;
        margin-bottom:0.2rem;
        
        float:left;
        background:#fff;
        &:nth-child(2n){
            float:right;
        }
        &:nth-child(2n-1){
            float:left;
        }
    }
    .tips{
        background:#f33333;
        padding:0rem 0.2rem;
        color:#fff;
        margin:0 0.2rem;
    }
    .title{
        font-size:0.9rem;
        
    }
    .photo{
        width:100%;
        height:45vw;
    }
    .price{
        color:#f33333;
        margin-top:0.5rem;
    }
    .preferential{
        font-size:0.8rem;
        padding:0.05rem 0.2rem;margin:0 0.5rem;
        border:1px solid #f33333;
    }
    .btn_like{
        border:1px solid #999;
        color:#666;
        float:right;
        font-size:0.8rem;
        height:1.5rem;
        line-height:1.5rem;
        padding:0 0.5rem;
        margin-right:0.5rem;
    }
    .plus{
        height:1.5rem;
        color:#666;
        font-size:0.95rem;
        margin-top:0.5rem;
    }
    .plus_price{
        height:100%;
        
        &:after{
            content:'';
            background:url( /src/assets/icon/plus.png ) no-repeat;
            display:inline-block;
            width:2rem;
            height:50%;
            margin-left:0.2rem;
            background-position:center top;
            background-size:100% auto;

        }
    }
</style>