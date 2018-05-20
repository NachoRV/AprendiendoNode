<template>
    <pre>{{ server }}</pre>
</template>
<script>
import PostsService from '@/services/ApiServer'

export default {
  name: 'server',
  data(){
      return{
          server:[]
      }
  },
  mounted () {
    this.getServer()
  },
    methods: {
    async getServer () {
      const response = await PostsService.fetchPosts()
      this.server = response.data.posts
    },
  }
}

</script>
<style>

</style>
