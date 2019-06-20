<template>
  <div>
    <carousel></carousel>
    <user></user>
  </div>
</template>

<script>
  import Carousel from './Carousel'
  import User from './User'
  export default {
    name: "index",
    components: {
      Carousel,
      User,
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
