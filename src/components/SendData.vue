<template>
  <codemirror v-model="code" :options="cmOptions"></codemirror>
</template>

<script>
import 'codemirror/mode/javascript/javascript.js'
// theme css
import 'codemirror/theme/base16-dark.css'


export default {
  name: 'SendData',
  props: ['name'],
  // components: {
  //   'code-mirror': Mirror,
  // },
  data: function() {
    return {
      name: '',
      title: '',
      code: 'const a = 10dfsdf',
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
      }
    }
  },
  methods: {
    sendPost: function () {
      this.axios.post('//jsonplaceholder.typicode.com/posts', {
        code: this.code,
      })
      .then(function(res) {
        console.log(res.data)
      }, function() {
        console.log('failed')
      })
    },
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror
    }
  },
  mounted() {
    console.log('this is current codemirror object', this.codemirror)
    // you can use this.codemirror to do something...
  },
  beforeUpdate() {
    console.log('updated');
    this.sendPost()
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
