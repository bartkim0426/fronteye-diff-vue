<template>
  <div id="app">
    <send-data name='seul'></send-data>
  </div>
</template>

<script>
import Helloworld from './components/HelloWorld'
import SendData from './components/SendData'

export default {
  name: 'App',
  components: {
    'hellow-world': Helloworld,
    'send-data': SendData,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
