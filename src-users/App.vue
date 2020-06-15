<template>
  <div class="container">
    <Search/>
    <UserMain/>
  </div>
</template>

<script>
  // 引入组件
  import Search from './components/Search'
  import Main from './components/Main'
  export default {
    components : { // 定义组件
      Search,
      UserMain : Main
    }
  }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
