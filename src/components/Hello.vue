<template>
  <div class="hello">
    <h1> {{ msg|uppercase}}</h1>
    <a v-link="{path:'/one111'}">aa</a>
     <a v-link="{path:'/two111'}">bb</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      list:["aa","bb","cc"]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
