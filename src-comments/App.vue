<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
      <div class="container">
        <Add :addComment="addComment"/>
        <List :comments = "comments" :deleteComment="deleteComment"/>
      </div>
    </header>
  </div>

</template>

<script>

  import Add from './components/Add.vue'
  import List from './components/list.vue'

  export default {
    data () {
      return {
        comments : [  //数据在那个组件 更新数据的行为(方法)就应该定义在那个组件
          {
            name : 'Jack',
            content : 'Vue不错'
          },
          {
            name : 'Cat',
            content : 'Vue so Easy '
          },
          {
            name : 'Boy',
            content : 'Vue good  '
          }
        ]
      }
    },
    methods : {
      //添加评论
      addComment (comment) {
        this.comments.unshift(comment) // 添加到前面
      },
      //删除指定下标评论
      deleteComment(index) {
        this.comments.splice(index,1) //删除
      }
    },
    components : {
      Add,
      List
    }
  }
</script>

<style>
  .reply {
    margin-top: 0px;
  }

  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>
