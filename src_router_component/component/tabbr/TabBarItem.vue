<template>
    <div class="tab-bar-item" @click="itemClick">
     <!-- <img src="../../assets/img/tabbar/home.svg"/>
      <div>首页</div>-->
      <!--根据值判断显示对应的背景颜色-->
      <slot v-if="!isActive" name="item-icon" ></slot>
      <slot v-else name="item-icon-active" ></slot>
      <div :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
    </div>
</template>

<script>
  export default {
    props :{
      path : String,
      activeColor : {
        type : String,
        default : 'red'
      }
    },
    computed : {
      isActive() {
        // 查找当前的地址
        // /home -> item1(/home) = true
        // /home -> item1(/category) = false
        // /home -> item1(/cart) = true
        // /home -> item1(/profile) = true
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle () {
        return this.isActive ? {color : this.activeColor} : {}
      }
    },
    methods : {
      itemClick () {
       this.$router.replace(this.path)
      }
    }
  }
</script>

<style>
  .tab-bar-item {
    flex:1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }
  .active {
    color: red;
  }
</style>
