import Vue from 'vue'
import Vuex  from 'vuex'
Vue.use(Vuex)

let state = {
    searchHistory:[{name:123}],
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
}

const store = new Vuex.Store({
    state,
    mutations,
})

export default store