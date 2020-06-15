<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader'
  import TodoFooter from './components/TodoFooter'
  import TodoList from './components/TodoList'

  export default {
    data () {
      return {
        //从localStorage 读取todos
        todos : JSON.parse(window.localStorage.getItem('todos_key') || '[]')
      }
    },
    components : {
      TodoHeader,
      TodoList,
      TodoFooter
    },
    methods : {
      addTodo (todo) {
        this.todos.unshift(todo) // 添加
      },
      deleteTodo (index) {
        this.todos.splice(index,1) // 删除
      },
      // 删除所有选中的todo
      deleteCompleteTodos () {
        this.todos = this.todos.filter(todo => !todo.complate)
      },
      //全选或全不选
      selectAllTodos (check) {
        this.todos.forEach(todo =>todo.complate = check)
      }
    },
    watch : {  //深度监视
      todos : {
        deep : true,
        handler : function (value) {
          //将todos最新的值 保存到localStorage
          window.localStorage.setItem('todos_key',JSON.stringify(value)
        }
      }
    }
  }
</script>

<style scoped>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>
