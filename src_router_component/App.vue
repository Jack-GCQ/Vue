<template>
 <div id="app">
  <MainTabBar></MainTabBar>
   <router-view></router-view>
 </div>
</template>

<script>
import MainTabBar from './component/MainTabBar/MainTabBar'
  export default {
    name : 'APP',
    components : {
      MainTabBar
    }
  }
</script>

<style>
  @import 'assets/css/style.css';
</style>

