<template>
  <div>
    <carousel></carousel>
    <user></user>
    <banner></banner>
    <index-icons></index-icons>
    <cusser></cusser>
    <bot-tab></bot-tab>
  </div>
</template>

<script>
  import Carousel from './Carousel'
  import User from './User'
  import Banner from './Banner'
  import IndexIcons from './Icons'
  import Cusser from './Cusser'
  import BotTab from '@/common/Bottab'

  export default {
    name: "index",
    components: {
      Carousel,
      User,
      Banner,
      IndexIcons,
      Cusser,
      BotTab,
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
