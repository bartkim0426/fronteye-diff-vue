<template>
<div>
  <h2>Room list</h2>
  <ul id='rooms'>
    <li v-for="room in rooms" v-bind:key="room.id">Room #{{ room.id }} {{ room.title }}</li>
  </ul>
  <div>
    <button v-on:click="getRooms">Get rooms</button>
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
    }
  },
  methods: {
    getRooms: function() {
      var api = "http://192.168.0.154:8000/api/v1/boards/boards/"
        this.axios.get(api).then((response) => {
          console.log(response.data)
          this.rooms = response.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
