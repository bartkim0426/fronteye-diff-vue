<template>
    <form id="ex1" action="/email_post" method="post" @submit.prevent="sendPost">
        <div>{{ name }}</div>
        <input   v-model="title"
                 type="text" 
                 name="title">
                 <br>
        <button @click="sendEmail">Send</button>
    </form>
</template>

<script>
export default {
  name: 'SendData',
  props: ['name'],
  data: function() {
    return {
      name: '',
      title: '',
    }
  },
  methods: {
    sendPost: function () {
			this.axios.post('//jsonplaceholder.typicode.com/posts', {
      	userId: 1,
      })
      .then(function(res) {
      	console.log(res.data)
      }, function() {
      	console.log('failed')
      })
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
