<template>
    <div id="main">
        <div id="main_wrapper" style="overflow-y:hidden;">
                <router-view></router-view>
        </div>
        


        <div id="main_footer">
            <along-footer></along-footer>
        </div>
    </div>

</template>

<script>
    import Footer from '../components/commen/footer.vue'
    export default{
        data(){
            return {
            }
        },
        methods:{
           
        },
        components:{
            'along-footer':Footer,
        }

    }
</script>
<style lang="scss">
    #main {
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