<template>
  <div>
    <carousel></carousel>
    <user></user>
    <banner></banner>
  </div>
</template>

<script>
  import Carousel from './Carousel'
  import User from './User'
  import Banner from './Banner'

  export default {
    name: "index",
    components: {
      Carousel,
      User,
      Banner,
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
