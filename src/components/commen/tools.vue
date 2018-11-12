<template>
    <div id="tools">
        <ul>
            <li v-for="(tool,index) in tools">
                <router-link :to="tool.link">
                    <p><img :src="tool.src"/></p>
                    <p class="toolname">{{tool.name}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>


<script>
    export default {
        data(){
            return{
                tools:[
                    {link:'',src:'/src/assets/icon/markit.png',name:'京东超市'},
                    {link:'',src:'/src/assets/icon/earth.png',name:'全球购'},
                    {link:'',src:'/src/assets/icon/fashion.png',name:'京东时尚'},
                    {link:'',src:'/src/assets/icon/fruit.png',name:'京东生鲜'},
                    {link:'',src:'/src/assets/icon/comehome.png',name:'京东到家'},
                    {link:'',src:'/src/assets/icon/chong.png',name:'充值缴费'},
                    {link:'',src:'/src/assets/icon/group.png',name:'9.9元拼'},
                    {link:'',src:'/src/assets/icon/zhe.png',name:'领券'},
                    {link:'',src:'/src/assets/icon/zhuan.png',name:'赚钱'},
                    {link:'',src:'/src/assets/icon/more.png',name:'全部'},
                ]
            }
        }
    }
</script>
<style lang="scss">
    #tools{
        background:url(/src/assets/icon/back.png) no-repeat;
        background-size:100% 100%;
        padding:0.5rem 0;
        ul{
            overflow:hidden;
            li{
                width:20%;
                text-align:center;
                float:left;
                font-size:0.85rem;
                color:#333;
                img{
                    height:2.5rem;width:2.5rem;
                }
            }
        }
    }
    .toolname{
        margin:0.2rem 0 0.5rem 0;
    }
</style>