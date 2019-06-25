<template>
  <div>
    <carousel></carousel>
    <user></user>
    <banner></banner>
    <index-icons></index-icons>
    <cusser></cusser>
    <navigation></navigation>
  </div>
</template>

<script>
  import Carousel from './Carousel'
  import User from './User'
  import Banner from './Banner'
  import IndexIcons from './Icons'
  import Cusser from './Cusser'
  import Navigation from '@/common/Navigation'

  export default {
    name: "index",
    components: {
      Carousel,
      User,
      Banner,
      IndexIcons,
      Cusser,
      Navigation,
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
