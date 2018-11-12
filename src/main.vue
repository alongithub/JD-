<template>
    <div id="app">
        <a href="javascript:;" @click="showw()" style="margin-top:10rem;">show</a>
        <transition  name="left" mode="out-in">
            <div v-if="show" style="position:fixed;height:100vh;width:100vw;background:#f00;z-index:999;" @click="show=false">

            </div>
        </transition>
        <div id="main_wrapper">
                <router-view></router-view>
        </div>
        


        <div id="main_footer">
            <along-footer></along-footer>
        </div>
    </div>

</template>

<script>
    import Footer from '/src/components/commen/footer.vue'
    export default{
        data(){
            return {
                show:false,
            }
        },
        methods:{
            showw(){
                this.show = true;
            }
        },
        components:{
            'along-footer':Footer,
        }

    }
</script>
<style lang="scss">
    #app {
        background:#f0f0f0;
        height:100vh;
        display:flex;
        flex-direction:column;
    }
    #main_wrapper {
        flex:1 1 0;
    }
    #main_footer {
        height:3rem;
    }

   
</style>