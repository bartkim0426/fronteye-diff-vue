<template>
<div>
  <h2>Room list</h2>
  <ul id='rooms'>
      <li v-for="room in rooms" v-bind:key="room.id">
        <a v-on:click="goToRoomUrl(room.id)">
          Room #{{ room.id }} {{ room.title }}
        </a>
      </li>
    </a>
  </ul>
  <div>
    <button v-on:click="createRoom">Create rooms</button>
    <input type="text" v-model="title"/>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ListRoom',
  data: function(){
    return {
      rooms: [
      ],
      api: "http://192.168.0.154:8000/api/v1/boards/boards/",
      title: '',
    }
  },
  methods: {
    goToRoomUrl: function(id) {
      this.$router.push({name:'SendData',params:{id: id}})
    },
    getRooms: function() {
        this.axios.get(this.api).then((response) => {
          console.log(response.data)
          this.rooms = response.data
      })
    },
    createRoom: function () {
      	var sendData = {
          'title': this.title,
          'content': 'test',
          'user': 1,
          'project': 1,
        }
        this.axios.post(this.api,
          sendData,
          ).then((response) => {
          console.log(response.data)
          this.rooms.push(response.data)
      })
    }, 
  },
  mounted() {
    this.getRooms()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
