import Vue from 'vue'
import App from './App.vue'

//全局组件
import Message from './components/public/message.vue'
Vue.component( 'along-message',Message )
import Back from './components/public/back.vue'
Vue.component( 'along-back',Back )

Vue.prototype.goBack = function(){
  this.$router.back(-1)
}

import store from './store/'



import VueRouter from 'vue-router' 

import Main from './views/main.vue'
  import Home from './components/home.vue'
  import Class from './components/class.vue'
  import Find from './components/find.vue'
  import Cart from './components/cart.vue'
  import Mine from './components/mine.vue'
import MessagePage from './views/messagePage.vue'
import SearchPage from './views/SearchPage.vue'
import Product from './views/product.vue'
  import ProductDetail from './views/product/productDetail.vue'
Vue.use(VueRouter)
var routes = [
	
  {path:'/main',component:Main,
    children:[
      {path:'home',component:Home},
      {path:'class',component:Class},
      {path:'find',component:Find},
      {path:'cart',component:Cart},
      {path:'mine',component:Mine},
      
    ]
  },
  {path:'/search',component:SearchPage},
  {path:'/message',component:MessagePage},
  {path:'/product/:id',component:Product,
    children:[
      {path:'detail',component:ProductDetail},
    ]
  },
  {path:'*',redirect:'/main/home'},
  
]

const router = new VueRouter({
	//mode:'history',//不写mode默认为hash模式   hash => /#/get？id = 8 history => /get? id = 8  
	routes  //  routes:routes
})


require('./js/tool/viewport.js')
require('./style/commen/default.css')
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
