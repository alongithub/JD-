<template>
    <div id="product">
        <div class="product_header">
            <div class="backView">
                <along-back></along-back>
            </div>
            <div class = "moreView">
                more
            </div>
            <div class="topCenter">
                商品
            </div>
            
        </div>
        <div class="product_body">
            <router-view></router-view>
        </div>
        <div class="product_bottom">
            
            <a class="btn_call" @click="kefu()" href="javascript:;">

                联系客服
            </a>
            <a class="btn_comeStore" @click="comeStore()" href="javascript:;">
                进店
            </a>
            <router-link to="/main/cart" class="btn_cart">购物车</router-link>
            <a class="btn_addToCart" @click="alertLayer()" href="javascript:;">加入购物车</a>
            <a class="btn_buyNow" @click="alertLayer()" href="javascript:;">立即购买</a>
            
        </div>

        <!-- layer弹出加入购物车 -->
        <div class="cart_layer" v-if="layer">
            <div class="cart_wrapper">
                <div class="cart_shadow" :style="{opacity}" @click="closeLayer()"></div>
                <div class="cart_product"  :style="{height,opacity}">

                    <div class="car_product_select">
                        <div class="select_header">
                            <a href="javascript:;" @click="closeLayer()"></a>
                            <div class="photo_wrapper">
                                <img :src="photo" alt="" />
                            </div>
                            <div class="price_selected">
                                <p style="height:2.5rem">
                                    <span class="selected_price">
                                        ￥{{selectedPrice}}
                                    </span>
                                    <span v-if="plus" class="selectedPlus_price">
                                        ￥{{selectedPlusPrice}}
                                    </span>
                                </p>
                                <p style="color:#999;font-size:0.8rem;line-height:1.2rem;">
                                    已选中
                                    <span style="color:#000;">
                                        {{selectVersion}}  {{selectedNum}} 件
                                    </span>
                                </p>
                            </div>
                        </div>
                        <br>
                        <product-tabs ref="tabs" @changeVersion="addVersion($event)"></product-tabs>
                        <div class="buynum">
                            数量
                            <p class="selectNum">
                                <a href="javascript:;" @click="changeNum(-1)"></a>
                                <input type="text" v-model="selectedNum" />
                                <a href="javascript:;" @click="changeNum(1)"></a>
                            </p>
                        </div>
                    </div>
                    <div class="cart_bottom">
                        <a href="javascript:;" class="sureAddToCart">加入购物车</a>
                        <router-link to="" class="sureBuyNow">立即购买</router-link>
                    </div>
                </div>
            </div>
            
        </div>

    </div>
</template>
<script>
    import ProductTabs from '../components/commen/productTabs.vue'
    export default {
        data(){
            return{
                productId:null,
                layer:false,
                opacity:0,
                height:0,

                plus:300,
                photo:'/src/assets/static/pro1.webp',
                selectedPrice:360,
                selectedPlusPrice:300,

                selectVersion:'彼岸准办',
                selectedNum:0,


            }
        },
        components:{
            'product-tabs':ProductTabs,
        },
        computed:{
            
            
        },
        watch:{
            selectedNum:function(newVal,oldVal){
                console.log( oldVal,newVal )
                if( newVal<1 ){
                    this.electedNumDefault();
                }
            }  
        },
        methods:{

            electedNumDefault(){
                this.selectedNum = 1;
            },

            addVersion(str){
                this.selectVersion = str;
            },
            alertLayer(){
                this.layer=true;
                setTimeout(()=>{
                    this.opacity = 1;
                    this.height = '75vh';
                },30)
                
            },
            closeLayer(){
                this.opacity = 0;
                this.height = 0;
                setTimeout(()=>{
                    this.layer=false;
                    
                },300)
                
            },
            changeNum(i){
                
                this.selectedNum += i;
                
            }
        },
        mounted(){
            this.productId = this.$route.params.id
            console.log( this.productId )
        }
    }
