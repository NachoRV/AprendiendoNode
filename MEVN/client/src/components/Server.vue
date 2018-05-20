<template>
    <pre>{{ server}}</pre>
</template>
<script>
import apiServer from '@/services/apiServer'
//import axios from 'axios';

export default {
  name: 'server',
  data () {
      return{
        server: []
      }
  },
  mounted () {
   this.getServer();
   /*  axios.get('http://localhost:3000/server')
        .then((respuesta) => {
            this.server = respuesta.data;
        })*/
  },
    methods: {
    async getServer () {
      const response = await apiServer.fetchServer()
      this.server = response.data
    },
  }
}

</script>
<style>

</style>
