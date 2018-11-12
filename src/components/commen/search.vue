<template>
    <div id="search">
        <input type="text" :style="style" :placeholder="placeholder" @click="goSearchPage()"/>
    </div>
</template>
<script>
    export default {
        props:['background'],
        data(){
            return {
                placeholder:'书籍5折疯抢'
            }
        },
        computed:{
            style:function(){
                console.log(this.background)
                return this.background?(()=>{
                    let str = '';
                    if(this.background.background){
                        str+=`background-color:${this.background['background']};`
                    }
                    if(this.background.color){
                        str+=`color:${this.background['color']};`
                    }
                    console.log(str)
                    return str;
                })():'';
            }
        },
        methods:{
           goSearchPage(){

               this.$router.push( {path:'/search'} )
           },

        }
    }
</script>
<style lang="scss" scopde>
    #search{
        width:100%;
        height:100%;
        box-sizing:border-box;
        padding:0.3rem 0.5rem;
        
        input{
            height:100%;
            width:100%;
            box-sizing:border-box;
            background:#fff url( /src/assets/icon/search.png ) no-repeat;
            background-position:0.8rem center;
            background-size:1.3rem auto;
            border:none;
            padding:0 1rem 0 2.5rem;
            border-radius:2rem;
            font-size:0.9rem;
            outline:none;

        }
    }
</style>
