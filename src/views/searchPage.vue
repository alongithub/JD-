<template>
    <div id="searchPage">
        <div class="searchPage">
            <div class="search_header">
                <div class="backView">
                    <along-back></along-back>
                </div>
                <div class="search_input">
                    <input type="text" ref="search"/>
                </div>
                <div class="btn_search">
                    <div class="a" @click="search()">搜索</div>
                </div>
                
            </div>
        </div>

        <div class="searchHistory">
            <p>
                最近搜索
                <a href="javascript:;" >s</a>
            </p>
            <div class="search_lists">
                <span v-for="history in this.$store.state.searchHistory">
                    {{history.name}}
                </span>
            </div>
        </div>
        
        
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            search(){
                var value = this.$refs.search.value;
                alert(value)
                this.$store.commit( 'addSearch',value );
            }
        }
    }
</script>
<style lang="scss">
    $height:2;
    @mixin hei($h){

    }
    .searchPage{
        padding:0.5rem 0 0.6rem 0;
        border-bottom:1px solid #ccc;
    }
    .search_header{
        display:flex;
        flex-direction:row;
        line-height:$height + rem;
        height:$height + rem;
        .backView{
            height:$height + rem;
            width:$height + rem;
        }
        .btn_search{
            height:$height + rem;
            box-sizing:border-box;
            width:1.5*$height + rem;
            margin:0 0.5rem;
            .a{
                display:inline-block;
                background:#e93b3d;
                color:#fff;
                text-align:center;
                width:100%;
                height:1.8rem;
                border-radius:10px;
                vertical-align:middle;
                line-height:1.8rem;
            }
        }
        .search_input{
            overflow:hidden;
            height:100%;
            box-sizing:border-box;
            flex:1 1 0;
            margin:0 0.5rem 0 1rem;
            input{
                width:100%;
                height:95%;
                box-sizing:border-box;
                border:none;
                vertical-align:middle;
                border-radius:1rem;
                outline:none;
                box-sizing:border-box;
                padding:0 1rem 0 2rem;
                font-size:1rem;
                background:#f5f5f5 url(/src/assets/icon/searchPage.png) no-repeat;
                background-position: 10px center;
                
            }
        }
    }
    .searchHistory{
        padding:0 0.5rem;
    }
</style>