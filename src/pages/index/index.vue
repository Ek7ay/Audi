<template>
  <div>
    <carousel></carousel>
    <user></user>
    <banner></banner>
    <index-icons></index-icons>
  </div>
</template>

<script>
  import Carousel from './Carousel'
  import User from './User'
  import Banner from './Banner'
  import IndexIcons from './Icons'

  export default {
    name: "index",
    components: {
      Carousel,
      User,
      Banner,
      IndexIcons,
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
