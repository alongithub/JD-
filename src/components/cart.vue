<template>
    <div id="cart">
        <div class="matters">

        
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
                </div>
            </div>
        </div>
        <div class="footer">
            <input type="radio">全选
            <span>合计：￥{{count}}</span>
            <a href="javascript:;" class="buynow">去结算</a>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                matters:[
                    {
                        title:'lg12yingcn 查宽屏IPS影评技术的坷拉激发ask老夫就挨了开始flak时间flash发神经浪费撒行方腊时尽量',
                        photo:'/src/assets/static/pro2.webp',
                        tabs:'',
                        price:'1799',
                        num:'2',
                    },
                    {
                        title:'lg12yingcn 查宽屏IPS影评技术的坷拉激发ask老夫就挨了开始flak时间flash发神经浪费撒行方腊时尽量',
                        photo:'/src/assets/static/pro2.webp',
                        tabs:'',
                        price:'1799',
                        num:'2',
                    },{
                        title:'lg12yingcn 查宽屏IPS影评技术的坷拉激发ask老夫就挨了开始flak时间flash发神经浪费撒行方腊时尽量',
                        photo:'/src/assets/static/pro2.webp',
                        tabs:'',
                        price:'1799',
                        num:'2',
                    },{
                        title:'lg12yingcn 查宽屏IPS影评技术的坷拉激发ask老夫就挨了开始flak时间flash发神经浪费撒行方腊时尽量',
                        photo:'/src/assets/static/pro2.webp',
                        tabs:'',
                        price:'1799',
                        num:'2',
                    },{
                        title:'lg12yingcn 查宽屏IPS影评技术的坷拉激发ask老夫就挨了开始flak时间flash发神经浪费撒行方腊时尽量',
                        photo:'/src/assets/static/pro2.webp',
                        tabs:'',
                        price:'1799',
                        num:'2',
                    },{
                        title:'lg12yingcn 查宽屏IPS影评技术的坷拉激发ask老夫就挨了开始flak时间flash发神经浪费撒行方腊时尽量',
                        photo:'/src/assets/static/pro2.webp',
                        tabs:'',
                        price:'1799',
                        num:'2',
                    },{
                        title:'lg12yingcn 查宽屏IPS影评技术的坷拉激发ask老夫就挨了开始flak时间flash发神经浪费撒行方腊时尽量',
                        photo:'/src/assets/static/pro2.webp',
                        tabs:'',
                        price:'1799',
                        num:'2',
                    },
                ]
            }
        },
        methods:{

        },
       
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
            height: 1rem;
        }
        .price{
            height: 2rem;
            line-height: 2rem;
        }
    }
</style>
