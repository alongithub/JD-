<template>
    <router-link to="/message">
        <div id="message" ref="message" :class="backImg">
        </div>
    </router-link>
   
</template>
<script>
    export default {
        data(){
            return{
                messageNum:0,
            }
        },
        props:['backImgColor'],
        computed:{
            backImg:function(){
                return this.backImgColor?this.backImgColor:'';
            },
        },
        methods:{
           
        },
        mounted(){
            this.messageNum = 2
        },
    }
</script>
<style lang="scss" scoped>
    #message{
        height:100%;
        width:100%;
        background:url( '/src/assets/icon/messagebai.png' ) no-repeat;
        background-position:center;
        background-size: 50% auto;
        cursor:pointer;
        position: relative;
        &.black{
            background-image:url( '/src/assets/icon/message.png' );
            opacity:0.8;
        }
        
    }
</style>