<template>
  <div>
    <h1>{{ room.title }}</h1>
    <codemirror v-model="code" :options="cmOptions">
    </codemirror>
  </div>
</template>

<script>
import 'codemirror/mode/javascript/javascript.js'
// theme css
import 'codemirror/theme/base16-dark.css'


export default {
  name: 'SendData',
  // props: ['name'],
  // components: {
  //   'code-mirror': Mirror,
  // },
  data: function() {
    return {
      room: {title: '', content: ''},
      name: '',
      title: '',
      code: '',
      api: "http://192.168.0.154:8000/api/v1/boards/boards/",
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
      var sendData = {
        'title': 'test',
        'content': this.code,
        'user': 1,
        'project': 1,
        'is_active': 'true',
      }
      var url = this.api + document.location.hash.split('/').slice(-1).pop() + '/'
      this.axios.put(url,
        sendData,
      ).then((response) => {
        console.log(response.data)
      }, function() {
        console.log('failed')
      })
    },
    getRoom: function() {
      var url = this.api + document.location.hash.split('/').slice(-1).pop();
      console.log(url);
      this.axios.get(url).then((response) => {
        console.log(response.data)
        this.room = response.data
        this.code = response.data.content
      })
    },
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror
    }
  },
  mounted() {
    // console.log('this is current codemirror object', this.codemirror)
    // you can use this.codemirror to do something...
    this.getRoom()
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
