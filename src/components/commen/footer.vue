<template>
    <div>
        <ul id="footer">
            <li v-for="(link,index) in links" @click="changeroute(index)" :class="{on:link.path==path}" :key="index" >
                <router-link :to="link.path">
                    <p style="position:relative;">
                        <span class="cartNum" v-if="link.type=='cart'&&$store.state.cartList.length!=0">{{$store.state.cartList.length}}</span>
                        <img :src="link.src" class="route"/>
                        <img :src="link.ed" class="route_on"/>
                    </p>
                    <p>{{link.name}}</p>
                </router-link>
                
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                cartnum:0,
                links:[
                    { src:'/src/assets/icon/home.png',ed:'/src/assets/icon/home_on.png',path:'/main/home',name:'首页',num:'0',type:'home' },
                    { src:'/src/assets/icon/class.png',ed:'/src/assets/icon/class_on.png',path:'/main/class',name:'分类',num:'0',type:'class' },
                    { src:'/src/assets/icon/find.png',ed:'/src/assets/icon/find_on.png',path:'/main/find',name:'发现',num:'0',type:'dind' },
                    { src:'/src/assets/icon/cart.png',ed:'/src/assets/icon/cart_on.png',path:'/main/cart',name:'购物车',num:'0',type:'cart' },
                    { src:'/src/assets/icon/mine.png',ed:'/src/assets/icon/mine_on.png',path:'/main/mine',name:'我的',num:'0',type:'mine' },
                ],
                path:'',

            }
        },
        methods:{
            changeroute(index){
                this.path = this.links[index].path;
            },
        },
        mounted(){
            
        }
    }
</script>

<style lang="scss">
    #footer{
        height:3rem;
        border-top:1px solid #ccc;
        background: #fff;
        li{
            padding-top:0.3rem;
            float:left;
            width:20%;
            text-align:center;
            font-size:0.8rem;
            p{
                color:#000;
                .cartNum{
                    color:#f00;
                    position:absolute;
                    right:0.7rem;
                    top:-0.2rem;
                    border:1px solid #f00;
                    padding:0 0.4rem;
                    border-radius:0.5rem;
                    height: 0.9rem;
                    line-height: 0.9rem;
                    font-size: 0.8rem;
                    font-weight: blod;
                    background: #fff;
                    transform: scale(0.8)

                }
            }
            .route_on{
                display:none;
            }
            .route{
                display:inline-block;
            }
            &.on{
                p{
                    color:#F10215;
                }
                .route{
                    display:none;
                }
                .route_on{
                    display:inline-block;
                }
            }
        }
    }
</style>