<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import EventBus from './eventBus.js'

export default {
  name: 'app',
  created(){
    EventBus.$on( 'addShopcart',function(data){
      console.log(data)
    } )
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  width:100vw;
  height:100vh;
}


</style>
