import Vue from 'vue'
import Vuex  from 'vuex'
Vue.use(Vuex)

let state = {
    searchHistory:localStorage.city?localStorage.city:[],
    cartList:localStorage.cartList?localStorage.cartList:[],
}

//里面的方法用于改变state里面的数据
let mutations={
    addSearch(state,value){
        alert()
        console.log( state.searchHistory )
        state.searchHistory.push(
            {name:value}
        )
    },
    addCart(state,json){
        state.cartList.push(json)
        console.log('----------')
        console.log(json)
    },
    alterCart(){

    }



}

const store = new Vuex.Store({
    state,
    mutations,
})

export default store