</script>
<style lang="scss">
    #product{
        display:flex;
        flex-direction:column;
        height:100%;
    }

    .product_header{
        height:3rem;
        border-bottom:1px solid #999;
    }
    .backView{
        height:100%;
        width:2rem;
        float:left;
    }
    .moreView{
        height:100%;
        width:3rem;
        float:right;
        line-height:3rem;
        text-align:left;
    }
    .topCenter{
        overflow:hidden;
        height:100%;
        text-align:center;
        line-height:3rem;
    }

    .product_body{
        flex:1 1 0;
        overflow-y:auto;
    }

    .product_bottom{
        height:3.5rem;
        border-top:1px solid #999;
        display:flex;
        flex-direction: row;
        a{
            
            height:3.5rem;
            
            text-align: center;
            
        }
        .btn_call{
            flex:1 1 2rem;
            font-size: 0.7rem;
            background:url(/src/assets/icon/kefu.png) no-repeat;
            background-position: center 0.5rem;
            background-size: 1.5rem auto;
            line-height: 5.4rem;
        }
        .btn_comeStore{
            flex:1 1 2rem;
            font-size: 0.7rem;
            background:url(/src/assets/icon/store.png) no-repeat;
            background-position: center 0.5rem;
            background-size: 1.5rem auto;
            line-height: 5.4rem;
        }
        .btn_cart{
            flex:1 1 2rem;
            font-size: 0.7rem;
            background:url(/src/assets/icon/cart.png) no-repeat;
            background-position: center 0.5rem;
            background-size: 1.5rem auto;
            line-height: 5.4rem;
        }
        .btn_addToCart{
            background: linear-gradient(to right,#C552EB,#A10CEB);
            flex:1 1 5rem;
            color:#fff;
            line-height: 3.5rem;
            font-size: 0.9rem;
        }
        .btn_buyNow{
            background: linear-gradient(to right,#FF5974,#FF0D0D) !important;
            flex:1 1 5rem;
            color:#fff;
            line-height: 3.5rem;
            font-size: 0.9rem;
        }
    }

    // 弹出加入购物车层
    .cart_layer{
        position:fixed;
        width:100vw;
        height:100vh;
        left:0;
        top:0;
        .cart_wrapper{
            width:100%;
            height:100%;
            position:relative;
            .cart_shadow{
                position:absolute;
                left:0;
                top:0;
                width:100%;
                height:100%;
                background:rgba(0,0,0,0.5);
                transition:0.3;
            }
            .cart_product{
                position: absolute;
                display:flex;
                flex-direction: column;
                width:100%;
                height:75vh;
                left:0;
                bottom:0;
                background: #fff;
                transition: 0.2s ;
                .car_product_select{
                    flex:1 1 0;
                    position:relative;
                    
                    .select_header{
                        a{position: absolute;width:2rem;height: 2rem;right:0rem;top:0rem;background: url(/src/assets/icon/close.png) no-repeat;background-position: center;background-size: 1rem auto;}
                        height:6rem;
                        .photo_wrapper{
                            float:left;
                            width:9rem;
                            text-align: center;
                            img{
                                width: 7rem;
                                height: 7rem;
                                transform: translateY(-2rem)
                            }
                        }
                        .price_selected{
                            line-height: 2.5rem;
                            overflow: hidden;
                            .selected_price{
                                font-size: 1.2rem;
                                color: #f33333;
                            }
                            .selectedPlus_price{
                                color: #333;
                                font-size: 0.9rem;
                                &:after{
                                    content: '';
                                    display: inline-block;
                                    width:3rem;
                                    height:2rem;
                                    background: url(/src/assets/icon/plus.png) no-repeat;
                                    background-position: center bottom;
                                    background-size: 2rem auto;
                                }
                            }
                        }
                        
                    }
                    .buynum{
                        height: 3rem;
                        color:#999;
                        line-height: 3rem;
                        padding: 0 0.5rem;
                        .selectNum{
                            float: right;
                            height: 100%;
                            line-height: 3rem;
                            a{
                                display: inline-block;
                                width: 2rem;
                                height:2rem;
                                background: #f0f0f0;
                                vertical-align: middle;
                                &:last-child{
                                    background: #f0f0f0 url(/src/assets/icon/addnum.png) no-repeat;
                                    background-position: center;
                                }
                                &:first-child{
                                    background: #f0f0f0 url(/src/assets/icon/deletenum.png) no-repeat;
                                    background-position: center;
                                }
                                
                            }
                            input{
                                height: 2rem;width:3rem;
                                text-align: center;
                                background: #f0f0f0;
                                border:none;
                                vertical-align: middle;
                                font-size: 1rem;
                                outline: none;
                                color: #777;
                                margin:0 0.1rem;
                            }
                        }
                    }
                    
                }
                .cart_bottom{
                    height:3rem;
                    line-height: 3rem;
                    display:flex;
                    flex-direction: row;
                    .sureAddToCart{
                        flex:1 1 0;
                        height:100%;
                        text-align: center;
                        color:#fff;
                        background: linear-gradient(to right,#C552EB,#A10CEB) !important;
                    }
                    .sureBuyNow{
                        flex:1 1 0;
                        height:100%;
                        text-align: center;
                        color:#fff;
                        background: linear-gradient(to right,#FF5974,#FF0D0D) !important;
                    }
                }
            }
        }
        
        
    }
</style>